import React from 'react'
import './footer.css'
import logo from "../assets/SINCE 2020.png"
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
    <br></br>
      <div className='footer-logo'>
        <img src={logo} alt=''/>
        <p>Kala Bazaar </p>
      </div>
      <ul className='footer-links'>
       
        <li>Products</li>
        
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div  className='footer-icons-container'>
            <img src={instagram_icon} alt=''/>
        </div>
        <div  className='footer-icons-container'>
            <img src={pintester_icon} alt=''/>
        </div>
        <div  className='footer-icons-container'>
            <img src={whatsapp_icon} alt=''/>
        </div>

        
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright @2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
