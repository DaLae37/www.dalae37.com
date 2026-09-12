"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconHintLink } from "@/components/icon-hint-link";
import { BlogIcon, GithubIcon, YoutubeIcon } from "@/components/icons";
import { site } from "@/config/site";

const socialIcons = {
  GitHub: GithubIcon,
  "Naver Blog": BlogIcon,
  YouTube: YoutubeIcon,
};

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 0);

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="DaLae37's website — 홈">
          <span className="brand-label">
            <strong className="brand-name">DaLae37</strong><span className="brand-suffix">&apos;s website</span>
          </span>
        </Link>

        <div className="social-nav" aria-label="외부 링크">
          {site.socials.map((item, index) => {
            const Icon = socialIcons[item.label];
            return (
              <IconHintLink
                key={item.href}
                align="end"
                hint={`${item.label} 열기`}
                hintId={`header-social-hint-${index}`}
                href={item.href}
                label={item.label}
                position="bottom"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon />
              </IconHintLink>
            );
          })}
        </div>
      </div>

      <nav className="main-nav" aria-label="주 메뉴">
        <div className="nav-inner">
          {site.navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} data-active={active || undefined} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
