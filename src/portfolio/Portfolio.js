import { useState } from 'react';
import projectData from '../data/projectData';
import Project from './Project'

export default function Portfolio({pickImage}) {
    const [ pwoject, setPwoject ] = useState({
        id: 1,
        imageString: "tour-baagii",
        title: "Tourism Planner(AKA Tour Baagii)", 
        description: "Baagii, Stephen, Brian, and John... The DREAM TEAM came together, and made the best web application you have ever seen. Have you ever wanted to go on an adventure to Dubai? To Seoul? To Rome? With Tour Baagii, you can plan out your trip. Enter a city name and click the submit button, and you'll see all the attractions in the city. WOW! You can save attractions and plan a whole adventure. Tour Buddy was taken... Hence, Tour Baagii.", 
        deployedApp: "https://dream-team-nw.github.io/Tourism-Planner/", 
        repository: "https://github.com/Dream-Team-NW/Tourism-Planner" 
    });

    const pickProject = (work) => {setPwoject(projectData.find((proj)=> proj.imageString === work))};

    const projects = projectData.map((project, i) => {
        return <button    
                onClick={() => {
                    pickImage(project.imageString);
                    pickProject(project.imageString);
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
            <Project pwoject={pwoject} />
        </div>
    )
}