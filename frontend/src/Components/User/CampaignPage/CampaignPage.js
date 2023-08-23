import React from 'react'
import "./CampaignPage.css"
import { NavLink } from 'react-router-dom'
const OffersDivImage=({srcLink})=>{
  return(
    <div>
      <img src={srcLink} alt="Offers" style={{"width":"100%"}} />
    </div>
  )
}

const CampaignPage = () => {
  return (
    <div id='offersPage'>
        <h1>Jigari Offers</h1>
        <h4>Find the best across our platform on this page</h4>
        <div className='OffersDiv'>
          <NavLink to=" "><OffersDivImage srcLink={"../Images/OfferPage/1.webp"}/></NavLink>
          <NavLink to=""><OffersDivImage srcLink={"../Images/OfferPage/2.webp"}/></NavLink>
          <NavLink to=" "><OffersDivImage srcLink={"../Images/OfferPage/3.webp"}/></NavLink>
          <NavLink to=""><OffersDivImage srcLink={"../Images/OfferPage/4.webp"}/></NavLink>
          <NavLink to=" "><OffersDivImage srcLink={"../Images/OfferPage/3.webp"}/></NavLink>
          <NavLink to=""><OffersDivImage srcLink={"../Images/OfferPage/4.webp"}/></NavLink>

        </div>
    </div>
  )
}

export default CampaignPage;