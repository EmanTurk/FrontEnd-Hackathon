import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './LoginBox.css';

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = () => {
    console.log('Logging in with:', { email, username, password });
    if (isValidEmail(email)) {
      navigate('/home');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="container">
      <h2>Please Login</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type
="text"
value={username}
onChange={(e) => setUsername(e.target.value)}
placeholder="Enter your username"
/>
</label>
<br />
<label>
Password:
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
placeholder="Enter your password"
/>
</label>
<br />
<button onClick={handleLogin}>Login</button>
<p>
Don't have an account yet?{' '}
<Link to="/signup">Sign Up</Link> {}
</p>
</div>
);
};

export default LoginBox;