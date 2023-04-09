import React from 'react';
import '../Styles/HeadlineCards.css';
import { Link } from 'react-router-dom';
const Top3res = () => {
  return (
    <div>
      <div className="nav">
        <p>RECOMMEND FOR YOU</p>
        <ul>
          <Link to="/">Ranking the top 3 restaurants</Link>
          <Link to="/" style={{ marginLeft: '10px' }}>
            Popular Restaurants
          </Link>
          <Link to="" style={{ marginLeft: '10px' }}>
            New Restaurants
          </Link>
        </ul>
      </div>
      <div className="top3-con">
        <div class="card">
          <img src="images/ginzado.png" alt="/" />
          <div class="textborder">
            <p class="headp">Ginzado ทองหล่อ</p>
            <p class="subp">ปิ้งย่าง, อาหารญี่ปุ่น</p>
          </div>
        </div>
        <div class="card">
          <img src="images/copper.png" alt="/" />
          <div class="textborder">
            <p class="headp">Copper ทองหล่อ</p>
            <p class="subp">ปิ้งย่าง, อาหารญี่ปุ่น</p>
          </div>
        </div>
        <div class="card">
          <img src="images/steakholder.png" alt="/" />
          <div class="textborder">
            <p class="headp">Copper ทองหล่อ</p>
            <p class="subp">ปิ้งย่าง, อาหารญี่ปุ่น</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top3res;
