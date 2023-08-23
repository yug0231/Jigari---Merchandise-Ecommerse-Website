import React from 'react';
import "./TopBar.css"
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div id='TopBar'>
      <div id='TopBar-centerContainer'>
        <div id='TopBar-LeftSection'>
          <p className='TopBar-item'><Link to="/campaign">Offers</Link></p>
          <p className='TopBar-item'><Link to="/fanbook">Fanbook</Link></p>
        </div>
        <div id='TopBar-RightSection'>
          <p className='TopBar-item'><Link to="/contact-us">Contact Us</Link></p>
          <p className='TopBar-item'><Link to="/trackorder">Trackorder</Link></p>
        </div>
      </div>
    </div>
  )
}

export default TopBar