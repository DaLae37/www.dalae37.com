import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.21.7-3.89-1.36-3.89-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.05.78 2.13v3.17c0 .31.21.67.79.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export function BlogIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M16.27 12.85 7.38 0H0v24h7.73V11.16L16.62 24H24V0h-7.73v12.85Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M23.5 6.19a3 3 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3 3 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3 3 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3 3 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2.5 4h19A2.5 2.5 0 0 1 24 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 0 17.5v-11A2.5 2.5 0 0 1 2.5 4Zm0 2 9.5 7 9.5-7h-19Zm19 12a.5.5 0 0 0 .5-.5V8.47l-10 7.36-10-7.36v9.03a.5.5 0 0 0 .5.5h19Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M5 11h10.17l-3.59-3.59L13 6l6 6-6 6-1.42-1.41L15.17 13H5v-2Z" />
    </svg>
  );
}
