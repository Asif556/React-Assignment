import React from 'react';
import './PopX.css'; 
import { useNavigate } from 'react-router-dom';

const PopX = () => {
    const navigate = useNavigate();
    function handleCreateAccount() {
        navigate('/create');
    }
    function handleLogin() {
        navigate('/login');
    }
  return (
    <div className="popx-container">
      <div className="popx-content">
        <h1 className="popx-title">Welcome to PopX</h1>
        <p className="popx-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="popx-button create-account" onClick={handleCreateAccount}>Create Account</button>
        <button className="popx-button login" onClick={handleLogin}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default PopX;
