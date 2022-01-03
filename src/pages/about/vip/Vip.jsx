import React from "react";
import "./vip.css";
import vip from "../../../assets/images/Vip.png";
import vip2 from "../../../assets/images/Vip2.png";

function Introduce() {
  return (
    <div className="about__vip max__width">
      <div className="about__vip-wrapper">
        <div className="about__vip-vision">
          <div className="about__vip-vision-container">
            <h2>Tầm nhìn & sứ mệnh</h2>
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
        <div className="about__vip-team">
          <div className="about__vip-team-container">
            <h2>Đội ngũ</h2>
            <div className="about__vip-team_person-wrapper">
              <div className="about__vip-team_person">
                <img src={vip} alt="vip" />
                <h3>PhD. Hanh Nguyen</h3>
                <p>Founder - CEO</p>
              </div>
              <div className="about__vip-team_person">
                <img src={vip2} alt="vip2" />
                <h3>Msc. Hoan Dinh</h3>
                <p>Co-Founder - CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
