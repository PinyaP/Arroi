
// import React, { settings } from 'react';
import Slider from "react-slick";
import pic1 from "images/img1.png";
import pic2 from "images/img2.png";
import pic3 from "images/img3.png";
function Slickfood(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

return(
  <div className="reactSlick">
    <Slider {...settings}>
      <div>
        <img src={pic1}/>
      </div>
      <div>
      <img src={pic2}/>
      </div>
      <div>
      <img src={pic3}/>
      </div>
    </Slider>
  </div>
);
}
export default Slickfood;



