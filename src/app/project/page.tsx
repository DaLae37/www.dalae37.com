import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { ProjectBrowser } from "@/components/project-browser";
import { projects } from "@/data/projects";
import { resourceUrl } from "@/lib/resource";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "DaLae37의 프로젝트 및 포트폴리오",
};

export default function ProjectPage() {
  const publishedProjects = projects
    .filter((project) => project.published)
    .map(({ image, ...project }) => ({
      ...project,
      imageUrl: resourceUrl(image),
    }));

  return (
    <div className="section-shell page-stack">
      <PageHeading
        title="프로젝트"
        action={<a className="button" href={resourceUrl("/project/portfolio.pdf")} target="_blank" rel="noreferrer noopener">포트폴리오 PDF</a>}
      />

      <ProjectBrowser projects={publishedProjects} />
    </div>
  );
}
