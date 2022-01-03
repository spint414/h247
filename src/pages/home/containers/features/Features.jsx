import React from "react";
import "./features.css";
import icon from "../../../../assets/images/Icon.png";
import bot from "../../../../assets/images/RectangleChatbot.png";
import screen from "../../../../assets/images/RectangleScreen.png";
import laptop from "../../../../assets/images/RectangleLaptop.png";

function Features() {
  return (
    <div className="h247__features">
      <div className="h247__features-banner">
        <div className="h247__features-banner_wrapper max__width">
          <p>nền tảng y tế số hỗ trợ chăm sóc sức khỏe toàn diện</p>
        </div>
      </div>
      <div className="h247__features-list">
        <div className="h247__features-list_wrapper">
          <div className="h247__features-list_text">
            <div className="h247__features-list_text-container ctn1">
              <h2>ĐẶT KHÁM DỄ DÀNG</h2>
              <div className="h247__features-list_text-profile">
                <img src={icon} alt="icon" />
                <p>
                  Hỗ trợ tư vấn, chọn đúng chuyên khoa, đúng bác sĩ theo triệu
                  chứng lâm sàng.
                </p>
              </div>
            </div>
          </div>
          <div className="h247__features-list_image">
            <img src={bot} alt="mockup" />
          </div>
        </div>
        <div className="h247__features-list_wrapper">
          <div className="h247__features-list_image">
            <img src={laptop} alt="mockup" />
          </div>
          <div className="h247__features-list_text">
            <div className="h247__features-list_text-container ctn2">
              <h2>Theo dõi sức khỏe</h2>
              <div className="h247__features-list_text-profile">
                <img src={icon} alt="icon" />
                <p>
                  Cung cấp lộ trình theo dõi sức khỏe sau tiêm Vaccine Covid-19.
                  Cùng bệnh nhân F0 theo sát và tự điều trị tại nhà
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h247__features-list_wrapper">
          <div className="h247__features-list_text">
            <div className="h247__features-list_text-container ctn3">
              <h2>LƯU TRỮ HỒ SƠ MIỄN PHÍ</h2>
              <div className="h247__features-list_text-profile">
                <img src={icon} alt="icon" />
                <p>
                  Hỗ trợ cung cấp thông tin về hồ sơ bệnh án của bạn, thông tin
                  bệnh viện nhờ vào hỏi đáp y tế thông minh.
                </p>
              </div>
            </div>
          </div>
          <div className="h247__features-list_image">
            <img src={screen} alt="mockup" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
