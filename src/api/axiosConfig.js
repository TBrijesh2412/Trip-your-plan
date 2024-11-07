// src/api/axiosConfig.js

import axios from 'axios';

// Set the base URL for your API
const api = axios.create({
    baseURL: 'http://localhost:8000/api/', // Change this to your Django server URL
});

// You can add interceptors or other configurations here if needed
api.interceptors.request.use(
    (config) => {
        // Add any authorization token if needed
        const token = localStorage.getItem('access');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
