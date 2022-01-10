import React from "react";
import "./header.css";
import apple from "../../../../assets/images/Apple.svg";
import googleplay from "../../../../assets/images/GooglePlay.svg";
import Video from "../../components/video/Video";

function Header() {
  return (
    <div className="h247__header gradient__bg" id="home">
      <div className="h247__header-wrapper max__width">
        <div className="h247__header-content">
          <h1>
            Trợ lý y tế <br />
            Cho cả gia đình
          </h1>
          <p>
            Trợ lý y tế ảo hỗ trợ người bệnh chăm sóc sức khoẻ và kết nối dễ
            dàng tới các giải pháp y tế phù hợp.
          </p>
          <p>Sử dụng miễn phí tại</p>
          <div className="h247__header-content_links">
            <a href="/#">
              <img src={apple} alt="apple" />
            </a>
            <a href="/#">
              <img src={googleplay} alt="googleplay" />
            </a>
          </div>
        </div>
        <div className="h247__header-image">
          <Video />
        </div>
      </div>
    </div>
  );
}

export default Header;
