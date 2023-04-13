import React from 'react';
// import { restaurant } from '../data.js';
// import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { restaurant } from '../data';

const RestaurantDetail = () => {
  const { id } = useParams();
  const selectedRestaurant = restaurant.find((item) => item.id === parseInt(id));
  console.log(selectedRestaurant);
  return(
    <div>
      RestaurantDetail
    </div>
  );
}

export default RestaurantDetail;