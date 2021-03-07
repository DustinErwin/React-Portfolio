import React, { useContext, useEffect, useState } from "react";
import Project from "../Project";
import projects from "./projects.json";
import couchSurf from "../../images/couchSurf.png";
import devfit from "../../images/devfit.png";
import weatherDash from "../../images/weatherDash.png";
import empDirect from "../../images/empDirect.png";
import "./style.css";
import ScrollContext from "../../context/ScrollContext";

export default function Skills() {
  const [moveIn, setMoveIn] = useState("");
  const scrollY = useContext(ScrollContext);

  useEffect(() => {
    if (scrollY >= 1100) {
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
          <div>
            <Project
              href={JSON.stringify(projects[0].href)}
              src={couchSurf}
              alt={projects[0].alt}
              title={projects[0].title}
              desc={projects[0].desc}
            />
            <Project
              href={JSON.stringify(projects[1].href)}
              src={devfit}
              alt={projects[1].alt}
              title={projects[1].title}
              desc={projects[1].desc}
            />
          </div>
          <div>
            <Project
              href={JSON.stringify(projects[2].href)}
              src={empDirect}
              alt={projects[2].alt}
              title={projects[2].title}
              desc={projects[2].desc}
            />
            <Project
              href={JSON.stringify(projects[3].href)}
              src={weatherDash}
              alt={projects[3].alt}
              title={projects[3].title}
              desc={projects[3].desc}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
