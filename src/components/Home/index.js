import LogoTitle from '../../assets/images/logo-g.png'
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'b', 'r', 'i', 'e', 'l', ' ', 'B', 'e', 's', 's', 'i',]
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    return (
        <>
            <div className="container home-page">
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>O</span>
                        <span className={`${letterClass} _12`}>l</span>
                        <span className={`${letterClass} _13`}>a</span>
                        <span className={`${letterClass} _14`}>,</span>
                        <span className={`${letterClass} _15`}> </span>
                        <br />
                        <span className={`${letterClass} _16`}>s</span>
                        <span className={`${letterClass} _17`}>o</span>
                        <span className={`${letterClass} _18`}>u</span>
                        <img src={LogoTitle} alt='dev' />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} /></h1>
                    <h2>Estudante/Desenhista/Programador</h2>
                    <Link to="/contact" className='flat-button'>Contact Me</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Home