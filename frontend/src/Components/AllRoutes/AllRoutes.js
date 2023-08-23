import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../User/HomePage/HomePage'
import CampaignPage from '../User/CampaignPage/CampaignPage'
import {ContactUs, OrdersPayemnts, ShippingTrackings, Miscellaneous,ReturnExchangeRefund} from '../User/ContactUs/ContactUs'
import TrackOrder from '../User/TrackOrder/TrackOrder'
import Fanbook from '../User/Fanbook/Fanbook'
import { PageNotFound } from '../CommonPages/PageNotFound/PageNotFound'
import MobileCover from '../User/ProductPages/CategoryPages/MobileCover.js/MobileCover'
import Men from '../User/ProductPages/CategoryPages/Men/Men'
import Women from '../User/ProductPages/CategoryPages/Women/Women'
import Kids from '../User/ProductPages/CategoryPages/Kids/Kids'
import Accessories from '../User/ProductPages/CategoryPages/Accessories/Accessories'
const AllRoutes = () => {
  return (
    <Routes>
        {/* User */}
        <Route path="/" Component={HomePage} />
        <Route path='*' Component={PageNotFound} />
        <Route path='/campaign' Component={CampaignPage}/>;
        <Route path='/fanbook' Component={Fanbook}/>;
        {/* ContactUsPage */}
        <Route path='/contact-us' Component={ContactUs}>
            <Route index Component={OrdersPayemnts}/>
            <Route path='shipping&tracking' Component={ShippingTrackings} />        
            <Route path='miscellaneous' Component={Miscellaneous} />        
            <Route path='returns-refund-exchange' Component={ReturnExchangeRefund} />        
        </Route>    
        <Route path='/trackorder' Component={TrackOrder}/>;

        {/* ProductPages */}
        <Route path='/products' Component={HomePage}/>
        {/* CategoryPages */}
        <Route path='/products/men' Component={Men}/>
        <Route path='/products/women' Component={Women}/>
        <Route path='/products/kids' Component={Kids}/>
        <Route path='/products/mobile-covers' Component={MobileCover}/>
        <Route path='/products/accessories' Component={Accessories}/>

    </Routes>
  )
}

export default AllRoutes