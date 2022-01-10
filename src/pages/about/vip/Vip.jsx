import React from "react";
import "./vip.css";
import vip from "../../../assets/images/Vip.png";
import vip2 from "../../../assets/images/Vip2.png";

function Introduce() {
  return (
    <div className="about__vip max__width">
      <div className="about__vip-wrapper">
        <div className="about__vip-text">
          <div className="about__vip-text_container">
            <div className="about__vip-text_goal">
              <h2>Mục tiêu</h2>
              <p>
                Chúng tôi hướng đến trở thành hệ sinh thái chăm sóc sức khoẻ ứng
                dụng công nghệ tiên tiến lớn nhất Việt Nam.
              </p>
            </div>
            <div className="about__vip-text_vision">
              <h2>Tầm nhìn & sứ mệnh</h2>
              <p>
                Deepcare Vietnam hướng đến trở thành hệ sinh thái chăm sóc sức
                khỏe ứng dụng công nghệ tiên tiến lớn xnhất Việt Nam.
                <br />
                <br />
                Chúng tôi cam kết mang đến cho cộng đồng nền y tế hiện đại hơn,
                tiện lợi hơn với mức chi tiêu cho hoạt động khám, chữa bệnh thấp
                hơn.
              </p>
            </div>
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
