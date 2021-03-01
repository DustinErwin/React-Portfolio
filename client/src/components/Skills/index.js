import React from "react";
import couchSurf from "../../images/couchSurf.png";
import devfit from "../../images/devfit.png";
import dayplanner from "../../images/dayPlanner.png";
import codequiz from "../../images/codingQuiz.png";
import "./style.css";

export default function Skills() {
  const moveIn = "project";

  return (
    <div>
      <div className="font-style">
        <div id="projects">
          <div>
            <br />
            <br />
            <h1>Projects</h1>
            <hr className="line-break" />
            <br />
            <br />
          </div>
        </div>
        <div id="skills">
          <div>
            <div>
              <a
                className={moveIn}
                href="https://dustinerwin.github.io/CouchSurf/"
              >
                <img
                  className="project-link"
                  src={couchSurf}
                  alt="Picture of Couch Surf: Pandemic App"
                />
                <div className="project-desc hide">
                  <p className="project-title">Couch Surf</p>
                  <p className="project-p">
                    A dashboard app meant to kick off your web browsing with a
                    liitle bit of everything. I designed the games section here
                    and also created the game, Couch Blasters: Pandemic.
                  </p>
                  <p>Click to see!</p>
                </div>
              </a>
            </div>
            <div>
              <a
                className={moveIn}
                href="https://gym-logistical-tracker-duex.herokuapp.com/"
              >
                <img
                  className="project-link"
                  src={devfit}
                  alt="Picture of Dev Fit App"
                />
                <div className="project-desc hide">
                  <p className="project-title">Dev Fit</p>
                  <p className="project-p">
                    Gym management application built to track client and
                    employee actions and create a user friendly environment for
                    both. I loved the team I worked with here as I did the final
                    result.
                  </p>
                  <p>Click to see!</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div>
              <a
                className={moveIn}
                href="https://dustinerwin.github.io/Day-Scheduler/"
              >
                <img
                  className="project-link"
                  src={dayplanner}
                  alt="Picture of Day Planner App"
                />
                <div className="project-desc hide">
                  <p className="project-title">Work Day Scheduler</p>
                  <p className="project-p">
                    A smart little app to keep track of your upcoming events for
                    the day. Updates as time goes by will color coded fields.
                  </p>
                  <p>Click to see!</p>
                </div>
              </a>
            </div>
            <div>
              <a
                className={moveIn}
                href="https://dustinerwin.github.io/Coding-Quiz/"
              >
                <img
                  className="project-link"
                  src={codequiz}
                  alt="Picture of Coding Quiz"
                />
                <div className="project-desc hide">
                  <p className="project-title">Weather Dashboard</p>
                  <p className="project-p">
                    Weather forcast app that is simple and straight forward.
                    Just type a city and it will give you the forecast for that
                    area.
                  </p>
                  <p>Click to see!</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
