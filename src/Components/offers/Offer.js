import React from 'react'
import "./offer.css"
import exclusive_image from '../assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offer'>
      <div className='offer-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON <h2>KALA BAZAAR</h2></p>
        {/* <button>Check Now</button> */}
      </div>
      <div className='offer-right'>
        <img src={exclusive_image} alt=''/>
      </div>
    </div>
  )
}

export default Offer
