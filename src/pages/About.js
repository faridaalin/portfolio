import React, { Suspense } from "react";
import { CardImage, Content } from "../components/cards/card-component";
import PageHeader from "../components/page-header/page-header.component";
import "./index.css";
import { about } from "../data/aboutMe";

import Loader from "../components/loader/Loader";

function About() {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<Loader />}>
        <PageHeader title="About" />
        <div className="about">
          <CardImage image={about.image} name={about.name} />
          <Content {...about} />
        </div>
      </Suspense>
    </div>
  );
}

export default About;
