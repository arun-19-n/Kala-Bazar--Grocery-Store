
import React, { useState } from 'react'
import './css/loginsignup.css'
import { Link } from 'react-router-dom'
const Loginsignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/mywebsite/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
    
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server Error: ${text}`);
      }
    
      const data = await response.json();
      console.log(data.message);
      alert("You have Created an account in Soft Street");
     
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
    
  };
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
        <div className='loginsignup-fields'>
          <input  type='text'
              placeholder='Your Name'
              value={username}
              onChange={(e) => setUsername(e.target.value)} required/>
          <input type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          <input type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>
        </div>
        <button>Continue</button>
        </form>
        <p className='loginsignup-login'>Already have an account? <Link to='/login'><span >Login here </span></Link></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Loginsignup
