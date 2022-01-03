import React from "react";
import "./sections.css";
import Section from "../../components/section/Section";
import sectionpic from "../../../../assets/images/RectangleLaptop2.png";

function Sections() {
  return (
    <div className="guide__sections max__width">
      <div className="guide__sections-grid">
        <div className="guide__sections-grid_item">
          <Section image={sectionpic} title="Hưỡng dẫn đặt khám" />
        </div>
        <div className="guide__sections-grid_item">
          <Section image={sectionpic} title="Hưỡng dẫn đặt khám từ xa" />
        </div>
        <div className="guide__sections-grid_item">
          <Section
            image={sectionpic}
            title="Hướng dẫn theo dõi sau tiêm Vaccine Covid-19"
          />
        </div>
        <div className="guide__sections-grid_item">
          <Section image={sectionpic} title="Đăng nhập tài khoản" />
        </div>
        <div className="guide__sections-grid_item">
          <Section image={sectionpic} title="Thay đổi ảnh đại diện" />
        </div>
        <div className="guide__sections-grid_item">
          <Section image={sectionpic} title="Đổi mật khẩu cá nhân" />
        </div>
        <div className="guide__sections-grid_item">
          <Section image={sectionpic} title="Hướng dẫn hỏi đáp y tế" />
        </div>
        <div className="guide__sections-grid_item">
          <Section
            image={sectionpic}
            title="Hướng dẫn lưu trữ hồ sơ khám bệnh"
          />
        </div>
      </div>
    </div>
  );
}

export default Sections;
