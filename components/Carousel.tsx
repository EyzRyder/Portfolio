"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpLeftFromCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WorkCard } from "./WorkCard/index";
import WorkFollowCard from "./WorkFollowCard";
import useWidth from "@/useHook/useScreenWidth";
import { cardProps } from "@/lib/types";
import { workData } from "@/data/works";

export default function Carousel() {
  const carousel = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const fullWidth = useWidth();
  const [cardDetails, setCardDetails] = useState<cardProps | null>(null);

  useEffect(() => {
    if (!carousel.current) return;
    setCarouselWidth(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth,
    );
  }, [fullWidth]);
  return (
    <>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="w-full cursor-grab overflow-hidden whitespace-nowrap px-2 py-12 max-md:overflow-y-scroll  md:-skew-x-[0.02turn] md:-skew-y-6"
      >
        <motion.div
          drag={fullWidth > 768 ? "x" : false}
          dragConstraints={{ right: 500, left: -carouselWidth }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-24 max-md:flex-col max-md:items-center max-md:gap-10 max-[325px]:gap-4"
        >
          {workData &&
            workData.map((work) => (
              <WorkCard.Root key={work._id}>
                <WorkCard.Frame>
                  <WorkCard.Tilt
                    handleMouseEnter={() => setCardDetails(work)}
                    handleMouseLeave={() => setCardDetails(null)}
                  >
                    {work.githubRep && (
                      <WorkCard.Btn
                        url={work.githubRep}
                        Icon={GithubIcon}
                        className="right-8 top-10 max-md:right-4 max-md:top-5"
                      />
                    )}
                    {work.url && (
                      <WorkCard.Btn
                        url={work.url}
                        Icon={ArrowUpLeftFromCircle}
                        className="bottom-10 max-md:bottom-5 max-md:right-4 md:left-8"
                      />
                    )}
                    <WorkCard.Image coverImg={work.image} />
                  </WorkCard.Tilt>
                  <WorkCard.Scale>
                    {work.githubRep && (
                      <WorkCard.Btn
                        url={work.githubRep}
                        Icon={GithubIcon}
                        className="right-8 top-10 max-md:right-4 max-md:top-5"
                      />
                    )}
                    {work.url && (
                      <WorkCard.Btn
                        url={work.url}
                        Icon={ArrowUpLeftFromCircle}
                        className="bottom-10 max-md:bottom-5 max-md:right-4 md:left-8"
                      />
                    )}
                    <WorkCard.Image coverImg={work.image} />
                    <WorkCard.Detail
                      _id={work._id}
                      title={work.title}
                      descriptions={work.descriptions}
                      role={work.role}
                      teck={work.teck}
                    />
                  </WorkCard.Scale>
                  <WorkCard.Wrapper />
                </WorkCard.Frame>
              </WorkCard.Root>
            ))}
        </motion.div>
      </motion.div>
      {fullWidth > 768 && cardDetails && (
        <WorkFollowCard
          _id={cardDetails._id}
          title={cardDetails.title}
          descriptions={cardDetails.descriptions}
          role={cardDetails.role}
          teck={cardDetails.teck}
          key={cardDetails.title}
        />
      )}
    </>
  );
}

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
