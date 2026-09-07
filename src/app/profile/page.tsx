import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { PdfViewer } from "@/components/pdf-viewer";
import { ProfileIcon } from "@/components/profile-icon";
import { profileGroups, profileLinks } from "@/data/profile";
import { resourceUrl } from "@/lib/resource";

export const metadata: Metadata = {
  title: "프로필",
  description: "DaLae37의 프로필",
};

const profileDocuments = [
  {
    title: "이력서",
    path: "/profile/resume.pdf",
    downloadName: "resume.pdf",
  },
  {
    title: "경력기술서",
    path: "/profile/career-description.pdf",
    downloadName: "career-description.pdf",
  },
] as const;

export default function ProfilePage() {
  return (
    <div className="section-shell page-stack">
      <PageHeading title="프로필" />

      <dl className="profile-details">
        {profileGroups.map((group) => (
          <div className="profile-row" key={group.title}>
            <dt>{group.title}</dt>
            <dd>
              <ul className="profile-skills" role="list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <section className="profile-links-section" aria-labelledby="profile-links-title">
        <h2 id="profile-links-title">온라인 프로필</h2>
        <div className="social-nav profile-links">
          {profileLinks.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer noopener" aria-label={item.label} title={item.label}>
              <ProfileIcon name={item.label} />
            </a>
          ))}
        </div>
      </section>

      <section className="profile-documents" aria-label="이력서 및 경력기술서">
        {profileDocuments.map((document) => {
          const documentUrl = resourceUrl(document.path);
          const previewUrl = `${documentUrl}#view=FitH&zoom=page-width&navpanes=0&pagemode=none`;
          const viewerUrl = `/resource${document.path}`;

          return (
            <article className="document-panel" key={document.path}>
              <div className="document-header">
                <h2>{document.title}</h2>
                <div className="document-actions">
                  <a className="button" href={previewUrl} target="_blank" rel="noreferrer noopener" aria-label={`${document.title} 새 창에서 보기`}>
                    새 창에서 보기
                  </a>
                  <a className="button" href={documentUrl} download={document.downloadName} aria-label={`${document.title} PDF 다운로드`}>
                    PDF 다운로드
                  </a>
                </div>
              </div>

              <PdfViewer fileUrl={viewerUrl} title={document.title} />
            </article>
          );
        })}
      </section>
    </div>
  );
}
