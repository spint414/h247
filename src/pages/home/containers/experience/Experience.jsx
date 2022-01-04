import React from "react";
import "./experience.css";
import data from "../../../../assets/images/Data.png";

function Experience() {
  return (
    <div className="h247__experience">
      <div className="h247__experience-wrapper max__width">
        <div className="h247__experience-image">
          <img src={data} alt="data" />
        </div>
        <div className="h247__experience-text">
          <h2>
            Nguồn gốc
            <br /> tri thức y khoa
          </h2>
          <p>
            Song song với công nghệ trí tuệ nhân tạo là một đội ngũ các bác sĩ,
            chuyên gia y tế không ngừng cập nhật kiến thức y khoa, đảm bảo chất
            lượng đầu vào của dữ liệu y tế, hướng đến một công cụ kiểm tra sức
            khỏe chuẩn xác.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
