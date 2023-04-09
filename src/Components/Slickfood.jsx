import Slider from 'react-slick';
import React from 'react';
function Slickfood(props) {
  const settings = {
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="reactSlick">
      <Slider
        {...settings}
        style={{ width: '100%', margin: '0 auto', overflow: 'hidden' }}
      >
        <div style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src="images/img1.png" alt="" />
          <h1
            style={{
              position: 'absolute',
              color: 'white',
              fontSize: '18px',
              top: '80%',
              textAlign: 'center',
              fontWeight: 'bold',
              width: '14.24%',
            }}
          >
            Shellfish Pasta Pizza And Italian Food Photo
          </h1>
        </div>
        <div style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src="images/img2.png" alt="" />
          <h1
            style={{
              position: 'absolute',
              fontSize: '18px',
              color: 'white',
              top: '80%',
              textAlign: 'center',
              width: '14.24%',
            }}
          >
            2
          </h1>
        </div>
        <div style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src="images/img3.png" alt="" />
          <h1
            style={{
              position: 'absolute',
              fontSize: '18px',
              color: 'white',
              top: '80%',
              textAlign: 'center',
              width: '14.24%',
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
