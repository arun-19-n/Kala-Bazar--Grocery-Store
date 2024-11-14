import React from 'react'
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_image from "../assets/hero_image.png"
import "./hero.css"
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Just In: Fresh Finds for You!</h2>
      <div>
      <div className='hero-hand-icon'>
        <p>Freshness</p>
        <img src={hand_icon} alt=''/>
      </div>
      <p>Restocked</p>
      <p>just for you </p>
      </div>
      {/* <div className='hero-latest-button'>
        <div>
           Fresh Stock
        </div>
        <img src={arrow_icon} alt=''/>
      </div> */}
      </div>
      <div className='hero-right'>
<img src={hero_image} alt=''/>
      </div>
    </div>
  )
}

export default Hero
