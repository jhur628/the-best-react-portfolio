import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faAddressCard } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className='footer-links'>
                <a href="https://github.com/jhur628" target="_blank"><FontAwesomeIcon icon={faFileCode}/>Github</a>
                <a href="https://github.com/jhur628" target="_blank"><FontAwesomeIcon icon={faAddressCard}/>LinkedIn</a>
            </div>
        </footer>
    )
}