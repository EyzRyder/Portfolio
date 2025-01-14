import Carousel from "./Carousel";
//import { WorkCard } from "./WorkCard";

function WorkCardList() {
  return (
    <div
      id="work"
      className="flex h-screen flex-col items-center gap-3 space-y-5 overflow-hidden"
    >
      <h1 className="font-alt text-5xl text-grau-3">Portfolio</h1>

      <Carousel />
    </div>
  );
}

export { WorkCardList };
