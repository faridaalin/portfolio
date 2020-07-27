import React from 'react';
import {ProjectContainer} from './components/project-container.component'
import { projects } from './data/projectsData'
import PageHeader from './components/page-header/page-header.component'

import './components/project.styles.css'


function Projects() {
  return (
    <div className="page-wrapper project">
       <PageHeader  title="Projects"/>
       <ProjectContainer {...projects}/>
       </div>
  );
}

export default Projects;
