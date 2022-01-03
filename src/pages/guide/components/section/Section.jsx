import React from "react";
import "./section.css";

function section({ title, image }) {
  const divBackground = {
    backgroundImage: "url(" + image + ")"
  };

  return (
    <div className="guide__sections-section" style={divBackground}>
        <div className="guide__section-section-container">
            <h3>{title}</h3>
        </div>
    </div>
  );
}

export default section;
