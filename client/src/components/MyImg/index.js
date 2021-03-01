import React, { useState } from "react";
import open from "../../images/dustinOpen.png";
// import closed from "../../images/dustinBlink.png";
import real from "../../images/picMe.png";

import "./style.css";

export default function MyImg() {
  const [mypic, setMypic] = useState(open);
  const [imgLoaded, setImgLoaded] = useState(false);

  //   let blinker = setInterval(blink, 7000);

  //   //Blinks pixel image eyes
  //   function blink() {
  //     setMypic(closed);
  //     setTimeout(function () {
  //       setMypic(open);
  //     }, 300);
  //   }

  //   blink();

  //Changes to real life image on click
  function imgChange() {
    if (!imgLoaded) {
      setMypic(real);
      //   clearInterval(blinker);
      setImgLoaded(true);
    } else {
      setMypic(open);
      //   blinker = setInterval(blink, 7000);
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
