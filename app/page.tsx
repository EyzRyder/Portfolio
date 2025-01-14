import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { WorkCardList } from "@/components/WorkCardList";
import { Intro } from "@/components/Intro";

export default function Home() {
  return (
    <div className="max-w-[64rem] w-full ">
      <Intro />
      <About />
      <WorkCardList />
      <Contact />
    </div>
  );
}
