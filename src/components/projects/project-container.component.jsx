import React, { useState } from 'react';
import ProjectCards from '../projects/project-card';
import '../projects/project.styles.css';
import '../cards/card.styles.css';



export const ProjectContainer = (props) => {
    let [data] = useState(props.projectList)
    return (
    
        <div className="project-container">          
            {
                data.map((project, index) => <ProjectCards key={index} index={index} {...project}/>)
            }

        </div>
    )
}


