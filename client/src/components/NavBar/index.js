import React from "react";
import resume from "../../resume/Resume.pdf";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="font-style">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#toolbelt">Tools</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href={resume}>Resume</a>
        </li>
      </ul>
    </nav>
  );
}
