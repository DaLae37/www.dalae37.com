import { site } from "@/config/site";
import { MailIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span><a href="https://github.com/dalae37/www.dalae37.com">www.dalae37.com</a></span>
        <div className="footer-actions">
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer noopener">CC BY 4.0</a>
          <a className="mail-link" href={`mailto:${site.email}`} aria-label="이메일 보내기">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
