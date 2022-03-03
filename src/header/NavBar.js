import { NavLink } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptop, faPhone, faFileText } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({pickImage}) {
    return (
        <nav className='nav-bar'>
            <NavLink onClick={() => pickImage('about-me')} to="/the-best-react-portfolio" ><FontAwesomeIcon icon={faUser}/> About Me</NavLink>
            <NavLink onClick={() => pickImage('portfolio')} to="/the-best-react-portfolio/portfolio"><FontAwesomeIcon icon={faLaptop}/> Portfolio</NavLink>
            <NavLink onClick={() => pickImage('about-me')} to="/the-best-react-portfolio/contact"><FontAwesomeIcon icon={faPhone}/> Contact</NavLink>
            <NavLink onClick={() => pickImage('resume')} to="/the-best-react-portfolio/resume"><FontAwesomeIcon icon={faFileText}/> Resume</NavLink>
        </nav>
    )
}