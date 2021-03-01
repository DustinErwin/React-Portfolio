import React from "react";
import linkedIn from "../../images/linkedIn.jpg";
import github from "../../images/github.jpg";
import "./style.css";

export default function Contact() {
  const email = `{ Email: Derwin499@gmail.com }`;

  return (
    <footer className="footer">
      <div id="contact" className="font-style">
        <br />
        <br />
        <br />
        <h2>Contact Me</h2>
        <hr className="line-break" />
        <br />
        <br />
        <div className="contact-info">
          <a href="https://github.com/DustinErwin">
            <img
              className="contact-img contact"
              src={github}
              alt="GitHub logo"
            />
          </a>
          <p className="email">{email}</p>
          <a
            className="contact-a"
            href="https://www.linkedin.com/in/dustin-erwin-a126b61b6"
          >
            <img
              className="contact-img contact"
              src={linkedIn}
              alt="LinkedIn logo"
            />
          </a>
        </div>
      </div>
      <div className="bottom"></div>
    </footer>
  );
}
