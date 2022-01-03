import React, { useRef } from "react";
import './news.css';
import Slider from "react-slick";
import New from "../../components/new/New";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newPic from "../../../../assets/images/People.png"

function News() {
const customeSlider = useRef();

  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4.5,
    speed: 500,
    arrows: false,
  };
  
    return (
        <div className='h247__news'>
            <h2>Tin tức</h2>
            <div className="h247__news-carousel">
            <div className="h247__news-carousel_render">
          <Slider {...settings} ref={customeSlider}>
          <New
              title="Lorem ipsum dolor sit amet, consectet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              image={newPic}
            />
          <New
              title="Lorem ipsum dolor sit amet, consectet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              image={newPic}
            />
          <New
              title="Lorem ipsum dolor sit amet, consectet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              image={newPic}
            />
          <New
              title="Lorem ipsum dolor sit amet, consectet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              image={newPic}
            />
          <New
              title="Lorem ipsum dolor sit amet, consectet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              image={newPic}
            />
          <New
              title="Lorem ipsum dolor sit amet, consectet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              image={newPic}
            />
          <New
              title="Lorem ipsum dolor sit amet, consectet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              image={newPic}
            />
          </Slider>
            </div>
        </div>
    </div>
    )
}

export default News




