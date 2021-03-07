import React from "react";
import "./style.css";

export default function Project({ href, src, alt, title, desc }) {
  return (
    <div>
      <a className="project" href={href}>
        <img className="project-link" src={src} alt={alt} />
        <div className="project-desc hide">
          <p className="project-title">{title}</p>
          <p className="project-p">{desc}</p>
          <p>Click to see!</p>
        </div>
      </a>
    </div>
  );
}
