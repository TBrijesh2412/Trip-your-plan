import React, { useState, useContext } from 'react';
import api from '../../api/axiosConfig'; 
import { AuthContext } from '../../api/AuthContext';
import './Signup.css'; 

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [isVisible, setIsVisible] = useState(true); // Form visibility state
    const { setIsAuthenticated } = useContext(AuthContext);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        const { username, password, email, phoneNumber } = formData;

        // Basic input validation
        if (!username || !password || !email || !phoneNumber) {
            setError('Please fill out all fields.');
            setIsLoading(false);
            return;
        }

        try {
            await api.post('signup/', { 
                username, 
                password, 
                email, 
                phone_number: phoneNumber 
            });
            setSuccess('User registered successfully!');
            setIsAuthenticated(true);
            setIsVisible(false); // Hide the form after successful signup
        } catch (err) {
            // Better error handling with response from server
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Signup failed. Please try again.');
            } else {
                setError('An error occurred. Please check your internet connection.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setIsVisible(false); // Hide the signup form
    };

    if (!isVisible) return null; // Do not render the form if not visible

    return (
        <div className="signup-container">
            <button className="close-button" onClick={handleClose} aria-label="Close Signup Form">X</button>
            <h2>Create an Account</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Signup;
