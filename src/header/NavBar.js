import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <NavLink to="/">About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </nav>
    )
}