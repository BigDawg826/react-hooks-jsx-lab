import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id = "about">
    <h2>About Me</h2>
    <p>I am currently learning to be a full stack developer.  I like the sound of that!</p>
    <img src={image} alt = "I made this"/>
  </div>
  );
}

export default About;
