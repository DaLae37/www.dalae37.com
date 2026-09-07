"use client";

import { usePathname } from "next/navigation";

export function BackToTop() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="main-back-to-top">
      <a className="back-to-top" href="#top" aria-label="페이지 맨 위로 이동">
        <span aria-hidden="true">↑</span>
      </a>
    </div>
  );
}
