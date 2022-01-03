import React from "react";
import "./specials.css";
import signup from "../../../../assets/images/RectangleSignup.png";
import mediaface from "../../../../assets/images/RectangleMediaface.png";
import black from "../../../../assets/images/RectangleBlack.png";

function Specials() {
  return (
    <div className="h247__specials max__width">
      <p>Ưu đãi độc quyền</p>
      <div className="h247__specials-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <a href="#home">Xem thêm</a>
      </div>
      <div className="h247__specials-image">
        <img src={signup} alt="signup" />
        <img src={mediaface} alt="mediaface" />
        <img src={black} alt="black" />
      </div>
    </div>
  );
}

export default Specials;
