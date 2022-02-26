import { NavLink } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptop, faPhone, faFileText } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <NavLink to="/"><FontAwesomeIcon icon={faUser}/> About Me</NavLink>
            <NavLink to="/portfolio"><FontAwesomeIcon icon={faLaptop}/> Portfolio</NavLink>
            <NavLink to="/contact"><FontAwesomeIcon icon={faPhone}/> Contact</NavLink>
            <NavLink to="/resume"><FontAwesomeIcon icon={faFileText}/> Resume</NavLink>
        </nav>
    )
}