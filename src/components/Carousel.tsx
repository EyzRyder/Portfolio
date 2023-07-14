'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpLeftFromCircle, GithubIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { WorkCard } from './WorkCard/index'
import WorkFollowCard from './WorkFollowCard'
import useWidth from '@/useHook/useScreenWidth'
import useFireQuery from '@/useHook/useFireQuery'
import { cardProps } from '@/libs/types'

export default function Carousel() {
  const carousel = useRef<HTMLDivElement>(null)
  const [carouselWidth, setCarouselWidth] = useState(0)
  const fullWidth = useWidth()
  const workData = useFireQuery()
  const [cardDetails, setCardDetails] = useState<cardProps | null>(null)

  useEffect(() => {
    // console.log(fullWidth)
    if (!carousel.current) return
    // console.log(
    //   '🚀 ~ file: Carousel.tsx:29 ~ useEffect ~ carousel.current?.scrollWidth:',
    //   carousel.current?.scrollWidth,
    // )
    setCarouselWidth(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth,
    )
  }, [fullWidth, workData])
  return (
    <>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
        className="w-full cursor-grab overflow-hidden whitespace-nowrap px-2 py-12 max-md:overflow-y-scroll  md:-skew-x-[0.02turn] md:-skew-y-6"
      >
        <motion.div
          drag={fullWidth > 768 ? 'x' : false}
          dragConstraints={{ right: 500, left: -carouselWidth }}
          initial={{ x: '100%' }}
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
  )
}
