import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "게시판",
  description: "dalae37.com의 게시판 페이지",
};

export default function BoardPage() {
  return (
    <div className="section-shell page-stack">
      <PageHeading title="게시판" />
      <p className="empty-state">준비 중입니다.</p>
    </div>
  );
}
