import NavBar from './NavBar';
import './Header.css'
import { useSpring, animated } from 'react-spring';

export default function Header({ pickImage }) {
    const props = useSpring({ 
        to: { opacity: 1, marginTop: 0 }, 
        from: { opacity: 0, marginTop: -1000 },
        delay: 200,
    })

    return (
        
        <animated.div style={props}>
            <header className='header-nav'>
                <h1>John Hur</h1>
                <NavBar pickImage={pickImage}/>
            </header> 
        </animated.div>
        
    )
}