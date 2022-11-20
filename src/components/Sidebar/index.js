import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

  const [showNav, setShowNav] = useState(false);
  return (
    <div className='nav-bar'>
    <Link className='logo' to ='/'>
      <img src={LogoS} alt= "Logo" />
      <img className= "sub-logo" src={LogoSubtitle} alt= "Siraj" />
    </Link>

    <nav  className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeClassname="active" to="/">
          <FontAwesomeIcon  icon={faHome} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
          <FontAwesomeIcon  icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeClassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon  icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        
        <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon  icon={faEnvelope} color="#4d4d4e" />
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
        <a  href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
        </a>
      </li>

      <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>

        <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              color="#4d4d4e"
              className="anchor-icon"
            />
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
)
  }

export default Sidebar