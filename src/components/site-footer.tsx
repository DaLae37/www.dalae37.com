import { site } from "@/config/site";
import { MailIcon } from "@/components/icons";
import { resourceUrl } from "@/lib/resource";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-credit">
          <span className="footer-copyright-symbol">©</span>{" "}
          {currentYear} DaLae37.{" "}
          <a
            className="cc-license"
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="license noreferrer noopener"
            aria-label="Creative Commons Attribution 4.0 International 라이선스"
          >
            <span>CC BY 4.0.</span>
            <span className="cc-license-icons" aria-hidden="true">
              <img src={resourceUrl("/license/cc.svg")} width="14" height="14" alt="" />
              <img src={resourceUrl("/license/by.svg")} width="14" height="14" alt="" />
            </span>
          </a>
        </div>
        <div className="footer-actions">
          <a href="https://github.com/dalae37/www.dalae37.com" target="_blank" rel="noreferrer noopener">Source Code</a>
          <a className="mail-link" href={`mailto:${site.email}`} aria-label="이메일 보내기">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
