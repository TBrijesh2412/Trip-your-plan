// src/components/HotelList.js

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './HotelList.css';  // Import the CSS file
import RegistrationForm from './RegistrationForm'; // Import the registration form component
import LoginPopup from './LoginPopup'; // Import LoginPopup component
import { AuthContext } from '../api/AuthContext'; // Import AuthContext

const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false); // Track login popup visibility
    const { isAuthenticated } = useContext(AuthContext); // Access authentication state

    useEffect(() => {
        const fetchHotels = async () => {
            const response = await axios.get('http://localhost:8000/api/hotels/');
            setHotels(response.data);
        };
        fetchHotels();
    }, []);

    const handleBookButtonClick = (hotel) => {
        if (!isAuthenticated) {
            setIsLoginPopupVisible(true); // Show login popup if not authenticated
        } else {
            setSelectedHotel(hotel);
            setIsFormVisible(true); // Proceed to show the booking form
        }
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
        setSelectedHotel(null);
    };

    const handleLoginSuccess = () => {
        setIsLoginPopupVisible(false); // Close login popup on successful login
    };

    return (
        <div className="hotel-list-container">
            <h1 className="hotel-list-title">Hotel Listings</h1>
            <div className="hotel-list">
                {hotels.map((hotel) => (
                    <div className="hotel-card" key={hotel.id}>
                        <img src={hotel.image} alt={hotel.hotel_name} className="hotel-image" />
                        <div className="hotel-details">
                            <p className="hotel-name">Name : {hotel.hotel_name}</p>
                            <p className="hotel-description">Description : {hotel.description}</p>
                            <p className="hotel-price">Price: <span>₹{hotel.price_per_night}</span> per night</p>
                            <p className="hotel-location">Location: {hotel.location}</p>
                            <p className="hotel-availability">Available Rooms: {hotel.room_availability}</p>
                            <button onClick={() => handleBookButtonClick(hotel)}>Book</button>
                        </div>
                    </div>
                ))}
            </div>
            {isFormVisible && <RegistrationForm onClose={handleCloseForm} />}
            {isLoginPopupVisible && <LoginPopup onLoginSuccess={handleLoginSuccess} onCancel={() => setIsLoginPopupVisible(false)} />}
        </div>
    );
};

export default HotelList;
