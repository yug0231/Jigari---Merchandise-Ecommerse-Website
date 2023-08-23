import React from 'react';
import "./TrackOrder.css"

// select Box
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TrackOrder = () => {
  return (
    <div id='trackOrderPage'>
      <h1>Track Orders</h1>
      <div className='trackOrdersDiv'>
          <h3>Track Order Using Order-Id & Mobile Number</h3>
          <input type='text' placeholder='Order Id'className='TrackOrderInputBox'/><br></br>
          <input type='text' placeholder='Mobile Number/E-mail Id' className='TrackOrderInputBox'/><br></br>
          <div className='trackOrderbtn'>Track Order</div>
          <p>Note - If you don’t have Order Id please Log In and go to orders section in your profile.</p>
      </div>
      </div>
  )
}

export default TrackOrder