import React from "react";
import './detail.css'
import {
  facebook,
  instagram,
  linkedIn,
  youtube,
  mark,
  mail,
  phone,
} from "./import";

function Detail() {
  return (
    <div className="contact__detail max__width">
      <div className="contact__detail-network">
        <h1>Liên hệ</h1>
        <p>Gửi email hoặc liên hệ qua các kênh mạng xã hội</p>
        <div className="contact__detail-network_links">
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
            <img src={linkedIn} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="contact__detail-location">
        <div className="contact__detail-location_block">
          <div className="contact__detail-location_title">
            <img src={mark} alt="mark" />
            <p>Trụ sở</p>
          </div>
          <p>
            Lô 22, Số 35 Lê Văn Thiêm, P. Thanh Xuân Trung, Q. Thanh Xuân, TP.
            Hà Nội
          </p>
        </div>

        <div className="contact__detail-location_container">
          <div className="contact__detail-location_block">
            <div className="contact__detail-location_title">
              <img src={phone} alt="phone" />
              <p>Hotline</p>
            </div>
            <p>1900 068 856</p>
          </div>
          <div className="contact__detail-location_block">
            <div className="contact__detail-location_title">
              <img src={mail} alt="mail" />
              <p>Email</p>
            </div>
            <p>contact@deepcare.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
