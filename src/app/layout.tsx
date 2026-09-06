import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/config/site";
import { resourceUrl } from "@/lib/resource";

const notoSansKr = Noto_Sans_KR({
  weight: "variable",
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: resourceUrl("/logo/dl-logo.png"), width: 512, height: 512 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <body>
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
