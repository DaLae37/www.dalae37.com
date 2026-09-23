import { Suspense } from "react";
import { connection } from "next/server";
import { fetchLambdaFunctionUrlHtml } from "@/lib/lambda-function-url";

type TeamCardPlaceholderProps = {
  ariaLabel: string;
  label: string;
};

function TeamCardPlaceholder({ ariaLabel, label }: TeamCardPlaceholderProps) {
  return (
    <div className="interest-card-placeholder" aria-label={ariaLabel}>
      <span>{label}</span>
    </div>
  );
}

type TeamCardProps = {
  ariaLabel: string;
  fallbackLabel: string;
  functionUrl: string;
};

async function TeamCard({ ariaLabel, fallbackLabel, functionUrl }: TeamCardProps) {
  await connection();

  try {
    const html = await fetchLambdaFunctionUrlHtml(functionUrl);

    return (
      <div
        className="interest-card-embed"
        aria-label={`${ariaLabel} 팀 정보`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch (error) {
    console.error(
      `Failed to load the ${ariaLabel} interest card:`,
      error instanceof Error ? error.message : "Unknown error",
    );

    return <TeamCardPlaceholder ariaLabel={`${ariaLabel} 카드`} label={fallbackLabel} />;
  }
}

const sportsTeams = [
  {
    id: "samsunglions",
    ariaLabel: "삼성 라이온즈",
    functionUrl:
      "https://dw2sbx3tcyb5rkho7q7xeb6enu0oprzh.lambda-url.ap-northeast-2.on.aws/",
  },
  {
    id: "fcseoul",
    ariaLabel: "FC서울",
    functionUrl:
      "https://f3vcbw6pmxuz7zcdtrn2unovui0nvvdb.lambda-url.ap-northeast-2.on.aws/",
  },
] as const;

export function Interests() {
  return (
    <section className="interests" aria-labelledby="interests-title">
      <header className="interests-heading">
        <div>
          <p className="interests-eyebrow">INTERESTS</p>
          <h2 id="interests-title">관심사</h2>
        </div>
      </header>

      <div className="interest-category">
        <div className="interest-tabs" aria-label="관심사 카테고리">
          <span className="interest-tab is-active">스포츠</span>
        </div>

        <div className="interest-tab-panel">
          <div className="sports-team-grid">
            {sportsTeams.map(({ id, ariaLabel, functionUrl }) => (
              <Suspense
                key={id}
                fallback={<TeamCardPlaceholder ariaLabel={`${ariaLabel} 카드`} label={id} />}
              >
                <TeamCard
                  ariaLabel={ariaLabel}
                  fallbackLabel={id}
                  functionUrl={functionUrl}
                />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
