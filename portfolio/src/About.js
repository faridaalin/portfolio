import React from "react";
import { Card, Content } from "./components/card-component";
import profile from "./img/profile.jpg";
import './index.css'

function About() {
  return (
    <div className="page-wrapper about">
      <Card image={profile} name="Profile image" />
      <Content />
    </div>
  );
}

export default About;
