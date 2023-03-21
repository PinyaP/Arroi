// import React, { settings } from 'react';
import Slider from 'react-slick';
import React from 'react';
function Slickfood(props) {
  const settings = {
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="reactSlick">
      <Slider {...settings} style={{ width: '100%', margin: '0 auto' }}>
        <div style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src="images/img1.png" alt="" />
          <h1
            style={{
              position: 'relative',

              color: '#000000',
            }}
          >
            1
          </h1>
        </div>
        <div style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src="images/img2.png" alt="" />
          <h1
            style={{
              position: 'relative',

              color: '#000000',
            }}
          >
            2
          </h1>
        </div>
        <div style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src="images/img3.png" alt="" />
          <h1
            style={{
              position: 'relative',
              color: '#000000',
            }}
          >
            3
          </h1>
        </div>
      </Slider>
    </div>
  );
}
export default Slickfood;
