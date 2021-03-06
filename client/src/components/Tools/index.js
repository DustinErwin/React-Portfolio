import React, { useContext, useEffect, useState } from "react";
import html5 from "../../images/html5.png";
import css3 from "../../images/css3.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import mongodb from "../../images/mongodb.png";
import node from "../../images/node.png";
import "./style.css";
import ScrollContext from "../../context/ScrollContext";

export default function Tools() {
  const [moveIn, setMoveIn] = useState("");
  const scrollY = useContext(ScrollContext);

  useEffect(() => {
    if (scrollY >= 2100) {
      setMoveIn("move-in");
    }
  }, [scrollY]);

  return (
    <div id="toolbelt" className="font-style">
      <br />
      <br />
      <h2>Technology Toolbelt</h2>
      <hr className="line-break" />
      <br />
      <br />
      <div id="tools" className={moveIn}>
        <div>
          <div>
            <img className="img-me-pix" src={html5} alt="HTML 5 Icon" />
          </div>
          <div>
            <img className="img-me-pix" src={css3} alt="CSS 3 Icon" />
          </div>
          <div>
            <img className="img-me-pix" src={js} alt="Javascript Icon" />
          </div>
        </div>
        <div>
          <div>
            <img className="img-me-pix" src={react} alt="React Icon" />
          </div>
          <div>
            <img className="img-me-pix" src={mongodb} alt="MongoDB Icon" />
          </div>
          <div>
            <img className="img-me-pix" src={node} alt="Node Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
