import LogoTitle from '../../assets/images/logo-g.png'
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'



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
            <img src={LogoTitle} alt='dev' />
            <AnimatedLetters letterClass={letterClass} strArray={"abriel Bessi".split("")} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={"Estudante".split("")} idx={22} /></h1>
          <h2>Estudante/Desenhista/Programador</h2>
          <Link to="/contact" className='flat-button'>Contate-Me</Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home