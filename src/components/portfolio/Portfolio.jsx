import React, { useState } from "react";
import "./style.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("Featured");
  const [info, setInfo] = useState(featuredPortfolio);

  let list = [
    {
      id: 1,
      title: "Featured",
    },
    {
      id: 2,
      title: "Web App",
    },
    {
      id: 3,
      title: "Mobile App",
    },
    {
      id: 4,
      title: "Desing",
    },
    {
      id: 5,
      title: "Branding",
    },
  ];

  let handleClick = (e) => {
    setSelected(e.target.textContent);
    switch (e.target.textContent) {
      case "Featured":
        setInfo(featuredPortfolio);
        break;
      case "Web App":
        setInfo(webPortfolio);
        break;
      case "Mobile App":
        setInfo(mobilePortfolio);
        break;
      case "Desing":
        setInfo(designPortfolio);
        break;
      case "Branding":
        setInfo(contentPortfolio);
        break;
      default:
        setInfo(featuredPortfolio);
    }
  };

  return (
    <div className="portfolio" id="protofolio">
      <div className="container">
        <h1>Portfolio</h1>
        <ul>
          {list.map((li) => (
            <li
              className={selected === li.title ? "active" : ""}
              key={li.id}
              onClick={handleClick}
            >
              {li.title}
            </li>
          ))}
        </ul>
        <div className="img-container">
          {info.map((inf) => (
            <div className="image" key={inf.id}>
              <img src={inf.img} alt={inf.title} />
              <h3>{inf.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
