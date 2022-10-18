import React from "react";
import image from "./image.png";
import "./box.css";
export default function Box({ selected }) {
  return (
    <div className="box">
      <img className="image" src={image} alt="ratingimg" />
      <div className="rating">You selected {selected} out 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
