import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { webGames } from "@/data/webgames";
import { gameUrl, resourceUrl } from "@/lib/resource";

export const metadata: Metadata = {
  title: "웹 게임",
  description: "DaLae37의 WebGPU 및 WebGL 게임",
};

export default function WebGamePage() {
  return (
    <div className="section-shell page-stack">
      <PageHeading
        title="웹 게임"
        description="게임을 선택하면 새 창에서 실행됩니다."
      />

      <section className="game-grid">
        {webGames.map((game) => (
          <a className="game-item" key={game.slug} href={gameUrl(`/${game.slug}/index.html`)} target="_blank" rel="noreferrer noopener">
            <div className="game-media">
              <img src={resourceUrl(game.image)} alt="" loading="lazy" />
            </div>
            <div className="game-content">
              <h2>{game.title}</h2>
              <p>{game.subtitle}</p>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
