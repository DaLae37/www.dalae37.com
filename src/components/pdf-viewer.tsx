"use client";

import dynamic from "next/dynamic";

type PdfViewerProps = {
  fileUrl: string;
  title: string;
};

const PdfViewerCanvas = dynamic(() => import("./pdf-viewer-canvas"), {
  ssr: false,
  loading: () => (
    <div className="pdf-viewer-status" role="status">
      PDF 뷰어를 불러오는 중입니다.
    </div>
  ),
});

export function PdfViewer(props: PdfViewerProps) {
  return (
    <div
      className="pdf-viewer"
      role="region"
      aria-label={`${props.title} PDF 미리보기`}
      tabIndex={0}
    >
      <PdfViewerCanvas {...props} />
    </div>
  );
}
