import React, { useEffect, useRef } from "react";
import "./style.scss";
import { init } from "ityped";

export default function Intro() {
  let textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image">
          <img src="./assets/man.png" alt="inro" />
        </div>
      </div>
      <div className="right">
        <div className="text">
          <h3>Hi There, I'm</h3>
          <h2>Ahmed Elhelw</h2>
          <h4>
            Freelance <span ref={textRef}></span>
          </h4>
        </div>
        <a href="#protofolio">
          <img src="./assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
