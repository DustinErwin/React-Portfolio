import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import "./App.css";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import ScrollContext from "./context/ScrollContext";
import SlidingBackground from "./components/SlidingBackground";

function App() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <ScrollContext.Provider value={scrollY}>
      <div>
        <SlidingBackground />
        <NavBar />
        <main className="container">
          <Intro />
          <Skills />
          <div className="spacer2"></div>
          <Tools />
          <div className="spacer2"></div>
          <Contact />
        </main>
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
