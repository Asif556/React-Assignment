import React from 'react';
import './Account.css';

const Account = () => {
  return (
    <div className="account-container">
        <div className="head">
      <h2 className="account-heading">Account Settings</h2>
      </div>

      <div className="account-card">
        <div className="account-profile">
          <img
            className="profile-image"
            src="https://i.ibb.co/5GzXkwq/profile-pic.png"
            alt="Profile"
          />
          <div className="profile-details">
            <h3 className="profile-name">Marry Doe</h3>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="account-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Account;
