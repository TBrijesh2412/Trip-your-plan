// src/components/LoginPopup.js

import React, { useState, useContext } from 'react';
import { AuthContext } from '../api/AuthContext'; // Import AuthContext
import axios from 'axios';
import './LoginPopup.css'; // Style your popup

const LoginPopup = ({ onLoginSuccess, onCancel }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated } = useContext(AuthContext); // Access setIsAuthenticated from context

    const handleLogin = async (e) => {
        e.preventDefault();
        // Example of handling login, replace with your actual API call
        try {
            // Make your API call here for authentication
            const response = await axios.post('http://localhost:8000/api/login/', { username, password });
            const { token } = response.data; // Assuming the API returns a token

            // Save token to localStorage and update authentication state
            localStorage.setItem('token', token);
            setIsAuthenticated(true); // Set user as authenticated
            onLoginSuccess(); // Notify parent component to close popup
        } catch (error) {
            console.error("Login failed:", error);
            // Handle login error (e.g., show an error message)
        }
    };

    return (
        <div className="login-popup">
            <div className="login-popup-content">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Login</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
