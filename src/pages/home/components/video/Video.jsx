import React from "react";
import './video.css'
import ReactPlayer from "react-player";
import family from '../../../../assets/images/Family.png'
import playbtn from '../../../../assets/images/ButtonPlay.png'

function Video() {
  return (
    <div className="h247__header-video">
      <ReactPlayer
        className="videoFrame"
        url={"https://youtu.be/dQw4w9WgXcQ"}
        light={family}
        playIcon={<button className="play"><img src={playbtn} alt="playbtn" /></button>}
        playing
        controls
      />
    </div>
  );
}

export default Video;

