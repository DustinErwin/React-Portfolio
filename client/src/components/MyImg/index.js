import React, { useState } from "react";
import open from "../../images/dustinOpen.png";
import closed from "../../images/dustinBlink.png";
import real from "../../images/picMe.png";
import "./style.css";
import useInterval from "../../utils/IntervalHook";

export default function MyImg() {
  const [mypic, setMypic] = useState(open);
  const [imgLoaded, setImgLoaded] = useState(false);

  //Custom hook to make eyes blink
  useInterval(() => {
    if (!imgLoaded) {
      setMypic(closed);
      setTimeout(() => {
        setMypic(open);
      }, 300);
    }
  }, 6000);

  //Changes to real life image on click
  function imgChange() {
    if (!imgLoaded) {
      setMypic(real);
      setImgLoaded(true);
    } else {
      setMypic(open);
      setImgLoaded(false);
    }
  }

  return (
    <img
      className="img-me-pix"
      src={mypic}
      onClick={() => imgChange()}
      alt="Dustin"
    />
  );
}
