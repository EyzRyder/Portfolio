import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoGB from '../../assets/images/GB-removebg.png'
import LogoSubtitle from '../../assets/images/logo_sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoGB} alt='logo' />
      <img
        className="sub-logo"
        src={LogoSubtitle}
        alt='Gabriel Bessi' />
    </Link>
    <nav>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/" >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about" >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact" >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
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
  </div>
)


export default Sidebar;