import React, { useState, useEffect } from "react";
import arrow from "../../assets/images/Up.png";
import home from "../../assets/images/Home.png";
// import { BackTop } from "antd";
import { Link } from "react-router-dom";
// import useWindowDimensions from "./useWindowDimensions";

function ScrollToTop() {
  // const { height } = useWindowDimensions();
  // const appear = height * 0.66;

  const [displayBtns, setDisplayBtns] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let rootElement = document.documentElement;
      let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

      if (rootElement.scrollTop / scrollTotal > 1 / 3 && !displayBtns) {
        setDisplayBtns(true);
      } else {
        setDisplayBtns(false);
      }
    });
  }, []);

  const styleDiv = {
    height: 50,
    width: 50,
    borderRadius: 5,
    background: "#ffffff",
    border: "2px solid #193B6C",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "106px",
    left: "40px",
    zIndex: "99",
    cursor: "pointer",
    display: displayBtns ? "flex" : "none",
  };

  const styleDiv2 = {
    height: 50,
    width: 50,
    borderRadius: 5,
    background: "#ffffff",
    textAlign: "center",
    border: "2px solid #193B6C",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "40px",
    left: "40px",
    zIndex: "99",
    cursor: "pointer",
    display: displayBtns ? "flex" : "none",
  };

  return (
    <div className="h247__scroll">
      <div
        style={styleDiv}
        onClick={() => {
          document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <img
          style={{ maxHeight: "24px", maxWidth: "26px" }}
          src={arrow}
          alt="arrow"
        />
      </div>
      <Link to="/">
        <div style={styleDiv2}>
          <img
            src={home}
            style={{ maxHeight: "24px", maxWidth: "26px" }}
            alt="home"
          />
        </div>
      </Link>
    </div>
  );
}

export default ScrollToTop;
