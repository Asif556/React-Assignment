import React, { useState } from 'react';
import { auth } from './Firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login Successful!');
      navigate('/account');
    
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Signin to your <br /> PopX account</h1>
        <p className="login-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="input-group">
          <label className="input-label" htmlFor="email">Email Address</label>
          <input
            className="input-field"
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="password">Password</label>
          <input
            className="input-field"
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
