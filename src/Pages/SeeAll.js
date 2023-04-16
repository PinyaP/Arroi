import React from 'react';
import { restaurant } from '../data.js';
import '../Styles/HeadlineCards.css';
import '../Styles/Home.css';
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const SeeAll = () => {
  const { category } = useParams();
  const categoryRestaurant = restaurant.filter((item) =>item.category.includes(category));
  console.log(categoryRestaurant);
  return (
    <div class="seeall">
      <p id="head">See All</p>
      <div className="top3-con">
        {categoryRestaurant.map((values) => {
          const { id, title, desc, rating, review, img1 } = values;
          return (
            <Link to={`/detail/${id}`}>
              <div  class="card" key={id}>
                <img src={"/" + img1} alt="/" />
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
    </div>
  )
};
    
export default SeeAll;