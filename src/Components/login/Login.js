import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../Context/Shopcontext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggedIn, setIsLoggedIn } = useContext(Shopcontext);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost/mywebsite/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setIsLoggedIn(true);
        alert('Login successful!');
      } else {
        setIsLoggedIn(false);
        alert('Login failed: ' + data.error);
      }
    };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleLogin} style={styles.form}>
        
          <input
             type="text"
             placeholder="Email Address"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             style={styles.input}
             required
          />
          <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           style={styles.input}
           required
          />
          <button type="submit" style={styles.button}>Continue</button>
        </form>
        <p style={styles.text}>
          Don't have an account? <Link to='/loginpage'><span style={styles.link}>Sign up here</span></Link>
        </p>
        <p style={styles.policy}>
          By continuing, I agree to the terms of use & privacy policy.
        </p>
        <p style={styles.policy}>Login status: {isLoggedIn ? "Logged in" : "Not logged in"}</p> 
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fce3fe',
  },
  container: {
    width: '580px',
    padding: '40px 60px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
   
  },
  title: {
    fontSize: '35px',
    margin: '20px 0px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '29px',
    marginTop: '30px',
  },
  input: {
    paddingLeft: '20px',
    fontSize: '18px',
    borderRadius: '4px',
    border: '1px solid #c9c9c9',
    color: 'black',
    outline: 'none',
    width:'100%',
    height:'72px',

  },
  button: {
    padding: '12px',
    fontSize: '24px',
    fontWeight:'500',
    borderRadius: '4px',
    border: 'none',
    width: '600px',
    marginTop: '30px',
    height: '72px',
    color: '#fff',
    backgroundColor: '#ff4141',
    cursor: 'pointer',
  },
  text: {
    marginTop: '15px',
    fontSize: '14px',
    color: '#666',
  },
  link: {
    color: '#ff4141',
    textDecoration: 'none',
    fontSize:'20px',
    
  },
  policy: {
    marginTop: '10px',
    fontSize: '18px',
    color: '#999',
  },
};

export default Login;