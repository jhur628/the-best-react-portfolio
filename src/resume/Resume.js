import { useSpring, animated } from 'react-spring';
import resume from '../assets/John Hur Resume.pdf';
import './Resume.css'

export default function Resume() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 200,
    });

    return (
        <animated.div style={props} className="resume-container">
            <h1>Resume</h1>
            <a href={resume} download>
                Download me
            </a>
            <p>Front-End Proficiencies: HTML, CSS, front-end Javascript, React
                <br></br>
                Back-End Proficiencies: Node, Express, SQL, MongoDB, GraphQL
            </p>
            <p>
                Please download my resume to learn more about my abilities!
            </p>
        </animated.div>
    )
}