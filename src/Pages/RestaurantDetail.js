import React from 'react';
// import { restaurant } from '../data.js';
// import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { restaurant } from '../data';
import '../Styles/RestaurantDetail.css';
import { FaStar } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsLine } from 'react-icons/bs';

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
    <p id="time2">ช่วงเวลา</p>
      <p>ทุกวัน     16:00-20:00</p>
    <p id="conve">อำนวยความสะดวก</p>
      <p>ที่จอดรถ</p>
      <p>Free-Wifi</p>
      <p>บัตรเครดิต</p>
      <p>เดลิเวอรี่</p>
    <p id="seat">จำนวนที่นั่ง</p>
      <p id='border-bottom'>41 - 80 ที่นั่ง</p>
      <p><BsFacebook/></p>
      <p><AiOutlineInstagram/></p>
      <p><BsLine/></p>

    </div>
    </>
  );
}

export default RestaurantDetail;