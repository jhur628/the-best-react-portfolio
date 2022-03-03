import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { useSpring, animated } from 'react-spring';

export default function Footer() {
    const props = useSpring({ 
        to: { opacity: 1, marginRight: 0 }, 
        from: { opacity: 0, marginRight: -1000 },
        delay: 1000,
    })
    return (
        <animated.div style={props}>
            <footer>
               <div className='footer-links'>
                    <a href="https://github.com/jhur628" target="_blank"><FontAwesomeIcon icon={faFileCode}/>Github</a>
                    <a href="https://www.linkedin.com/in/john-hur-b146aa21a/" target="_blank"><FontAwesomeIcon icon={faAddressCard}/>LinkedIn</a>
                </div> 
            </footer>
        </animated.div>
    )
}