import React, { useState } from 'react';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import '../Styles/HeadlineCards.css';
import Slickfood from '../Components/Slickfood';
import { restaurant } from '../data.js';
import { FaStar } from 'react-icons/fa';

const Home = () => {
  const [data, setData] = useState(restaurant);

  const filterResult = (catItem) => {
    const result = restaurant.filter((curData) =>
      curData.category.includes(catItem)
    );
    setData(result);
  };

  return (
    <div className="home-container">
      <Slickfood />
      <div className="nav">
        <p>RECOMMEND FOR YOU</p>
        <ul style={{ gap: '1rem' }}>
          <button class="btn" onClick={() => filterResult('ranking')}>
            Ranking the top 3 restaurants
          </button>
          <button class="btn" onClick={() => filterResult('a')}>
            Popular Restaurants
          </button>
          <button  class="btn" onClick={() => filterResult('newres')}>
            New Restaurants
          </button>
        </ul>
      </div>
      <div className="top3-con">
        {data.map((values) => {
          const { id, title, desc, rating, review, img } = values;
          return (
            <Link to={`/detail/${id}`} class="card" key={id}>
              <img src={img} alt="/" />
              <div class="textborder">
                <p class="headp">{title}</p>
                <p class="subp">{desc}</p>
                <div style={{ display: 'flex' }}>
                  <p id="textstar">
                    {rating} <FaStar />
                  </p>
                  <p id="textreview">{review} review</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <button id="seeallbtn"><span>See All </span></button>

    </div>
  );
};
export default Home;
