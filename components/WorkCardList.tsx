"use client";
import { workData } from "@/data/works";
import { WorkCard } from "./WorkCard";

function WorkCardList() {
  return (
    <div
      id="work"
      className="flex min-h-screen flex-col justify-center items-center gap-3 space-y-5 "
    >
      <h1 className="font-alt text-5xl text-grau-3">Portfolio</h1>
      {workData.map((work, index) => (
        <WorkCard key={work._id} data={work} index={index} />
      ))}
    </div>
  );
}

export { WorkCardList };
