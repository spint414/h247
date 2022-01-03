import React from "react";
import "./sub-news.css";

function SubNews({ image, title, text, video }) {
  return (
    <div className="news__section-container_subnews">
        <h3>{title}</h3>
        <div className="news__section-container_subnews-content">
          <img src={image} alt={image} />
          <img src={video} alt={video} />
          <p>{text}</p>
        </div>
    </div>
  );
}

export default SubNews;
