import React, { Suspense } from "react";
import {Helmet} from "react-helmet";
import { CardImage, Content } from "../components/cards/card-component";
import PageHeader from "../components/page-header/page-header.component";
import { about } from "../data/aboutMe";
import Loader from "../components/loader/Loader";

import "./index.css";

function About() {
  return (
    <div className="page-wrapper">
       <Helmet>
       <title>Farida Alin | About</title>
       <meta name="description" content="Frontend developer based in Oslo, Norway. Love creating and building design-focused websites." />    
       </Helmet>
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
