"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type IconHintLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "aria-label" | "aria-describedby"> & {
  children: ReactNode;
  hint: string;
  hintId: string;
  label: string;
  linkClassName?: string;
  position?: "top" | "bottom";
  align?: "start" | "center" | "end";
};

export function IconHintLink({
  align = "center",
  children,
  hint,
  hintId,
  label,
  linkClassName,
  position = "top",
  ...linkProps
}: IconHintLinkProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dismissVisibleHint = (event: KeyboardEvent) => {
      const wrapper = wrapperRef.current;

      if (
        event.key === "Escape"
        && wrapper
        && (wrapper.matches(":hover") || wrapper.contains(document.activeElement))
      ) {
        setIsDismissed(true);
      }
    };

    document.addEventListener("keydown", dismissVisibleHint);
    return () => document.removeEventListener("keydown", dismissVisibleHint);
  }, []);

  return (
    <span
      ref={wrapperRef}
      className="icon-hint-link"
      data-align={align}
      data-dismissed={isDismissed || undefined}
      data-position={position}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsDismissed(false);
        }
      }}
      onFocusCapture={() => setIsDismissed(false)}
      onPointerLeave={(event) => {
        if (!event.currentTarget.contains(document.activeElement)) {
          setIsDismissed(false);
        }
      }}
    >
      <a
        {...linkProps}
        className={linkClassName}
        aria-describedby={hintId}
        aria-label={label}
      >
        {children}
      </a>
      <span className="icon-hint" id={hintId} role="tooltip">
        {hint}
      </span>
    </span>
  );
}
