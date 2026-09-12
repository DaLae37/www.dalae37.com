"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

export type ProjectBrowserItem = Omit<Project, "image"> & {
  imageUrl: string;
};

type ProjectBrowserProps = {
  projects: readonly ProjectBrowserItem[];
};

function normalizeSearchText(value: string) {
  return value.normalize("NFKC").toLocaleLowerCase("ko-KR");
}

function ProjectTags({ project }: { project: ProjectBrowserItem }) {
  const { technology, type } = project.classification;

  return (
    <span className="project-tags">
      <span className="visually-hidden">분류: </span>
      {technology ? `${technology} · ${type}` : type}
    </span>
  );
}

export function ProjectBrowser({ projects }: ProjectBrowserProps) {
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectBrowserItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filteredProjects = useMemo(() => {
    const terms = normalizeSearchText(query).trim().split(/\s+/).filter(Boolean);

    if (terms.length === 0) {
      return projects;
    }

    return projects.filter((project) => {
      const searchableText = normalizeSearchText([
        project.title,
        project.classification.technology ?? "",
        project.classification.type,
        ...(project.searchTerms ?? []),
        ...(project.repositories?.flatMap((repository) => repository.topics) ?? []),
      ].join(" "));

      return terms.every((term) => searchableText.includes(term));
    });
  }, [projects, query]);

  useEffect(() => {
    if (selectedProject && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedProject]);

  return (
    <>
      <div className="project-toolbar" role="search">
        <label className="project-search" htmlFor="project-search-input">
          <span>프로젝트 검색</span>
          <input
            id="project-search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="제목 또는 태그 검색"
            aria-controls="project-results"
            autoComplete="off"
          />
        </label>
        <p className="project-result-count" role="status" aria-live="polite">
          {filteredProjects.length}개 프로젝트
        </p>
      </div>

      {filteredProjects.length > 0 ? (
        <ul className="project-grid" id="project-results">
          {filteredProjects.map((project) => (
            <li key={project.slug}>
              <button
                className="project-item"
                type="button"
                aria-controls="project-dialog"
                aria-haspopup="dialog"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setSelectedProject(project);
                }}
              >
                <span className="project-media">
                  <img src={project.imageUrl} alt="" loading="lazy" />
                </span>
                <span className="project-content">
                  <strong className="project-title">{project.title}</strong>
                  <ProjectTags project={project} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="project-empty" id="project-results">
          <p>검색 조건에 맞는 프로젝트가 없습니다.</p>
          <button className="button" type="button" onClick={() => setQuery("")}>
            검색 지우기
          </button>
        </div>
      )}

      <dialog
        className="project-dialog"
        id="project-dialog"
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        aria-describedby="project-dialog-description"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
        onClose={() => {
          setSelectedProject(null);
          requestAnimationFrame(() => lastTriggerRef.current?.focus());
        }}
      >
        {selectedProject ? (
          <div className="project-dialog-panel">
            <div className="project-dialog-media">
              <img
                src={selectedProject.imageUrl}
                alt=""
              />
            </div>
            <div className="project-dialog-body">
              <header className="project-dialog-header">
                <div>
                  <p>프로젝트</p>
                  <h2 id="project-dialog-title">{selectedProject.title}</h2>
                </div>
                <form method="dialog">
                  <button className="project-dialog-close" type="submit">
                    닫기
                  </button>
                </form>
              </header>

              <ProjectTags project={selectedProject} />

              <p className="project-dialog-description" id="project-dialog-description">
                {selectedProject.description ?? "프로젝트 설명을 준비 중입니다."}
              </p>

              {selectedProject.repositories?.length ? (
                <section className="project-dialog-repositories" aria-labelledby="project-dialog-repositories-title">
                  <h3 id="project-dialog-repositories-title">GitHub 저장소</h3>
                  <ul className="project-repository-list" role="list">
                    {selectedProject.repositories.map((repository) => (
                      <li key={repository.url}>
                        <a
                          className="button"
                          href={repository.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <GithubIcon />
                          {repository.name}
                        </a>
                        {repository.topics.length ? (
                          <ul className="project-topic-list" aria-label={`${repository.name} Topics`}>
                            {repository.topics.map((topic) => (
                              <li key={topic}>{topic}</li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
