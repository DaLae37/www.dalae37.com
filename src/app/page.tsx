import { RotatingLogos } from "@/components/rotating-logos";
import { resourceUrl } from "@/lib/resource";

export default function Home() {
  return (
    <section className="home-page" aria-labelledby="home-title">
      <h1 id="home-title" className="visually-hidden">DaLae37&apos;s website</h1>
      <RotatingLogos
        sources={{
          dl: resourceUrl("/logo/dl-logo.png"),
          amazing: resourceUrl("/logo/amazing-logo.png"),
        }}
      />
    </section>
  );
}
