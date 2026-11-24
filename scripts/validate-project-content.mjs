import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/projects.ts";

const contentRoot = fileURLToPath(new URL("../content/projects/", import.meta.url));
const fields = ["period", "stack", "team", "role", "highlightedTeamRole", "images", "pending"];
const sections = ["개발 목적", "PPTX 기록", "공개 자료로 확인한 내용", "관련 링크"];

function isText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isTextList(value) {
  return Array.isArray(value) && value.length > 0 && value.every(isText) && new Set(value).size === value.length;
}

function parseContent(source) {
  const match = /^# ([^\n]+)\n\n```json\n(.*?)\n```\n\n(## .*)$/s.exec(source.replaceAll("\r\n", "\n"));
  assert(match, "제목, JSON 메타데이터, 본문 순서를 확인하세요.");
  const [, title, json, markdown] = match;
  assert(isText(title), "판본 제목이 필요합니다.");
  const metadata = JSON.parse(json);
  assert(metadata && Object.keys(metadata).every((key) => fields.includes(key)), "알 수 없는 메타데이터 필드입니다.");
  assert(isText(metadata.period) && isTextList(metadata.stack), "개발 기간과 기술 목록이 필요합니다.");
  for (const field of ["team", "role", "highlightedTeamRole"]) {
    assert(!(field in metadata) || isText(metadata[field]), `잘못된 필드: ${field}`);
  }
  assert(!("pending" in metadata) || isTextList(metadata.pending), "검증 대기 항목명을 확인하세요.");
  assert(Array.isArray(metadata.images) && metadata.images.length > 0, "원본 그림 참조가 필요합니다.");
  for (const image of metadata.images) {
    assert(image && Object.keys(image).every((key) => ["file", "width", "height"].includes(key)), "잘못된 그림 필드입니다.");
    assert(/^image[1-9]\d*\.png$/.test(image.file), "원본 프로젝트 그림 파일명이 필요합니다.");
    assert([image.width, image.height].every((n) => Number.isSafeInteger(n) && n > 0), "원본 픽셀 크기가 필요합니다.");
  }
  assert(isTextList(metadata.images.map((image) => image.file)), "같은 판본에 중복된 그림입니다.");

  const body = new Map();
  for (const block of markdown.trimEnd().split(/^## /m).slice(1)) {
    const end = block.indexOf("\n");
    const heading = block.slice(0, end);
    const text = block.slice(end + 1).trim();
    assert(end > 0 && sections.includes(heading) && !body.has(heading) && text, `잘못된 본문 섹션: ${heading}`);
    body.set(heading, text);
  }
  assert(body.has("개발 목적") && body.has("PPTX 기록"), "개발 목적과 PPTX 기록이 필요합니다.");
  assert(body.get("PPTX 기록").split("\n").every((line) => /^- \S/.test(line)), "PPTX 기록은 목록으로 작성하세요.");
  if (body.has("공개 자료로 확인한 내용")) {
    assert(/\[[^\]]+\]\(https:\/\/(?:github\.com\/[^/]+\/[^/]+\/(?:blob|tree)\/[0-9a-f]{40}\/|doi\.org\/10\.)[^)]+\)/.test(body.get("공개 자료로 확인한 내용")), "공개 커밋 또는 발표 서지 근거가 필요합니다.");
  }
  if (body.has("관련 링크")) {
    const links = body.get("관련 링크").split("\n");
    assert(links.every((line) => /^- \[[^\]]+\]\(https:\/\/[^\s)]+\)$/.test(line)), "공개 HTTPS 링크를 목록으로 작성하세요.");
  }
  return { title, metadata, body };
}

export async function loadProjectContent(directory = contentRoot) {
  const catalog = new Map(projects.map((project) => [project.slug, project]));
  assert.equal(catalog.size, projects.length, "프로젝트 slug가 중복됩니다.");
  const slides = new Map();
  const entries = await readdir(directory, { withFileTypes: true });
  const contentSlugs = new Set();
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const project = catalog.get(entry.name);
    assert(entry.isDirectory() && project, `등록되지 않은 프로젝트 경로: ${entry.name}`);
    const files = (await readdir(join(directory, entry.name))).filter((name) => !name.startsWith("."));
    assert(files.length > 0, `빈 프로젝트 디렉터리: ${entry.name}`);
    contentSlugs.add(entry.name);
    const variants = new Set();
    for (const file of files) {
      const path = join(entry.name, file);
      const match = /^(\d{2,})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/.exec(file);
      assert(match, `잘못된 콘텐츠 파일명: ${path}`);
      assert(!variants.has(match[2]), `중복된 프로젝트 판본: ${path}`);
      variants.add(match[2]);
      const slide = Number(match[1]);
      assert(slide >= 7 && Number.isSafeInteger(slide) && !slides.has(slide), `잘못되거나 중복된 슬라이드: ${path}`);
      const source = await readFile(join(directory, path), "utf8");
      try {
        slides.set(slide, { project, slide, variant: match[2], ...parseContent(source) });
      } catch (error) {
        throw new Error(`${path}: ${error.message}`, { cause: error });
      }
    }
  }
  for (const project of projects) {
    if (project.publication.pdf !== false) {
      assert(contentSlugs.has(project.slug), `상세 콘텐츠가 누락된 프로젝트: ${project.slug}`);
    }
  }
  for (let slide = 7; slide <= 45; slide++) {
    assert(slides.has(slide), `원본 상세 슬라이드 누락: ${slide}`);
  }
  return [...slides.values()].sort((left, right) => left.slide - right.slide);
}

if (import.meta.main) {
  const slides = await loadProjectContent();
  const slugs = new Set(slides.map(({ project }) => project.slug));
  console.log(`Verified ${slides.length} portfolio slides for ${slugs.size} projects.`);
}
