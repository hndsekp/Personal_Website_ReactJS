import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="abautTypo">
        <span className="aboutTypoText">About Me</span>
        <span className="aboutTypoText">About Me</span>
        <span className="aboutTypoText">About Me</span>
      </div>
      <div className="aboutContent">
        <h1 className="aboutInfo">
          Hello! I am Alhendes Eka P, I am passionate about developing
          applications both user interface and database management system.
        </h1>
        <a className="aboutButton" href="#">
          Read More About Me <i class="uil uil-arrow-up-right"></i>
        </a>
      </div>x
    </section>
  );
};

export default About;
