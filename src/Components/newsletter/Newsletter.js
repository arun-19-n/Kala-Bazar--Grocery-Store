import React, { useState } from 'react'
import './newletter.css'


const Newsletter = () => {
  const [email, setEmail] = useState('');
  const handleSubscribe = () => {
    fetch("http://localhost/mywebsite/mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error("Error subscribing:", error));
  };
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter</p>
        <div>
        <input
          type='email'
          placeholder='Your Email ID'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <button onClick={handleSubscribe}>Subscribe</button> */}
        </div>
      
    </div>
  )
}

export default Newsletter
