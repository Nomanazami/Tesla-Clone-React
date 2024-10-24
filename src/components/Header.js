import React from 'react';
import "./header.css";
import logo from "../Images/logo.svg";

function Header() {
  return (
    <div>
      <div className="containerr">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <div className='menu' >
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
          </div>
          <div className='rightMenu' >
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
          <i class="fa-solid fa-bars"></i>
          <div className='customMenu'>
          </div>
          </div>

      </div>
    </div>
  );
}

export default Header;

 