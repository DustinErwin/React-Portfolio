import React from "react";
import MyImg from "../MyImg";

import "./style.css";

export default function Intro() {
  return (
    <div className="intro" id="home">
      <div className="intro-info font-style">
        <p className="myName">Dustin Erwin</p>
        <p className="title">Web Developer</p>
        <p className="desc">
          Software Developer with a background in leadership roles and
          forward-thinking practiced in preplanning and proper execution.
          Experience in high-level communication able to keep tasks moving
          forward efficiently toward meeting production goals.
        </p>
        <MyImg />
      </div>
    </div>
  );
}
