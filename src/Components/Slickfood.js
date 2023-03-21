// import React, { settings } from 'react';
import Slider from 'react-slick';
import React from 'react';
function Slickfood(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="reactSlick">
      <Slider {...settings}>
        <div>
          <img src="images/img1.png" alt="" />
        </div>
        <div>
          <img src="images/img2.png" alt="" />
        </div>
        <div>
          <img src="images/img3.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}
export default Slickfood;
