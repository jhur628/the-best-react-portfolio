import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import projectData from '../data/projectData';
import Project from './Project'
import './Portfolio.css'

export default function Portfolio({pickImage}) {
    const props = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        delay: 200,
    });

    const [ pwoject, setPwoject ] = useState({
        id: 1,
        imageString: "shelf-care",
        title: "Shelf Care", 
        description: "Unanswerable Hog Splatch presents: SHELF CARE! Shelf Care is an easy-to-use application that will help keep track of your houseplants well-being. Gardeners can add plants and decide how often they would like to water/fertilize them. Keep your plants green and happy with SHELF CARE.", 
        deployedApp: "https://shelf-care-uhs.herokuapp.com/",
        repository: "https://github.com/unanswerable-hog-splatch/plant-app-frontend"
    });

    const pickProject = (work) => {setPwoject(projectData.find((proj)=> proj.imageString === work))};

    useEffect(() => {
        pickImage('shelf-care')
    }, [])

    const projects = projectData.map((project, i) => {
        return <button
                className='project-buttons' 
                onClick={() => {
                    pickImage(project.imageString);
                    pickProject(project.imageString);
                }}
        >
            {project.imageString.toUpperCase()}
        </button>
    })

    return (
            <animated.div className='portfolio-container' style={props}>
                <h1>My Projects</h1>
                <div className='buttons-container'>
                    {projects}
                </div>
                <Project pwoject={pwoject} />   
            </animated.div>
    )
}