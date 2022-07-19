import LogoG from '../../assets/images/G SVG.svg';
import LogoB from '../../assets/images/B SVG.svg';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import LogoGB from '../../assets/images/logo.svg';



const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => {
      clearTimeout(timer);
    }
  });

  return (
    <>
      <div className="container home-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={"Olá, ".split("")} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={"Sou".split("")} idx={15} />
            <img src={LogoG} alt='dev' />
            <AnimatedLetters letterClass={letterClass} strArray={"abriel".split("")} idx={15} />
            <img src={LogoB} alt='dev' />
            <AnimatedLetters letterClass={letterClass} strArray={"essi".split("")} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={"Estudante".split("")} idx={22} /></h1>
          <h2>Estudante/Desenhista/Programador</h2>
          <Link to="/contact" className='flat-button'>Contate-Me</Link>
        </div>
        <div className="logo-container">
          <img
            className="solid-logo"
            src={LogoGB}
            alt="Logo"
          />
        </div>
        <div className="flags">
          <svg xmlns="http://www.w3.org/2000/svg" width="606" height="127" viewBox="0 0 606 127" fill="none">
            <path d="M2 85.0296C9.55791 81.7882 16.6601 78.564 23.3551 75.3575C75.2026 50.5249 102.625 26.7498 128.107 4.25967M177.337 0C215.225 83.1998 492.418 107.246 602.502 4.25967" stroke="black" stroke-width="10" />
            <path d="M87.1956 105.181L22.2312 76.5103C32.4816 74.4132 60.2208 61.4376 66.7397 50.6246L87.1956 105.181Z" fill="#DF2B50" />
            <path d="M153.059 59.6354L83.5989 40.1392C93.8494 38.0422 113.496 22.2814 120.015 11.4684L153.059 59.6354Z" fill="#16CBF0" />
            <path d="M504.746 112.576L466.502 69.8955C477.961 72.017 508.292 62.4483 520.482 52.7973L504.746 112.576Z" fill="#16CBF0" />
            <path d="M582.06 85.1534L535.542 51.0675C547.205 50.8444 574.839 35.3986 584.707 23.511L582.06 85.1534Z" fill="#FF744A" />
            <path d="M424.303 126.055L398.566 77.2707C408.43 78.5891 438.994 78.5838 452.512 70.5391L424.303 126.055Z" fill="#DF2B50" />
            <path d="M345.92 125.117L328.549 72.8829C344.982 77.5545 354.566 77.9097 380.847 77.9097L345.92 125.117Z" fill="#FFD321" />
            <path d="M256.474 108.188L252.24 54.7005C259.531 59.802 289.622 69.5138 305.595 66.8625L256.474 108.188Z" fill="#471759" />
            <path d="M168.707 83.0995L186.883 18.1531C190.477 27.9179 221.209 49.3964 235.08 52.9106L168.707 83.0995Z" fill="#FF744A" />
          </svg>
        </div>
        <div className="flag2">
          <svg xmlns="http://www.w3.org/2000/svg" width="143" height="104" viewBox="0 0 143 104" fill="none">
            <path d="M143 82.9737C135.845 79.6038 129.122 76.2517 122.784 72.9179C73.7028 47.1004 47.7437 22.3822 23.6206 -1" stroke="black" stroke-width="10" />
            <path d="M62.3497 103.925L123.848 74.1164C114.145 71.9362 87.8854 58.4459 81.7142 47.204L62.3497 103.925Z" fill="#FFD700" />
            <path d="M-3.8147e-05 56.5723L65.7544 36.3028C56.0508 34.1225 37.4523 17.7366 31.2812 6.49469L-3.8147e-05 56.5723Z" fill="#471759" />
          </svg>
        </div>
        <div className="light">
          <svg xmlns="http://www.w3.org/2000/svg" width="211" height="220" viewBox="0 0 211 220" fill="none">
            <path d="M49.6374 127.667V105.861L36.924 100.2L31.3619 101.878V124.941L34.3416 126.134V175.471L51.0279 220.549L63.344 224.952C76.3223 229.006 106.927 235.1 125.521 227.049C144.114 218.998 139.36 208.738 134.658 204.615L143.796 181.342L136 183L134.658 191.5L125.521 198L121 204.615L108 202.518L75.4615 211.534V202.518L51.0279 170.439L49.6374 127.667Z" fill="#173D75" />
            <path d="M49.6374 105.861L42.8834 107.119M49.6374 105.861V127.667M49.6374 105.861L36.924 100.2L31.3619 101.878M42.8834 107.119V129.554M42.8834 107.119L31.3619 101.878M42.8834 129.554L46.2604 128.61M42.8834 129.554L34.3416 126.134M49.6374 127.667L46.2604 128.61M49.6374 127.667L51.0279 170.439L75.4615 202.518V211.534M31.3619 101.878V124.941L34.3416 126.134M46.2604 128.61L45.0685 179.245L63.344 224.952M63.344 224.952L75.4615 220.549M63.344 224.952C76.3223 229.006 106.927 235.1 125.521 227.049C144.114 218.998 139.36 208.738 134.658 204.615M63.344 224.952C55.3982 223.64 40.8572 218.825 46.2604 210.066M63.344 224.952L51.0279 220.549L34.3416 175.471V126.134M75.4615 220.549L134.658 204.615M75.4615 220.549V211.534M134.658 204.615L143.796 181.342L136 183L134.658 191.5L125.521 198L121 204.615L108 202.518L75.4615 211.534" stroke="#173D75" stroke-width="3" />
            <path d="M64.3372 188.261L82.2504 197.039L121.419 205.026L132.473 183.019C129.883 183.418 122.483 183.473 113.602 180.503L82.2504 170.02L50.8292 152.408L50.8292 170.02L64.3372 188.261Z" fill="#173D75" />
            <path d="M82.2504 170.02L82.2504 197.039M82.2504 170.02L50.8292 152.408L50.8292 170.02L64.3372 188.261L82.2504 197.039M82.2504 170.02L113.602 180.503C122.483 183.473 129.883 183.418 132.473 183.019L121.419 205.026L82.2504 197.039" stroke="#173D75" stroke-width="3" />
            <path d="M36.8964 58.872C59.3621 31.5996 81.6026 33.0454 89.9146 37.1773L159 61.5C146.5 58.4445 116.8 61.1668 98 96.5C74.5 140.666 97 174 120.5 183L83 170L51 152.5L50 106.5L37 100L31 101.5L31 125L34.4538 126.5L34.4538 140.666C6.35978 109.437 25.977 75.1211 36.8964 58.872Z" fill="#115173" stroke="#115173" stroke-width="3" />
            <path d="M180.286 138.406C195.746 90.4394 173.505 67.2397 160.452 61.6357C145.174 57.9823 110.523 61.536 94.1423 104.979C77.7614 148.422 101.425 173.883 115.305 181.184C130.524 186.911 164.826 186.373 180.286 138.406Z" fill="#173D75" stroke="#115173" stroke-width="3" />
          </svg>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home