import React, { useState } from "react";
import "./style.scss";

export default function Work() {
  const [current, setCurrent] = useState(0);
  let handelClick = (e) => {
    if (e.target.className === "arrow-left") {
      setCurrent(current > 0 ? current - 1 : data.length - 1);
    } else {
      setCurrent(current < data.length - 1 ? current + 1 : 0);
    }
  };

  const data = [
    {
      id: "1",
      icon: "./portfolio-website-react/assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./portfolio-website-react/assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./portfolio-website-react/assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="card-container" key={d.id}>
            <div className="card">
              <div className="left">
                <div className="text">
                  <div className="image">
                    <img src={d.icon} alt="works" />
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                  <a href="/">Project</a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="works" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="./portfolio-website-react/assets/arrow.png"
        alt="arrow-left"
        className="arrow-left"
        onClick={handelClick}
      />

      <img
        src="./portfolio-website-react/assets/arrow.png"
        alt="arow-right"
        className="arrow-right"
        onClick={handelClick}
      />
    </div>
  );
}
