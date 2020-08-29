import React, { Suspense } from "react";
import { ProjectContainer } from "../components/projects/project-container.component";
import { projects } from "../data/projectsData";
import PageHeader from "../components/page-header/page-header.component";
import "../components/projects/project.styles.css";
import Loader from "../components/loader/Loader";
import {Helmet} from "react-helmet";


function Projects() {
  return (
    <div className="page-wrapper project">
      <Helmet>
        <title>Farida Alin | Projects</title>
        <meta
          name="description"
          content="Many of my projects are based on my education, real clients interest and design."/>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <PageHeader title="Projects" />
        <ProjectContainer {...projects} />
      </Suspense>
    </div>
  );
}

export default Projects;
