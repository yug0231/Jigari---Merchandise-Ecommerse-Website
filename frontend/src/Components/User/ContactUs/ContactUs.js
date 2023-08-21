import React from 'react'
import "./ContactUs.css"
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div id='ContactUsPage'>
      <h1>Manage Your Orders Easily</h1><br></br>
      <h3>Track, Return/ Exchange, or Cancel your orders hassle-free.</h3>
      <Link to="/profile/my-orders">
      <div className='ContactUsPage-MyOrdersButton'>
          <h3>MY ORDERS</h3>
      </div>
      </Link>
      <div id='homeGrownBanner'>
          <h1>HOME GROWING INDIAN BRAND</h1>
      </div>
      <h2>Determined to make our <span style={{"fontWeight":"bolder"}}>Jigari's Smile</span></h2>
    </div>
  )
}

export default ContactUs;