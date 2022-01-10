import React from "react";
import "./location.css";
import gps from "../../assets/images/GPS.png";
import mark from "../../assets/images/Location-mark.png";
import mail from "../../assets/images/Location-mail.png";
import phone from "../../assets/images/Location-phone.png";

function Location() {
  return (
    <div className="location">
      <div className="location__header">
        <img src={gps} alt="gps" />
      </div>
      <div className="location__content max__width">
        <div className="location__content-google">
          <iframe
            title="google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.5196579332967!2d105.80363461667176!3d20.998928362060763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca2cd3fffff%3A0xd2d82eaa29579516!2zMzUgTMOqIFbEg24gVGhpw6ptLCBUaGFuaCBYdcOibiBUcnVuZywgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1640171581846!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="location__content-info">
          <h1>Vị trí</h1>
          <div className="location__content-info_title">
            <img src={mark} alt="mark" />
            <p>Trụ sở</p>
          </div>
          <p>
            Lô 22, Số 35 Lê Văn Thiêm, P. Thanh Xuân Trung, Q. Thanh Xuân, TP.
            Hà Nội
          </p>
          <div className="location__content-info_title">
            <img src={phone} alt="phone" />
            <p>Hotline</p>
          </div>
          <p>1900 068 856</p>
          <div className="location__content-info_title">
            <img src={mail} alt="mail" />
            <p>Email</p>
          </div>
          <p>contact@deepcare.io</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
