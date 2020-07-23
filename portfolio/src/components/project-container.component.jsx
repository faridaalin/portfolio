import React, { useState } from 'react';

import ProjectNav from './project-nav.component';
import ProjectCards from './project-card';

import './project.styles.css'
import './card.styles.css'



export const ProjectContainer = (props) => {
    const [projectName, setProjectName] = useState("SpaceX")
    const [active, setActive] = useState(3)
    let [data] = useState(props.projectList)

    const clickHandler = (value, index) => (event) => {
        let dataIndex = parseInt(event.target.dataset.index);
        setActive(dataIndex)
        setProjectName(value);

      };

    
  
    return (
        <div className="project-container">
            <ul>
                {data.map((project, index) => <ProjectNav active={active} key={index} index={index} clickHandler={clickHandler} name={project.name}/>)}
            </ul>

            {data.filter(project => projectName === project.name).map((filteredProject, index) =>
            <ProjectCards key={index}{...filteredProject} />)}
        </div>
    )
}


