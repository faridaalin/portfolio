import React, { useState } from 'react';

import ProjectNav from './project-nav.component';
import ProjectCards from './project-card';

import './project.styles.css'
import './card.styles.css'



export const ProjectContainer = (props) => {
    let [data] = useState(props.projectList)

    
  
    return (
        

        <div className="project-container">          
            {
                data.map((project, index) => <ProjectCards key={project.title} {...project}/>)
            }

        </div>
    )
}


