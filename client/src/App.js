import React from "react";
import Intro from "./components/Intro";
import "./App.css";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="sliding-background"></div>
      <NavBar />
      <main className="container">
        <Intro />
        <div className="spacer1"></div>
        <Skills />
        <div className="spacer2"></div>
        <Tools />
        <div className="spacer2"></div>
        <Contact />
      </main>
    </>
  );
}

export default App;
