import React from 'react'
import Hero from '../Components/hero/hero' 
import Popular from '../Components/popular/Popular'
import Offer from '../Components/offers/Offer'
import Newcollections from '../Components/newcollections/Newcollections'
import Newsletter from '../Components/newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
   <Hero />
   <Popular/>
   <Offer/>
   <Newcollections/>
   <Newsletter/>
    </div>
  )
}

export default Shop
