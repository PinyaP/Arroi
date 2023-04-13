import React from 'react';
import { restaurant } from '../data.js';
import '../Styles/HeadlineCards.css';
import '../Styles/Home.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SeeAll = () => {
  return (
    <div className="top3-con">
        {restaurant.map((values) => {
          const { id, title, desc, rating, review, img } = values;
          return (
            <Link to={`/detail/${id}`}>
              <div  class="card" key={id}>
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
              </div>
            </Link>
          );
        })}
      </div>
  )
};

export default SeeAll;
