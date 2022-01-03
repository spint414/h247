import React from "react";
import "./cta.css";
import { Link } from "react-router-dom";
import { logocontact, facebook, youtube, instagram, linkedin } from "./imports";

function CTA() {
  return (
    <div className="h247__contact">
      <div className="h247__contact-wrapper max__width">
        <div className="h247__contact-content">
          <div className="h247__contact-content_info">
            <div className="h247__contact-content_info-name">
              <img src={logocontact} alt="logocontact"></img>
              <h2>Công ty cổ phần Deepcare Vietnam</h2>
            </div>
            <div className="h247__contact-content_info-address">
              <p>
                Trụ sở: &nbsp; Lô 22 - Số 35 Lê Văn Thiêm, Q. Thanh Xuân, Hà Nội
              </p>
              <p>Hotline: &nbsp; 1900 068 856</p>
              <p>Email: &nbsp; contact@deepcare.io</p>
              <p>
                Thời gian làm việc: &nbsp; Từ 9:00 đến 18:00 từ thứ 2 đến thứ 7
              </p>
            </div>
          </div>
          <div className="h247__contact-content_info-text">
            <div className="h247__contact-content_info-text-wrapper">
              <h3>Lorem ipsum</h3>
              <div />
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="h247__contact-content_info-text-wrapper">
              <h3>Lorem ipsum</h3>
              <div />
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="h247__contact-content_info-text-wrapper">
              <h3>Lorem ipsum</h3>
              <div />
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
        </div>
        <div className="h247__contact-content_links">
          <div className="h247__contact-content_links-social">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
          <div className="h247__contact-content_links-text">
            <Link to="/policy">Điều khoản & chính sách</Link>
            <a href="/#">Vị trí</a>
            <a href="/#">Liên hệ</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
