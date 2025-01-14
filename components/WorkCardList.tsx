import { WorkCard } from "./WorkCard";

function WorkCardList() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <WorkCard></WorkCard>
      <WorkCard></WorkCard>
      <WorkCard></WorkCard>
    </div>
  );
}

export { WorkCardList };
