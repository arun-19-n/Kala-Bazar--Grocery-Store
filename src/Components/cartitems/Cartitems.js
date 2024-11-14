import React, { useContext } from 'react'
import './cartitems.css'
import { Shopcontext } from '../../Context/Shopcontext'
import remove_icon from '../assets/cart_cross_icon.png'
import {  useNavigate } from 'react-router-dom'

const Cartitems = () => {
    const {gettotalcartamount,all_product,cartitems,removefromcart}=useContext(Shopcontext)
    const {isLoggedIn}=useContext(Shopcontext)
    const navigate = useNavigate();

    const handleCheckout = () => {
      if (isLoggedIn) {
        navigate('/address');
    } else {
      alert("Please log in to proceed to checkout.");
        navigate('/login');
      
    }
    };
  return (
    
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
     {all_product.map((e)=>{
        if(cartitems[e.id]>0){
            return ( <div>
            <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cartitems-quantity'>{cartitems[e.id]}</button>
                <p>₹{e.new_price*cartitems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon}  onClick={()=>{removefromcart(e.id)}} alt=''/>
            </div>
            <hr/>
          </div>)
        }
        else{
          return null
        }
     })}
     <div className='cartitems-down'>
      <div className='cartitems-total'>
        <h1>Cart Totals</h1>
        <div>
          <div className='cartitems-total-items'>
            <p>Subtotal</p>
            <p>₹{gettotalcartamount()}</p>
          </div>
          <hr/>
          <div className='cartitems-total-items'>
            <p>Shipping Fee</p>
            <p>Free</p>
             </div>
             <hr />
             <div className='cartitems-total-items'>
              <h3>Total</h3>
              <h3>₹{gettotalcartamount()}</h3>
             </div>
        </div>
        <button onClick={handleCheckout} >
          PROCEED TO CHECKOUT
        </button>
      </div>
      <div className='cartitems-promocode'>
        <p>If you have a promocode, Enter it here</p>
        <div className='cartitems-promobox'>
          <input type='text' placeholder='promo code'/>
          <button>Submit</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Cartitems
