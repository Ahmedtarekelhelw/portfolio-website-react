import React, { useState } from "react";
import "./style.scss";

export default function Contact() {
  const [submit, setSubmit] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="./portfolio-website-react/assets/shake.svg" alt="shake" />
      </div>
      <div className="right">
        <div className="form">
          <h3>Contact</h3>
          <form action="" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Write Your Email" />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Write your Message"
            ></textarea>
            <button type="submit">Send</button>
            {submit && <span>Thanks I Will Reply ASAP :)</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
