import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { projects } from "@/data/projects";
import { resourceUrl } from "@/lib/resource";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "DaLae37의 프로젝트 및 포트폴리오",
};

export default function ProjectPage() {
  return (
    <div className="section-shell page-stack">
      <PageHeading
        title="프로젝트"
        action={<a className="button" href={resourceUrl("/project/portfolio.pdf")} target="_blank" rel="noreferrer noopener">포트폴리오 PDF</a>}
      />

      <section className="project-grid">
        {projects.map((project) => (
          <article className="project-item" key={project.slug}>
            <div className="project-media">
              <img src={resourceUrl(project.image)} alt={`${project.title} 프로젝트 이미지`} loading="lazy" />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.tags.join(" · ")}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
