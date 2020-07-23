import React from 'react';
import './project.styles.css'
import './card.styles.css'

function ProjectNav({name, clickHandler}) {
    
    return (
        <li className={`project-name`}  onClick={clickHandler(name)}>{name}</li>
    )
}

export default ProjectNav;