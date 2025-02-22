import React from 'react';
import { useParams } from 'react-router-dom';
import { restaurant } from '../data';
import '../Styles/RestaurantDetail.css';
import { FaStar } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsLine } from 'react-icons/bs';
import { IoMdPin } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiLovers } from 'react-icons/gi';
import { MdFamilyRestroom } from 'react-icons/md';
import { BsFire } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs';


const RestaurantDetail = () => {
  const { id } = useParams();
  const selectedRestaurant = restaurant.find(
    (item) => item.id === parseInt(id)
  );
  console.log(selectedRestaurant);
  return (
    <div className="container">
      <div className="picture-border">
        <img className="img1" src={selectedRestaurant.img2} alt="" />
        <img className="img2" src={selectedRestaurant.img3} alt="" />
        <img className="img3" src={selectedRestaurant.img4} alt="" />
      </div>
      <div className="detail-con">
        <div className='detail-map'>
          <div className="detail">
            <p className="headpp">{selectedRestaurant.title}</p>
            <p id="place">Thammasat Rungsit Campus,Pathumthani</p>

            <div style={{ display: 'flex' }}>
              <p id="textstar2">
                {selectedRestaurant.rating} <FaStar />
              </p>
              <p id="textreview">{selectedRestaurant.review} review</p>
            </div>
            <p className="subp">{selectedRestaurant.desc} |</p>

            <div style={{ display: 'flex' }}>
              <p id="avai">เปิดอยู่ถึง</p>
              <p id="time">20:00</p>
            </div>
          </div>
          <div className="map">
            <div className='left-map'>
              <img src={selectedRestaurant.img1} alt="" />
            </div>
            <div className='right-map'>
              <p>
                <IoMdPin /> lorem ipsum ipsum lorem
              </p>
              <p>
                <BsFillTelephoneFill /> 088-888-8888
              </p>
            </div>
          </div>
        </div>
        <div className="less-detail">
          <p id="time2">ช่วงเวลา</p>
          <p>ทุกวัน <span>16:00-20:00</span></p>
          <p id="conve">อำนวยความสะดวก</p>
          <p>ที่จอดรถ</p>
          <p>Free-Wifi</p>
          <p>บัตรเครดิต</p>
          <p>เดลิเวอรี่</p>
          <p id="seat">จำนวนที่นั่ง</p>
          <p id="border-bottom">41 - 80 ที่นั่ง</p>
          <p>
            <BsFacebook /> Facebook
          </p>
          <p>
            <AiOutlineInstagram /> Intragram
          </p>
          <p>
            <BsLine /> Line
          </p>
        </div>
      </div>
      <div className="review">
        <div className="left-review">
          <div className="rating">
            <h1>Rating 4.8 out of 5 <p id='staricon'><BsFillStarFill/></p></h1>
            {/* <li>5</li>
            <li>4</li>
            <li>3</li>
            <li>2</li>
            <li>1</li> */}
            <img className='rateimg' src={selectedRestaurant.rate} alt="" />
          </div>
          <div className="sui-top">
            <div className="suitable">
              <h3>Suitable for</h3>
              <li><BsFillPeopleFill/>&ensp;46%&ensp;Friends</li>
              <li><GiLovers/>&ensp;27%&ensp;Lover</li>
              <li><MdFamilyRestroom/>&ensp;22%&ensp;Family</li>
            </div>
            <div className="top">
              <h2>TOP <p id='fireicon'><BsFire/></p></h2>
              <h4>#2 from 4322</h4>
              <p>Steakhouse in Pathum Thani</p>
            </div>
          </div>
        </div>
        <div className="right-review">
          <h1>129 comments <p id='fireicon'><BsFire/></p></h1>
          <div className='boxcomment'>
            <li>comments</li>
            <li>comments</li>
            <li>comments</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
