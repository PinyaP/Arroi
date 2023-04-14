import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link , useNavigate} from 'react-router-dom';
import { restaurant } from '../data.js';
import '../Styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  function handleSearch(event) {
    
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;

    const matchingRestaurant = restaurant.find((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingRestaurant) {
      navigate(`/detail/${matchingRestaurant.id}`);
    } else {
      alert(`Sorry, we couldn't find a restaurant`);
    }
  }

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
      <form onSubmit={handleSearch}>
        <input
          className='inputsearch'
          type='text'
          placeholder='ร้านอาหาร/คาเฟ่'
          name='search'
        />
        <button type='submit' id='button'>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
    </div>
  );
}

export default Navbar;
