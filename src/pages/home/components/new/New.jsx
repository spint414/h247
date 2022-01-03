import React from "react";
import "./new.css";


function New({ title, text, image }) {
    const divBackground = {
        backgroundImage: "url(" + image + ")",
    }

  return (
    <div className="h247__news-carousel_new" style={divBackground}>
            <div className="h247__news-carousel_new-content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
      </div>
  );
}

export default New;
