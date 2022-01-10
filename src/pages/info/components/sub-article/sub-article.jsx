import React from "react";
import "./sub-article.css";

function SubArticle({ image, title, text }) {
  return (
    <div className="info__topics-container_subarticle">
        <h3>{title}</h3>
        <div className="info__topics-container_subarticle-content">
          <img src={image} alt={image} />
          <p>{text}</p>
        </div>
    </div>
  );
}

export default SubArticle;
