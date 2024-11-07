// src/components/Banner.js

import React, { useState, useContext } from 'react';
import './banner.css';
import backgroundVideo from "../../assets/images/slider/background5.mp4";
import Login from './Login';
import Signup from './Signup';
import { AuthContext } from '../../api/AuthContext'; // Import AuthContext to use authentication data

const Banner = () => {
  const [showForm, setShowForm] = useState(null); // Controls which form (login/signup) is shown
  const { isAuthenticated, logout } = useContext(AuthContext); // Access authentication state and logout function from context

  const handleLoginClick = () => {
    setShowForm('login'); // Show login form
  };

  const handleSignupClick = () => {
    setShowForm('signup'); // Show signup form
  };

  const handleLogoutClick = () => {
    logout(); // Call logout function from context
    setShowForm(null); // Hide any forms after logging out
  };

  const closeForm = () => {
    setShowForm(null); // Function to close the form
  };

  return (
    <div className="banner-container">
      {/* Video background */}
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="slogan">
          <span className="slogan-line1">Your Adventure Starts Here</span>
        </h1>
        <p className="description">
          Welcome to PlanMyTrip! We help you plan your dream vacation, from start to finish, with ease and flexibility.
        </p>
        
        {/* Display login/signup buttons if not authenticated, otherwise show logout */}
        {!isAuthenticated ? (
          <div className="banner-buttons">
            <button onClick={handleLoginClick} className="btn login-btn">Login</button>
            <button onClick={handleSignupClick} className="btn signup-btn">Sign Up</button>
          </div>
        ) : (
          <button onClick={handleLogoutClick} className="logout-btn">Logout</button>
        )}
      </div>

      {/* Render login or signup form based on user selection */}
      <div className="form-container">
        {showForm === 'login' && <Login onClose={closeForm} />} {/* Pass close function */}
        {showForm === 'signup' && <Signup onClose={closeForm} />} {/* Pass close function */}
      </div>
    </div>
  );
};

export default Banner;
