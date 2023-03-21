import logo from '../images/ArroiLogo.png';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
// import { BsFillPinFill } from "react-icons/bs";
function Navbar() {
  return (
    <div
      className="navbar-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        paddingRight: '10rem'
      }}
    >
      <div>
        <a href="/" className="site-title"><img style={{width: '140px', height: '55px', paddingLeft:'63px',marginTop:'8px'}} src={logo} alt="logo" /></a>
        
      </div>
      <div>
        <input style={{width: '300px',height:'25px',border: 'auto', borderRadius: '8px', textAlign:'center'}}type="text" placeholder="สถานที่ที่คุณต้องการไป.. " />
      </div>
      <div>
        <input style={{width: '300px',height:'25px',border: 'auto', borderRadius: '8px 0px 0px 8px', textAlign:'center'}}type="text" placeholder="ร้านอาหาร/คาเฟ่" />
        <button style={{width: '30px',height:'31px',border: 'auto', borderRadius: '0px 8px 8px 0px'}}>
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
