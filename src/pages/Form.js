import React, { useState } from 'react';
import './css/form.css';
import { useNavigate} from 'react-router-dom';

const Address = () => {
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [state, setState] = useState('');
const [postalCode, setPostalCode] = useState('');
const [country, setCountry] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const navigate=useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost/mywebsite/save_address.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, city, state, postalCode, country, email, phone }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Order placed! Address details have been emailed.");
        navigate("/orderplaced");
      } else {
        alert("Failed to send email: " + data.error);
      }
    })
    .catch(error => console.error("Error placing order:", error));
  };
    

  return (
    <div className="page">
      <div className="container">
        <h1 className="title">Address</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Street Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input"
            required
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input"
            required
          />
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="input"
            required
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="input"
            required
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            required
          />
          <button type="submit" className="button">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Address;
