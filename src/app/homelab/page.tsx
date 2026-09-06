import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "홈랩",
  description: "dalae37.com의 서비스 인프라 구성",
};

const infrastructure = [
  {
    role: "Edge",
    provider: "Cloudflare",
    description: "외부 요청이 가장 먼저 도달하는 DNS·Edge 계층",
    status: "현재 구성",
  },
  {
    role: "WEB",
    provider: "AWS",
    description: "TLS 진입점 및 정적 콘텐츠를 담당하는 웹 계층",
    status: "현재 구성",
  },
  {
    role: "WAS",
    provider: "AWS",
    description: "비즈니스 로직과 API를 담당할 Spring 애플리케이션 계층",
    status: "확장 예정",
  },
  {
    role: "DB",
    provider: "Azure",
    description: "운영 데이터 저장 계층",
    status: "확장 예정",
  },
] as const;

export default function HomelabPage() {
  return (
    <div className="section-shell page-stack homelab-page">
      <PageHeading
        title="홈랩"
        description="dalae37.com의 서버와 인프라 구성"
        action={
          <a
            className="button"
            href="https://github.com/DaLae37/Infrastructure"
            target="_blank"
            rel="noreferrer noopener"
          >
            Infrastructure 저장소
          </a>
        }
      />

      <section className="homelab-section" aria-labelledby="infrastructure-title">
        <div className="homelab-section-heading">
          <h2 id="infrastructure-title">서비스 구성</h2>
          <p>www.dalae37.com의 서버와 인프라 구성</p>
        </div>

        <dl className="infrastructure-list">
          {infrastructure.map((item) => (
            <div className="infrastructure-row" key={item.role}>
              <dt>{item.role}<span>{item.provider}</span></dt>
              <dd>{item.description}</dd>
              <dd className="infrastructure-status">{item.status}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
