import { Suspense } from "react";
import { connection } from "next/server";
import { fetchLambdaFunctionUrlHtml } from "@/lib/lambda-function-url";

const teams = [
  {
    id: "samsunglions",
    name: "삼성 라이온즈",
    functionUrl:
      "https://dw2sbx3tcyb5rkho7q7xeb6enu0oprzh.lambda-url.ap-northeast-2.on.aws/",
  },
  {
    id: "fcseoul",
    name: "FC서울",
    functionUrl:
      "https://f3vcbw6pmxuz7zcdtrn2unovui0nvvdb.lambda-url.ap-northeast-2.on.aws/",
  },
] as const;

type Team = (typeof teams)[number];

function TeamCardFallback({ team }: { team: Team }) {
  return (
    <div
      className={`home-team-card-placeholder home-team-card-placeholder--${team.id}`}
      aria-label={`${team.name} 카드`}
    >
      {team.id}
    </div>
  );
}

async function TeamCard({ team }: { team: Team }) {
  await connection();

  try {
    const html = await fetchLambdaFunctionUrlHtml(team.functionUrl);

    return (
      <div
        className={`home-team-card home-team-card--${team.id}`}
        aria-label={`${team.name} 팀 정보`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch (error) {
    console.error(
      `Failed to load the ${team.name} home card:`,
      error instanceof Error ? error.message : "Unknown error",
    );

    return <TeamCardFallback team={team} />;
  }
}

export function HomeTeamCards() {
  return (
    <div className="home-team-cards" aria-label="응원하는 스포츠 팀">
      {teams.map((team) => (
        <Suspense key={team.id} fallback={<TeamCardFallback team={team} />}>
          <TeamCard team={team} />
        </Suspense>
      ))}
    </div>
  );
}
