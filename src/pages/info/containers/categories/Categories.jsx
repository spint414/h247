import React, { useRef } from "react";
import "./categories.css";
import Category from "../../components/category/Category";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scrollR from "../../../../assets/images/Scroll-R.png";
import scrollL from "../../../../assets/images/Scroll-L.png";

function Categories() {
  const customeSlider = useRef();

  const settings = {
    className: "slider variable-width",
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    arrows: false,
    variableWidth: true,
  };

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <div className="info__categories">
      <div className="info__categories-ends_left"></div>
      <div className="left-arrow" onClick={previous}>
        <img src={scrollL} alt="leftarrow" />
      </div>
      <div className="info__categories-wrapper">
        <Slider {...settings} ref={customeSlider}>
          <Category title="Vaccine Covid 19" />
          <Category title="Dị ứng" />
          <Category title="Tiêm chủng" />
          <Category title="Test nhanh Covid" />
          <Category title="Tim mạch" />
          <Category title="Cúm gà" />
          <Category title="Nhi khoa" />
          <Category title="Vaccine Covid 19" />
          <Category title="Dị ứng" />
          <Category title="Tiêm chủng" />
          <Category title="Test nhanh Covid" />
          <Category title="Tim mạch" />
          <Category title="Cúm gà" />
          <Category title="Nhi khoa" />
        </Slider>
      </div>
      <div className="info__categories-ends_right"></div>
      <div className="right-arrow" onClick={next}>
        <img src={scrollR} alt="rightarrow" />
      </div>
    </div>
  );
}

export default Categories;
