import React from "react";
import "./main-news.css";

function MainNews({ image, title, text }) {
  return (
    <div className="news__features-container_main">
          <img src={image} alt={image} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
  );
}

export default MainNews;
