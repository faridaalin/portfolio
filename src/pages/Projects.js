import React, { Suspense } from "react";
import { ProjectContainer } from "../components/projects/project-container.component";
import { projects } from "../data/projectsData";
import PageHeader from "../components/page-header/page-header.component";

import "../components/projects/project.styles.css";
import Loader from '../components/loader/Loader'

function Projects() {
  return (
    <div className="page-wrapper project">
      <Suspense fallback={<Loader />}>
        <PageHeader title="Projects" />
        <ProjectContainer {...projects} />
      </Suspense>
    </div>
  );
}

export default Projects;
