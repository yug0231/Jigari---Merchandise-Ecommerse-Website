import React from 'react'
import "./PageNotFound.css"
import { NavLink } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <div id='PageNotFound'>
            <img src='../Images/PageNotFound/pagenotfound.png' className='image404' />
            <p style={{ "fontSize": "Large", "color":"323333" }}>Maybe you’ll find it in one of these categories:</p>
            <div className='PageNotFoundCategories'>
                {/* part-1 */}
                <div className='PageNotFound-Category-title'> Men
                    <div className='PageNotFound-SubCategories'>
                        <div className='PageNotFound-Category subCategory'> T-Shirts</div>
                        <div className='PageNotFound-Category subCategory'> Hoodies</div>
                        <div className='PageNotFound-Category subCategory'> Over-Size Tshirts</div>
                        <div className='PageNotFound-Category subCategory'> Trunks</div>
                    </div>
                </div>

                {/* Part-2 */}
                <div className='PageNotFound-Category-title'> Women
                    <div className='PageNotFound-SubCategories'>
                        <div className='PageNotFound-Category subCategory'> T-Shirts</div>
                        <div className='PageNotFound-Category subCategory'> Hoodies</div>
                        <div className='PageNotFound-Category subCategory'> Over-Size Tshirts</div>
                        <div className='PageNotFound-Category subCategory'> Crop Tops</div>
                    </div>
                </div>

                {/* Part-3 */}
                <div className='PageNotFound-Category-title'> Accessories
                    <div className='PageNotFound-SubCategories'>
                        <div className='PageNotFound-Category subCategory'> Mobile Covers</div>
                        <div className='PageNotFound-Category subCategory'> Key Tags</div>
                        <div className='PageNotFound-Category subCategory'> Mug's</div>
                        <div className='PageNotFound-Category subCategory'> Badges</div>
                        <div className='PageNotFound-Category subCategory'> Stickers</div>
                        <div className='PageNotFound-Category subCategory'> Keychains</div>
                        <div className='PageNotFound-Category subCategory'> Sippers</div>
                        <div className='PageNotFound-Category subCategory'> Pop Sockets</div>
                    </div>
                </div>
            </div>
            <NavLink to="/"><div className='BackToHome'>
                <span>Back To Homepage</span>
            </div>
            </NavLink>
        </div>
    )
}
