import { NavLink } from 'react-router-dom';
import projectData from '../data/projectData';

export default function ProjectNav({ pickImage }) {
    const projectLinks = projectData.map((project, i) => {
        return <NavLink 
            onClick={() => pickImage(project.imageString)} 
            to={`/the-best-react-portfolio/portfolio/${project.id}`}>
                {project.title}
            </NavLink>
    })
    return (
        <nav>
            {projectLinks}
        </nav>
    )
}