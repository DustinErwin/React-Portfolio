import React, { useContext, useEffect, useState } from "react";
import Project from "../Project";
import projects from "./projects.json";

// import devfit from "../../images/devfit.png";
// import weatherDash from "../../images/weatherDash.png";
// import empDirect from "../../images/empDirect.png";
import "./style.css";
import ScrollContext from "../../context/ScrollContext";

export default function Skills() {
  const images = require.context("../../../public/images", true);
  const [moveIn, setMoveIn] = useState("");
  const scrollY = useContext(ScrollContext);

  useEffect(() => {
    if (scrollY >= 400) {
      setMoveIn("move-in");
    }
  }, [scrollY]);

  return (
    <div>
      <div className="font-style">
        <div id="projects">
          <div>
            <br />
            <br />
            <h2>Projects</h2>
            <hr className="line-break" />
            <br />
            <br />
          </div>
        </div>
        <div id="skills" className={moveIn}>
          {projects.map((project) => (
            <Project
              href={project.href}
              src={images(`./${project.image}`)}
              alt={project.alt}
              title={project.title}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
