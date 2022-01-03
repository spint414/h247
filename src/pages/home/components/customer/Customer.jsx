import React from "react";
import "./customer.css";

function Customer({ name, image, role, text }) {
  return (
    <div className="h247__customers-carousel_customer">
      <div className="h247__customers-carousel_customer-title">
        <img src={image} alt="customer" />
        <div className="h247__customers-carousel_customer-profile">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div className="h247__customers-carousel_customer-info">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Customer;
