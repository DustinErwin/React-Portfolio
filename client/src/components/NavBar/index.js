import React from "react";
import resume from "../../resume/Resume.pdf";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="font-style">
        <li>
          <a href="/">Home</a>
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
          <a href="https://drive.google.com/file/d/1I9N53GFSjNxupSVSuBvZGDZBj4P9GX9S/view?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
