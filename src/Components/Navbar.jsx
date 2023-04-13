import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        <Link to="/" className="site-title">
          <img className='logo'
            src="images/ArroiLogo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <input className='inputplace'
          type="text"
          placeholder="สถานที่ที่คุณต้องการไป.. "
        />
      </div>
      <div className='box3'>
        <input className='inputsearch'
          type="text"
          placeholder="ร้านอาหาร/คาเฟ่" 
        />
        <button id='button'>
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
