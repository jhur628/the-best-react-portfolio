import resume from '../assets/John Hur Resume.pdf';
import './Resume.css'

export default function Resume() {
    return (
        <div className="resume-container">
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
        </div>
    )
}