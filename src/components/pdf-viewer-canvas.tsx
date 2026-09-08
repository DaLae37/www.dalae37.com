"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

// Use PDF.js decoding instead of device-specific image acceleration, which can
// produce incorrect colors on mobile browsers. Keep options stable across renders.
const documentOptions = {
  isImageDecoderSupported: false,
  isOffscreenCanvasSupported: false,
};

type PdfViewerCanvasProps = {
  fileUrl: string;
  title: string;
};

export default function PdfViewerCanvas({ fileUrl, title }: PdfViewerCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateSize = () => {
      setContainerWidth(container.clientWidth);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  const pageWidth = Math.floor(containerWidth * 0.8);

  return (
    <div className="pdf-viewer-canvas" ref={containerRef}>
      <Document
        file={fileUrl}
        options={documentOptions}
        loading={(
          <div className="pdf-viewer-status" role="status">
            {title}를 불러오는 중입니다.
          </div>
        )}
        error={(
          <div className="pdf-viewer-status" role="alert">
            PDF 미리보기를 불러오지 못했습니다. 위의 새 창 보기 또는 다운로드를 이용해 주세요.
          </div>
        )}
        onLoadSuccess={({ numPages }) => setPageCount(numPages)}
      >
        {pageWidth > 0 && Array.from({ length: pageCount }, (_, index) => (
          <Page
            key={`${fileUrl}-${index + 1}`}
            pageNumber={index + 1}
            width={pageWidth}
            devicePixelRatio={Math.min(2, window.devicePixelRatio || 1)}
            canvasBackground="#ffffff"
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
    </div>
  );
}
