import React, {useState} from "react";
import "./sidebar.css";
import { logoside, arrowside, facebookside, youtubeside, instagramside, linkedinside } from './imports'

function Sidebar() {
    const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="h247__sidebar">
      {
        !isVisible ?
          <button onClick={() => setIsVisible(true)} className="h247__sidebar_share-btn">
            <img className="logoside" src={logoside} alt="logoside" />
          </button>
          : null
      }
      {
        isVisible ?
        <div className="h247__sidebar-hide">
        <button onClick={() => setIsVisible(false)} className="h247__sidebar_share-btn">
            <img className="arrowside" src={arrowside} alt="logoside" />
        </button>
        <div className="h247__sidebar_social-links">
            <a href="https://www.facebook.com/"><img src={facebookside} alt="facebook" /></a>
            <a href="https://www.youtube.com/"><img src={youtubeside} alt="youtube" /></a>
            <a href="https://www.instagram.com/"><img src={instagramside} alt="instagram" /></a>
            <a href="https://www.linkedin.com/"><img src={linkedinside} alt="linkdin" /></a>
        </div>
        </div>
        : null
      }
    </div>
  );
}

export default Sidebar;
