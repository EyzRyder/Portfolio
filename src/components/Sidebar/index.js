import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoGB from '../../assets/images/GB SVG.svg'
import LogoSubtitle from '../../assets/images/logo_sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

  function myFunction() {
    var x = document.getElementById("nav-itens");
    var y = document.getElementById("mobile-link");

    if (x.className.indexOf("show") == -1) {
      x.className += "show";
      y.className += "cross";
    } else {
      x.className = x.className.replace("show", "");
      y.className = y.className.replace("cross", "");
    }
  }

  return(
        
  
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoGB} alt='logo' />
      <img
        className="sub-logo"
        src={LogoSubtitle}
        alt='Gabriel Bessi' />
    </Link>
    
    <nav id="nav-itens">
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
      <a id="mobile-link" href="javascript:void(0)" onClick={myFunction}>
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </a>
  </div>
)}


export default Sidebar;