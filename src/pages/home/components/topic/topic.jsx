import React from "react";
import "./topic.css";

function topic({ icon, title, number }) {
  return (
    <div className="h247__topics-container_topic">
      <div className="h247__topics-container_topic-wrapper">
        <div className="h247__topics-container_topic-image">
          <img src={icon} alt="icon" />
        </div>
        <div className="h247__topics-container_topic-text">
          <h3>{title}</h3>
          <p>{number} bài viết</p>
        </div>
      </div>
    </div>
  );
}

export default topic;
