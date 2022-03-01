import resume from '../assets/John Hur Resume.pdf';
import './Resume.css'

export default function Resume() {
    return (
        <div className="resume-container">
            <h1>Resume:</h1>
            <a href={resume} download>
                Download me
            </a>
            <p>
                The downloadable PDF file contains my resume.
            </p>
            <p>
                As this is my working portfolio, I will upload my downloadable resume file as often as possible. Stay tuned!
            </p>
        </div>
    )
}