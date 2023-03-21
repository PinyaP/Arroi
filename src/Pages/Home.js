import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='nav'>
      <p>RECOMMEND FOR YOU</p>
      <ul>
        <Link to="/" >Ranking the top 3 restaurants</Link>
        <Link to="" style={{marginLeft:'10px'}}>Popular Restaurants</Link>
        <Link to="" style={{marginLeft:'10px'}}>New Restaurants</Link>
      </ul>
      </div>
  )
};
export default Home;
