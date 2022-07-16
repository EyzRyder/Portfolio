import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoG from '../../../assets/images/logo-g.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoG}
        alt="JavaScript,  Developer"
      />

      <svg
        version="1.0"
        viewBox="0 0 360 432"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate()"
          fill="none"
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <path ref={outlineLogoRef} class="st6" d="M169.7,261.6l-16.8,1.9l7.1,36.2l115.5-9.7c0,0-4,41.2-14.3,61.1c-10.2,19.9-21.9,36.6-51.3,52.2" />
            <path ref={outlineLogoRef} class="st6" d="M255.4,250.3c-85.9-19.6-85.9-19.6-85.9-19.6l2.2-38.8l15.7,3.1" />
            <path ref={outlineLogoRef} class="st6" d="M217.2,77.9c45.7-5.8,67.7,16.6,67.7,16.6l11.9-4" />
            <path ref={outlineLogoRef} class="st6" d="M315.1,87.3l-15.9,2.2c0,0-28.1-32.4-88.4-7.9c-62.8,25.6-95,110.3-95,110.3s-31.6,73.2-12.5,134.2    s66.1,73,66.1,73s16.1,8.4,44.6,4.4s48.2-34,48.2-34s25.4-41.3,26.5-83.3l-113.6,10.2l-5.6-34.8l109.9-11.4l-95.6-23.2l3.8-37.8    l168.9,37.4l-1.7,30.1c0,0-2.5,30.8-14.8,65.2c-12.3,34.4-24.9,49-32.2,57.3c-6.8,7.7-10.2,15.2-27.9,27.3    c-15.9,10.8-18.7,11.6-30.5,14.5c-21.2,5.3-13.5,5-35.2,7.3c-22.6,2.4-50.8,0-50.8,0s-45.8-9.8-69.6-29.4    c-23.8-19.6-49.1-45.5-70-93.4C4.5,261.4,6.4,229.6,6.4,229.6s-6.4-48,8.6-87.8c15-39.5,31.7-61,31.7-61s13.9-24.5,52.3-46.1    C145.6,10.2,185,10.3,185,10.3s42.2-2.4,73.8,17.4C290.3,47.5,306.7,71.4,315.1,87.3z" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Logo
