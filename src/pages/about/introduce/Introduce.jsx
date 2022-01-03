import React from "react";
import "./introduce.css";
import introduce from "../../../assets/images/Introduce.png";

function Introduce() {
  return (
    <div className="about__introduce max__width">
      <div className="about__introduce-image">
        <img src={introduce} alt="introduce" />
      </div>
      <div className="about__introduce-content">
        <div className="about__introduce-content-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A quis
            enim, tellus eleifend felis, tellus. Venenatis condimentum neque,
            lectus iaculis pellentesque. A eget tristique aliquet suspendisse
            non. Tempus dignissim porttitor sagittis tristique et nisl lorem
            pellentesque. Velit mattis et iaculis et ullamcorper cursus
            maecenas. Ornare faucibus egestas id arcu. Quam gravida vitae in
            cursus massa viverra.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A quis
            enim, tellus eleifend felis, tellus. Venenatis condimentum neque,
            lectus iaculis pellentesque. A eget tristique aliquet suspendisse
            non. Tempus dignissim porttitor sagittis tristique et nisl lorem
            pellentesque. Velit mattis et iaculis et ullamcorper cursus
            maecenas. Ornare faucibus egestas id arcu. Quam gravida vitae in
            cursus massa viverra.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
