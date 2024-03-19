import React from 'react'
import './header.css'
function HeaderComponent() {
  return (
    <div className="nav">
      <img src="src\assets\logo.png" alt="" className="logo-img" />

      <ul className='navigation-items'>
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default HeaderComponent