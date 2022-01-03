import React from "react";
import arrow from "../../assets/images/Up.png";
import home from "../../assets/images/Home.png";
import { BackTop } from "antd";
import { Link } from "react-router-dom";
import useWindowDimensions from "./useWindowDimensions";
import "antd/dist/antd.css";
import "../../reset.css";

function ScrollToTop() {
  const { height } = useWindowDimensions();
  const appear = height * 0.66;

  const styleDiv = {
    height: 50,
    width: 50,
    borderRadius: 5,
    textAlign: "center",
    border: "2px solid #193B6C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "106px",
    left: "40px",
    zIndex: "99",
  };

  const styleDiv2 = {
    height: 50,
    width: 50,
    borderRadius: 5,
    textAlign: "center",
    border: "2px solid #193B6C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "40px",
    left: "40px",
    zIndex: "99",
  };

  return (
    <div className="h247__scroll">
      <BackTop visibilityHeight={appear}>
        <div style={styleDiv}>
          <img
            src={arrow}
            style={{ maxHeight: "25px", maxWidth: "14px" }}
            alt="arrow"
          />
        </div>
      </BackTop>

      <BackTop visibilityHeight={appear} duration={0}>
        <div style={styleDiv2}>
          <Link to="/">
            <img
              src={home}
              style={{ maxHeight: "24px", maxWidth: "26px" }}
              alt="home"
            />
          </Link>
        </div>
      </BackTop>
    </div>
  );
}

export default ScrollToTop;
