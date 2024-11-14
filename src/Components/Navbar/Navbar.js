import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../assets/SINCE 2020.png"
import cart_icon from "../assets/shopping-cart.png"
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/Shopcontext'

const Navbar = () => {
    const [menu,setmenu]=useState("shop")
    const {gettotalcartitems}=useContext(Shopcontext)
  return (
    <div className='Navbar'>
     <div className='nav-logo'>
        {/* <img src={logo} className='logo1' alt=''/> */}
        <p>Kala Bazaar  </p>
     </div>
    <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("vegetables")}}>
        <Link style={{textDecoration:'none'}} to='/vegetables'>Vegetables</Link>{menu==="vegetables"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setmenu("dryfruits")}}><Link style={{textDecoration:'none'}} to='/dryfruits'>Dry Fruits</Link>{menu==="dryfruits"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
        <Link to='/loginpage'><button id="log">Login</button></Link>
        <Link to='/cart'><img src={cart_icon} className='cart1' alt=''/></Link>
        <div className='nav-cart-count'>{gettotalcartitems()}</div>
    </div>
    </div>
  )
}

export default Navbar

