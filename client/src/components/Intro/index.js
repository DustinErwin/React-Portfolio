import React from "react";
import MyImg from "../MyImg";

import "./style.css";

export default function Intro() {
  return (
    <div className="intro" id="home">
      <div className="intro-info font-style">
        <h1>Dustin Erwin</h1>
        <p className="title">Web Developer</p>
        <p className="desc">
          I'm a focused problem solver, with a passion for creating resilient
          and impactful applications.
        </p>
        <MyImg />
      </div>
    </div>
  );
}
