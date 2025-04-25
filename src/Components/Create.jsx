import React, { useState } from 'react';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Create.css';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState(null);
    const navigate = useNavigate();

  const handleCreateAccount = async () => {
    if (!email || !password) {
      alert('Email and Password are required!');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);

      alert('Account created successfully!');
        navigate('/account');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="create-container">
      <div className="create-content">
        <h1 className="create-title">Create your <br /> PopX account</h1>

        <div className="input-group">
          <label className="input-label" htmlFor="fullName">Full Name*</label>
          <input
            className="input-field"
            type="text"
            id="fullName"
            placeholder="Marry Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="phoneNumber">Phone number*</label>
          <input
            className="input-field"
            type="text"
            id="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">Email address*</label>
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
          <label className="input-label" htmlFor="password">Password*</label>
          <input
            className="input-field"
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="companyName">Company name</label>
          <input
            className="input-field"
            type="text"
            id="companyName"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="agency-question">
          <p className="agency-text">Are you an Agency?*</p>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="agency"
                value="yes"
                onChange={() => setIsAgency(true)}
              />
              <span className="custom-radio"></span> Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="agency"
                value="no"
                onChange={() => setIsAgency(false)}
              />
              <span className="custom-radio"></span> No
            </label>
          </div>
        </div>

        <button className="create-button" onClick={handleCreateAccount}>Create Account</button>
      </div>
    </div>
  );
};

export default Create;
