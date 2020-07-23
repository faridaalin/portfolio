import React, { useState } from 'react';

import ProjectNav from './project-nav.component';
import ProjectCards from './project-card';

import './project.styles.css'
import './card.styles.css'



export const ProjectContainer = (props) => {
    const [projectName, setProjectName] = useState("SpaceX")
    let [data] = useState(props.projectList)

    const clickHandler = value => event => {
        setProjectName(value);
        let target = event.target;
        target.className.includes("active")
                ? (target.className = "project-name")
                : (target.className = "project-name active");
        

            event.target.parentNode.childNodes.forEach(element => {
                
            console.dir(element)
            console.dir(element.className.includes("active"))
        })
      };

    
  
    return (
        <div className="project-container">
            <ul>
                {data.map((project, index) => <ProjectNav key={index} clickHandler={clickHandler} name={project.name}/>)}
            </ul>

            {data.filter(project => projectName === project.name).map((filteredProject, index) =>
            <ProjectCards key={index}{...filteredProject} />)}
        </div>
    )
}


