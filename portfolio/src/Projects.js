import React from 'react';
import {ProjectContainer} from './components/project-container.component'
import { projects } from './data/projectsData'

import './components/project.styles.css'


function Projects() {
  return (
    <div className="page-wrapper project">
       <ProjectContainer {...projects}/>
       </div>
  );
}

export default Projects;
