import React, { useState } from 'react';

import ProjectNav from './project-nav.component';
import ProjectCards from './project-card';

import './project.styles.css'
import './card.styles.css'



export const ProjectContainer = (props) => {
    const [projectName, setProjectName] = useState(3)
    const [active, setActive] = useState(3)
    let [data] = useState(props.projectList)

    const clickHandler = (index) => (event) => {
        let dataIndex = parseInt(event.target.dataset.index);
        setActive(dataIndex)
        setProjectName(index);

      };

    
  
    return (
        <div className="project-container">
            <ul>
                {data.map((project, index) => <ProjectNav active={active} key={index} index={index} clickHandler={clickHandler} name={project.name}/>)}
            </ul>

            {data.filter((project, index) => projectName === index).map((filteredProject, index) =>
            <ProjectCards key={index}{...filteredProject} />)}
        </div>
    )
}


