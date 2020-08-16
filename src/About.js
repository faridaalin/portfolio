import React from "react";
import { CardImage, Content } from "./components/card-component";
import PageHeader from "./components/page-header/page-header.component";
import "./index.css";

import { about } from "./data/aboutMe";

function About() {
  return (
    <div className="page-wrapper">
      <PageHeader title="About" />
      <div className="about">
        <CardImage image={about.image} name={about.name} />
        <Content {...about} />
      </div>
    </div>
  );
}

export default About;
