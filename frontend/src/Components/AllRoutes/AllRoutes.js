import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../User/HomePage/HomePage'
import CampaignPage from '../User/CampaignPage/CampaignPage'
import ContactUs from '../User/ContactUs/ContactUs'
import TrackOrder from '../User/TrackOrder/TrackOrder'
import Fanbook from '../User/Fanbook/Fanbook'
import { PageNotFound } from '../CommonPages/PageNotFound/PageNotFound'
import MobileCover from '../User/ProductPages/CategoryPages/MobileCover.js/MobileCover'
import Men from '../User/ProductPages/CategoryPages/Men/Men'
import Women from '../User/ProductPages/CategoryPages/Women/Women'
const AllRoutes = () => {
  return (
    <Routes>
        {/* User */}
        <Route path="/" Component={HomePage} />
        <Route path='*' Component={PageNotFound} />
        <Route path='/campaign' Component={CampaignPage}/>;
        <Route path='/fanbook' Component={Fanbook}/>;
        <Route path='/contactus' Component={ContactUs}/>;
        <Route path='/trackorder' Component={TrackOrder}/>;

        {/* ProductPages */}
        <Route path='/products' Component={HomePage}/>
        {/* CategoryPages */}
        <Route path='/products/men' Component={Men}/>
        <Route path='/products/women' Component={Women}/>
        <Route path='/products/mobile-covers' Component={MobileCover}/>
    </Routes>
  )
}

export default AllRoutes