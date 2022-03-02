import { Routes, Route } from 'react-router-dom';
import ProjectNav from './ProjectNav';
import projectData from '../data/projectData';
import Project from './Project'

export default function Portfolio({ pickImage }) {
    const projects = projectData.map((project, i) => {
        return <Route 
                id={project.id}
                title={project.title}
                description={project.description} 
                deployedApp={project.deployedApp}
                repository={project.repository}
                path={`/the-best-react-portfolio/portfolio/${project.id}`}
                element={<Project />}
        />
    })
    return (
        <div className="portfolio-container">
            <h1>My Projects</h1>
            <ProjectNav pickImage={pickImage} />
            <Routes>
                {projects}
            </Routes>
        </div>
    )
}