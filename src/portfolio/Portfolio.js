
import projectData from '../data/projectData';
import Project from './Project'

export default function Portfolio({pickImage}) {
    console.log(pickImage)
    const projects = projectData.map((project, i) => {
        return <button
               
                onClick={() => {
                    console.log(pickImage)
                    pickImage(project.imageString)
                }}
        >
            {project.imageString}
        </button>
    })
    return (
        <div className="portfolio-container">
            <h1>My Projects</h1>
            <div>
                {projects}
            </div>
            <Project 
                
            />
        </div>
    )
}