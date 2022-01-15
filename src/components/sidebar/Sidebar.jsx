import React from "react";
import "./style.scss";

export default function Sidebar({ setActive, active }) {
  return (
    <div className={active ? "menu active" : "menu"}>
      <ul>
        <li onClick={() => setActive(!active)}>
          <a href="#intro">home</a>
        </li>
        <li onClick={() => setActive(!active)}>
          <a href="#protofolio">protofolio</a>
        </li>
        <li onClick={() => setActive(!active)}>
          <a href="#work">work</a>
        </li>
        <li onClick={() => setActive(!active)}>
          <a href="#testimonials">testimonials</a>
        </li>
        <li onClick={() => setActive(!active)}>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
}
