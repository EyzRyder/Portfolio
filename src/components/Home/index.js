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
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home