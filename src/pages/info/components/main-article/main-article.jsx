import React from "react";
import "./main-article.css";
import {Link} from 'react-router-dom'

function MainArticle({ image, title, text }) {
  return (
    <div className="info__topics-container_article">
      <div className="info__topics-container_article-image">
        <img src={image} alt={image} />
      </div>
      <div className="info__topics-container_article-content">
        <div className="info__topics-container_article-content-wrapper">
          <p>Bài viết nổi bật</p>
          <Link to="/article"><h3>{title}</h3></Link>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default MainArticle;
