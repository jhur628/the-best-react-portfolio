import { Routes, Route } from 'react-router-dom';
import ProjectNav from './ProjectNav';
import projectData from '../data/projectData';

export default function Portfolio({ pickImage }) {
    return (
        <div className="portfolio-container">
            <h1>My Projects</h1>
            <ProjectNav pickImage={pickImage} />
            <Routes>

            </Routes>
        </div>
    )
}