import React from "react";
import "./introduce.css";
import introduce from "../../../assets/images/Introduce.png";

function Introduce() {
  return (
    <div className="about__introduce max__width">
      <div className="about__introduce-image">
        <img src={introduce} alt="introduce" />
      </div>
      <p>
        Deepcare là dự án khởi nghiệp với thế mạnh là đội ngũ sáng lập bao gồm
        các Tiến Sĩ, Thạc Sĩ tu nghiệp tại Pháp, chuyên nghiên cứu và phát triển
        công nghệ mới áp dụng trong lĩnh vực y tế, sản phẩm y tế chất lượng, dễ
        tiếp cận, phục vụ cộng đồng. Tham gia tư vấn và hỗ trợ cùng chúng tôi là
        nhóm các bác sĩ, chuyên gia trong lĩnh vực Y tế ở Việt Nam và Pháp.
        <br />
        <br />
        Chúng tôi hiểu rõ những bất cập mà hệ thống y tế ở Việt nam đang gặp
        phải. Deepcare mong muốn đem khả năng của mình góp phần xóa bỏ những
        khuyết điểm đó. Làm chủ công nghệ và hiểu được giá trị to lớn mà công
        nghệ hiện đại có thể mang lại cho hệ thống chăm sóc sức khỏe cùng với
        cộng đồng bác sĩ giỏi, có tâm, có tài và nhiệt huyết.
      </p>
    </div>
  );
}

export default Introduce;
