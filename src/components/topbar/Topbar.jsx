import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Topbar({ setActive, active }) {
  return (
    <header className={active ? "active" : ""}>
      <div className="container">
        <div className="left">
          <div className="logo">
            <a href="/"> genius. </a>
          </div>
          <div className="info">
            <span>
              <FontAwesomeIcon icon="envelope" className="icon" />
              elhelwahmed4@gmail.com
            </span>
            <span>
              <FontAwesomeIcon icon="phone-alt" className="icon" />
              +0 123 456 789
            </span>
          </div>
        </div>
        <div className="right">
          <div className="humbrogor" onClick={() => setActive(!active)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
