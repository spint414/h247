import React from "react";
import "./awards.css";
import techfest from "../../../assets/images/Techfest.png";
import hfa from "../../../assets/images/HFA.png";
import hai from "../../../assets/images/HAI.png";

function Awards() {
  return (
    <div className="about__awards max__width">
      <h2>Giải thưởng</h2>
      <div className="about__awards-image">
        <img src={techfest} alt="techfest" />
        <img src={hfa} alt="hfa" />
        <img src={hai} alt="hai" />
      </div>
    </div>
  );
}

export default Awards;
