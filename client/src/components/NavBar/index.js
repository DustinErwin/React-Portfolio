import React from "react";

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
          <a href="https://drive.google.com/file/d/10FQ4gTFTe8VUHU5nowiJpBys6DU983ga/view?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
