import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { apple, googleplay, logocontact, facebook, youtube, instagram, linkedin } from "./imports";

function Footer() {
  return (
    <div className="h247__footer">
      <div className="h247__footer-wrapper max__width">
        <div className="h247__footer-content">
          <div className="h247__footer-content_info">
            <div className="h247__footer-content_info-name">
              <img src={logocontact} alt="logocontact"></img>
              <h2>Công ty cổ phần Deepcare Vietnam</h2>
            </div>
            <div className="h247__footer-content_info-address">
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
          <div className="h247__footer-content_info-text">
            <h2>Trải nghiệm ứng dụng</h2>
            <p>Trợ lý y tế ảo hỗ trợ người bệnh chăm sóc sức khoẻ và kết nối dễ dàng tới các giải pháp y tế phù hợp.</p>
            <div className="h247__footer-content_info-text_links">
            <a href="/#">
              <img src={apple} alt="apple" />
            </a>
            <a href="/#">
              <img src={googleplay} alt="googleplay" />
            </a>
          </div>
          </div>
        </div>
        <div className="h247__footer-content_links">
          <div className="h247__footer-content_links-social">
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
          <div className="h247__footer-content_links-text">
            <Link to="/policy">Điều khoản & chính sách</Link>
            <Link to="/location">Vị trí</Link>
            <Link to="/contact">Liên hệ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
