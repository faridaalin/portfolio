import React from "react";
import { CardImage, Content, Button } from "./components/card-component";
import './index.css'


import { about } from './data/aboutMe'

function About() {
  console.log(about)

  return (
    <div className="page-wrapper about">
      <CardImage image={about.image} name={about.name}/>
      <Content {...about}/>
      <Button name="Contact"  />
    </div>
  );
}

export default About;
