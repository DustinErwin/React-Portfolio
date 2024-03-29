import React, { useContext, useEffect, useState } from "react";
import Project from "../Project";
import projects from "./projects.json";

import "./style.css";
import ScrollContext from "../../context/ScrollContext";

export default function Skills() {
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
              key={project.title}
              href={project.href}
              src={project.image}
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
