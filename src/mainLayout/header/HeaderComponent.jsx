import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'


function HeaderComponent() {
  return (
 
    <div className="nav">
      <img src="src\assets\logo.png" alt="" className="logo-img" />
      <ul className='navigation-items'>
        <li>
        <Link to="/">Home</Link> 
          </li>
        <li>
         <Link to="/products"> Products </Link>
         </li>
         <li>
          <Link to="/cart"> Cart </Link>
          </li>
        <li>
          <Link to="/contactForm"> Contact Us </Link>
          </li>
      </ul>
    </div>
  
  );
}

export default HeaderComponent