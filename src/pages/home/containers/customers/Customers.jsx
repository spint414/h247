import React, { useRef } from "react";
import "./customers.css";
import Slider from "react-slick";
import Customer from "../../components/customer/Customer";
import { coolion, customerpic, rightarrow, leftarrow } from "./imports";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Customers() {
  const customeSlider = useRef();

  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrows: false,
  };

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <div className="h247__customers">
      <img src={coolion} alt="coolion" />
      <h2>Khách hàng của chúng tôi</h2>
      <div className="h247__customers-carousel">
        <div className="h247__customers-carousel_render">
          <Slider {...settings} ref={customeSlider}>
            <Customer
              name="Cao Việt Bách"
              image={customerpic}
              role="Chuyên viên đo đạc"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <Customer
              name="Cao Việt Bách"
              image={customerpic}
              role="Chuyên viên đo đạc"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <Customer
              name="Cao Việt Bách"
              image={customerpic}
              role="Chuyên viên đo đạc"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <Customer
              name="Cao Việt Bách"
              image={customerpic}
              role="Chuyên viên đo đạc"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <Customer
              name="Cao Việt Bách"
              image={customerpic}
              role="Chuyên viên đo đạc"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
          </Slider>
        </div>
      </div>
      <div className="h247__customers-carousel_button">
          <div onClick={previous}><img src={leftarrow} alt="leftarrow" /></div>
          <div onClick={next}><img src={rightarrow} alt="rightarrow" /></div>
        </div>
    </div>
  );
}

export default Customers;
