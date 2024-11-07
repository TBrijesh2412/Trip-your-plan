import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axiosConfig'; 
import { AuthContext } from '../../api/AuthContext';
import './Signup.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Added loading state
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);
    const { setIsAuthenticated } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Input validation before submitting
        if (!username || !password) {
            setError('Please fill in both username and password.');
            return;
        }

        setIsLoading(true); // Set loading to true when API request starts
        try {
            const response = await api.post('login/', { username, password });
            setIsAuthenticated(true);
            localStorage.setItem('token', response.data.token); // Assuming you get a token
            setUsername(''); // Clear input fields
            setPassword('');
            setIsLoading(false); // Stop loading when request is successful
            navigate('/'); // Redirect to home after login
        } catch (error) {
            setIsLoading(false); // Stop loading when request fails
            console.error("Login error:", error);

            // Check for network errors
            if (!error.response) {
                setError('Network error. Please try again later.');
            } else if (error.response.status === 401) {
                setError('Invalid credentials. Please try again.');
            } else if (error.response.status === 500) {
                setError('Server error. Please try again later.');
            } else {
                setError('Something went wrong. Please try again.');
            }
        }
    };

    const handleClose = () => {
        setIsVisible(false); // Hide the login form
    };

    if (!isVisible) return null;

    return (
        <div className="login-container">
            <button className="close-button" onClick={handleClose} aria-label="Close Login Form">X</button>
            <h2>Login to Your Account</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;
