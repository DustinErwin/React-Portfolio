import React from "react";
import Intro from "./components/Intro";
import "./App.css";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="sliding-background"></div>
      <NavBar />
      <main className="container">
        <Intro />
        <div className="spacer1"></div>
        <Skills />
      </main>
    </>
  );
}

export default App;
