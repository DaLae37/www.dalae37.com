"use client";

import { useState } from "react";

const logos = [
  { id: "dl", alt: "DL 로고" },
  { id: "amazing", alt: "Amazing 로고" },
] as const;

type LogoId = (typeof logos)[number]["id"];

type RotatingLogosProps = {
  sources: Record<LogoId, string>;
};

export function RotatingLogos({ sources }: RotatingLogosProps) {
  const [paused, setPaused] = useState<Record<LogoId, boolean>>({
    dl: false,
    amazing: false,
  });

  const toggleLogo = (id: LogoId) => {
    setPaused((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <div className="home-logos" aria-label="DaLae37 로고">
      {logos.map((logo) => (
        <button
          className={`logo-orbit${paused[logo.id] ? " is-paused" : ""}`}
          type="button"
          key={logo.id}
          onClick={() => toggleLogo(logo.id)}
          aria-pressed={paused[logo.id]}
          aria-label={`${logo.alt} 회전 ${paused[logo.id] ? "계속하기" : "멈추기"}`}
        >
          <img src={sources[logo.id]} alt={logo.alt} draggable={false} />
        </button>
      ))}
    </div>
  );
}
