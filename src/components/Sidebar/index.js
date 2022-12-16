import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoGB from '../../assets/images/GB SVG.svg'
import LogoSubtitle from '../../assets/images/logo_sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faUser, faEnvelope, faSuitcase, faBars,
  faClose, } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return(
        
  
  <div className='nav-bar'>
      <Link
        className='logo'
        to='/'
        onClick={() => setShowNav(false)}
      >
        <img
          src={LogoGB}
          alt='logo' />
      <img
        className="sub-logo"
        src={LogoSubtitle}
        alt='Gabriel Bessi' />
    </Link>
    
      <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink
        exact="true"
        activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        
        <NavLink
          activeclassname="active" className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
        
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel='noreferrer'
          href="https://www.linkedin.com/in/gabriel-bessi-5b0160230/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel='noreferrer'
          href="https://github.com/EyzRyder">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='hamburger-icon' />
  </div>
)}


export default Sidebar;