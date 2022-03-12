import React from "react";
import "./style.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "./portfolio-website-react/assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "./portfolio-website-react/assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "./portfolio-website-react/assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h3>Testimonials</h3>
      <div className="card-container">
        {data.map((card) => (
          <div className="card" key={card.id}>
            <div className="head">
              <img
                src="./portfolio-website-react/assets/right-arrow.png"
                alt="arrow"
              />
              <img src={card.img} alt="" />
              <img src={card.icon} alt="icon" />
            </div>
            <div className="body">
              <p>{card.desc}</p>
            </div>
            <div className="foot">
              <h4>{card.name}</h4>
              <span>{card.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
