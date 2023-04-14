import React from 'react';
// import { restaurant } from '../data.js';
// import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { restaurant } from '../data';
import '../Styles/RestaurantDetail.css';
import { FaStar } from 'react-icons/fa';

const RestaurantDetail = () => {
  const { id } = useParams();
  const selectedRestaurant = restaurant.find((item) => item.id === parseInt(id));
  console.log(selectedRestaurant);
  return(
    <>
    <div className='picture-border'>
    </div>

    <div className='detail'>
      <p className='headpp'>{selectedRestaurant.title}</p>
      <p id='place'>Thammasat Rungsit Campus,Pathumthani</p>

      <div style={{ display: 'flex' }}>
        <p id="textstar">
        {selectedRestaurant.rating} <FaStar />
        </p>
        <p id="textreview">{selectedRestaurant.review} review</p>
      </div>
      <p className='subp'>{selectedRestaurant.desc} |</p>
      
      <div style={{ display: 'flex' }}>
        <p id="avai">เปิดอยู่ถึง</p>
        <p id="time">20:00</p>
      </div>
    </div>

    <div className='less-detail'>
    <p>asdasdasd</p>
    </div>
    </>
  );
}

export default RestaurantDetail;