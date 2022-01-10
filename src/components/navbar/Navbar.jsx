import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/DeepcareLogo.png";
import { Link } from "react-router-dom";
import logotext from "../../assets/images/H247.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="h247__navbar">
      <div className="h247__navbar-wrapper max__width">
        <Link to="/">
          <div className="h247__navbar-banner">
            <div className="h247__navbar-banner_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="h247__navbar-banner_logo-text_group">
              <div className="h247__navbar-banner_logo-text">
                <img src={logotext} alt="logotext" />
              </div>
              <p>Vì một Việt Nam khỏe mạng hơn</p>
            </div>
          </div>
        </Link>
        <div className="h247__navbar-links">
          <Link to="/about">Về chúng tôi</Link>
          <Link to="/guide">Hưỡng dẫn sử dụng</Link>
          <Link to="/info">Kiến thức y khoa</Link>
          <Link to="/news">Tin tức</Link>
          <Link to="/contact"><button>Liên hệ</button></Link>
        </div>
        <div className="h247__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#213479"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#213479"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="h247__navbar-menu_container scale-up-center">
              <div className="h247__navbar-menu_container-links">
                <p>
                  <Link to="/">Về chúng tôi</Link>
                </p>
                <p>
                  <a href="#home">Hưỡng dẫn sử dụng</a>
                </p>
                <p>
                  <a href="#home">Kiến thức y khoa</a>
                </p>
                <p>
                  <a href="#home">Tin tức</a>
                </p>
                <p>
                  <a href="#home">Liên hệ</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
