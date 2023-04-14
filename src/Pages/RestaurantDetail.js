import React from 'react';
// import { restaurant } from '../data.js';
// import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { restaurant } from '../data';
import '../Styles/RestaurantDetail.css';

const RestaurantDetail = () => {
  const { id } = useParams();
  const selectedRestaurant = restaurant.find((item) => item.id === parseInt(id));
  console.log(selectedRestaurant);
  return(
    <div className='detail'>
      <p className='headp'>{selectedRestaurant.title}</p>
      <p className='headp'>{selectedRestaurant.category}</p>
    </div>
  );
}

export default RestaurantDetail;