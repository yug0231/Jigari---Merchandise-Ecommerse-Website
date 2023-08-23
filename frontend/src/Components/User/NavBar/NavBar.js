import React from 'react';
import "./NavBar.css"
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <div id='NavBar'>
        <div id='NavBarContainer'>
            <div id='NavBar-leftSection'>
                <div id='logoDiv'>
                 <NavLink to="/"><img src='../Images/Logo/JigariLogo-400px.png' style={{"width":"100%"}}/></NavLink>
                </div>
                <div id="NavBar-leftMenu">
                  <NavLink to="products/men"><div className='NavBarMenuItem'>Men</div></NavLink>
                  <NavLink to="products/women"><div className='NavBarMenuItem'>Women</div></NavLink>
                  <NavLink to="products/kids"><div className='NavBarMenuItem'>Kids</div></NavLink>
                  <NavLink to="products/mobile-covers"><div className='NavBarMenuItem'>Mobile Covers</div></NavLink>
                  <NavLink to="products/accessories"><div className='NavBarMenuItem'> Accessories</div></NavLink>
                </div>
            </div>
            <div id='NavBar-rightSection'>
            <div id="NavBar-rightMenu">                  
            <div className='NavBarMenuItem'><i class="bi bi-search"></i></div>
                  <NavLink to="profile"><div className='NavBarMenuItem'><i class="bi bi-person"></i></div></NavLink>
                  <NavLink to="wishlist"><div className='NavBarMenuItem'><i class="bi bi-suit-heart"></i></div></NavLink>
                  <NavLink to="cart"><div className='NavBarMenuItem'><i class="bi bi-bag-heart"></i></div></NavLink>
                </div>
            </div>
        </div>
    </div>
    <div id='NavBar-Mobile'>
      <div>
        acs
      </div>
    </div>
    </div>
  )
}

export default NavBar