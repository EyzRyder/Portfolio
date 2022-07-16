import {
  faAngular,
  faCss3,
  faPhp,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useEffect, useState } from 'react'

const About = () => {
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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={'Sobre mim'.split("")} idx={15} />
          </h1>
          <p>
            Sou Gabriel Bessi, no momento estou estudando na Etec Albert Einstein aprendendo programação na escola.
            Sou um grande fã de desenvolvimento de sites, dispositivos móveis e bancos de dados
            Estou trabalhando para ser um grande programador e artista :]
            Você pode ver mais sobre minhas habilidades aqui.
            <h2>Minhas Habilidade</h2>
            <div>
              <img align="center" alt="Bessi-Js" height="30" width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
              <img align="center" alt="Bessi-Ts" height="30" width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
              <img align="center" alt="Bessi-HTML" height="30" width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
              <img align="center" alt="Bessi-CSS" height="30" width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
              <img align="center" alt="Bessi-Ionic" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" />
              <img align="center" alt="Bessi-Angular" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" />
              <img align="center" alt="Bessi-Bootstrap" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
              <img align="center" alt="Bessi-Figma" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            </div>
            <h3>Estudando no momento:</h3>
            <div>
              <img align="center" alt="Bessi-React" height="30" width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
              <img align="center" alt="Bessi-MySql" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
              <img align="center" alt="Bessi-Php" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
              <img align="center" alt="Bessi-Csharp" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" />
            </div>
            <h3>Pretendo aprender:</h3>
            <div>
              <img align="center" alt="Bessi-NextJs" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
              <img align="center" alt="Bessi-Python" height="30" width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
              <img align="center" alt="Bessi-NodeJS" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <img align="center" alt="Bessi-Mongodb" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
              <img align="center" alt="Bessi-Graphql" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
              <img align="center" alt="Bessi-Tailwindcss" height="30" width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            </div>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPhp} color="#8892bf" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
