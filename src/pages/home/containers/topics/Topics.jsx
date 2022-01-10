import React from "react";
import "./topics.css";
import Topic from "../../components/topic/topic";
import {
  iconBaby,
  iconHeart,
  iconLiver,
  iconGirl,
  iconBoy,
  iconXray,
  iconStomach,
} from "./imports";

function Topics() {
  return (
    <div className="h247__topics">
      <div className="h247__topics-wrapper">
        <div className="h247__topics-content">
          <h2>Kiến thức y tế cần biết</h2>
          <p>
            1001 điều có thể bạn chưa biết về sức khỏe và cơ thể bạn. Hãy cùng
            H247 cập nhật để tự tin có một thân thể khỏe mạnh, dẻo dai nhé!{" "}
          </p>
        </div>
        <div className="h247__topics-container">
          <div className="h247__topics-container_row">
            <Topic icon={iconHeart} title="Tim mạch" number={13} />
            <Topic icon={iconStomach} title="Tiêu hóa" number={13} />
          </div>
          <div className="h247__topics-container_row">
            <Topic icon={iconBaby} title="Nhi khoa" number={13} />
            <Topic icon={iconLiver} title="Nội tiết" number={13} />
            <Topic icon={iconBoy} title="Nam khoa" number={13} />
          </div>
          <div className="h247__topics-container_row">
            <Topic icon={iconGirl} title="Phụ khoa" number={13} />
            <Topic icon={iconXray} title="Xương khớp" number={13} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topics;
