import React, { useRef } from "react";
import "./customers.css";
import Slider from "react-slick";
import Customer from "../../components/customer/Customer";
import { customer, customer1, customer2, customer3, rightarrow, leftarrow } from "./imports";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Customers() {
  const customeSlider = useRef();

  const settings = {
    className: "slider variable-width",
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    arrows: false,
    variableWidth: true
    // slidesToShow: 4,
  };

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <div className="h247__customers">
      {/* <img src={coolion} alt="coolion" /> */}
      <h2>Khách hàng của chúng tôi</h2>
      <div className="h247__customers-carousel">
          <Slider {...settings} ref={customeSlider}>
            <Customer
              name="Đặng Đắc Linh"
              image={customer1}
              age="48 tuổi"
              text="Đặt khám qua H247 xong tôi không phải chờ lúc đến bệnh viện nữa, cứ đến đúng giờ là vào thôi, rất nhanh gọn, đơn thuốc và kết quả được lưu luôn trên điện thoại nữa, khỏi cầm lấy tờ lỉnh kỉnh."
            />
            <Customer
              name="Nguyễn Như Hà Anh"
              image={customer2}
              age="20 tuổi"
              text="Có mục theo dõi sức khỏe sau tiêm rất có ích vì mình ở 1 mình, không có người nhà cùng theo dõi, lúc có triệu chứng cũng không chắc là có nghiêm trọng hay không nữa."
            />
            <Customer
              name="Trần Văn Hân"
              image={customer3}
              age="28 tuổi"
              text="Khám cực nhanh, đúng giờ là được vào khám rồi, không phải chờ theo lượt như bình thường nữa."
            />
            <Customer
              name="Trần Văn Hân"
              image={customer3}
              age="28 tuổi"
              text="Khám cực nhanh, đúng giờ là được vào khám rồi, không phải chờ theo lượt như bình thường nữa."
            />
            <Customer
              name="Cao Việt Bách"
              image={customer}
              age="Chuyên viên đo đạc"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <Customer
              name="Cao Việt Bách"
              image={customer}
              age="Chuyên viên đo đạc"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <Customer
              name="Cao Việt Bách"
              image={customer}
              age="Chuyên viên đo đạc"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
          </Slider>
      </div>
      <div className="h247__customers-carousel_button">
          <div onClick={previous}><img src={leftarrow} alt="leftarrow" /></div>
          <div onClick={next}><img src={rightarrow} alt="rightarrow" /></div>
        </div>
    </div>
  );
}

export default Customers;
