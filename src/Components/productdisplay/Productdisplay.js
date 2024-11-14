import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from "../assets/star_dull_icon.png"
import { Shopcontext } from '../../Context/Shopcontext'

const Productdisplay = (props) => {
    const {product}=props
    const {addtocart}=useContext(Shopcontext)
   
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
    <div className='productdisplay-img-list'>
        <img src={product.image}  alt=''/>
        <img src={product.image}  alt=''/>
        <img src={product.image}  alt=''/>
        <img src={product.image}  alt=''/>
    </div>
    <div className='productdisplay-img'>
        <img className='productdisplay-main-img' src={product.image} alt=''/>
    </div>
      </div>
      <div className='productdisplay-right'> 
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_dull_icon} alt=''/>
        {/* <p>(3)</p> */}
        </div>
        <div className='productdisplay-right-prices'>
        <div className='productdisplay-right-prices-old'>₹{product.old_price}</div>
        <div className='productdisplay-right-prices-new'>₹{product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
          Nature’s bounty, preserved for you. Taste the goodness of dried fruits.
        </div>
        <div className='productdisplay-right-size'>
            <h1>Packet Size (each 1kg)</h1>
            <div className='productdisplay-right-sizes'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </div>
        <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
        {/* <p className='productdisplay-right-category'><span>Category :</span>Dry Fruits </p> */}
        <p className='productdisplay-right-category'><span>Tags :</span>Natural, Fresh</p>
      </div>

    </div>
  )
}

export default Productdisplay
