import React, { useState, useEffect } from 'react';
import './RegistrationForm.css'; 
import api from '../api/axiosConfig';

const RegistrationForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numGuests, setNumGuests] = useState(1);
    const [numRooms, setNumRooms] = useState(1);
    const [roomType, setRoomType] = useState('');
    const [guestDetails, setGuestDetails] = useState([{ name: '', age: '' }]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        setGuestDetails((prev) => {
            if (numGuests > prev.length) {
                return [...prev, { name: '', age: '' }];
            } else if (numGuests < prev.length) {
                return prev.slice(0, numGuests);
            }
            return prev;
        });
    }, [numGuests]);

    const handleGuestChange = (index, field, value) => {
        const newGuestDetails = [...guestDetails];
        newGuestDetails[index][field] = value;
        setGuestDetails(newGuestDetails);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);

        if (checkIn < new Date(today)) {
            setErrorMessage('Check-in date cannot be in the past.');
            setLoading(false);
            return;
        }

        if (checkOut <= checkIn) {
            setErrorMessage('Check-out date must be after check-in date.');
            setLoading(false);
            return;
        }

        const bookingDetails = {
            name,
            email,
            phone_number: phone,  // Ensure field names match the serializer
            check_in_date: new Date(checkInDate).toISOString().split('T')[0],  // If required by the backend
            check_out_date: new Date(checkOutDate).toISOString().split('T')[0],
            num_guests: numGuests,
            num_rooms: numRooms,
            room_type: roomType,
            guest_details: guestDetails
        };
        try {
            const response = await api.post('/register/', bookingDetails);
            setSuccessMessage('Booking submitted successfully!'); // Success message
            console.log('Booking submitted:', response.data);
            onClose(); 
        } catch (error) {
            console.error('There was an error submitting the booking!', error);
            setErrorMessage('Failed to submit booking. Please try again.');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="registration-form-overlay">
            <div className="registration-form-container">
                <h2>Book a Room</h2>
                <form onSubmit={handleSubmit}>
                    {/* Input fields */}
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Phone:
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </label>
                    <label>
                        Check-in Date:
                        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} min={today} required />
                    </label>
                    <label>
                        Check-out Date:
                        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} min={checkInDate} required />
                    </label>
                    <label>
                        Number of Guests:
                        <input type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} min="1" required />
                    </label>
                    <label>
                        Number of Rooms:
                        <input type="number" value={numRooms} onChange={(e) => setNumRooms(e.target.value)} min="1" required />
                    </label>
                    <label>
                        Room Type:
                        <select value={roomType} onChange={(e) => setRoomType(e.target.value)} required>
                            <option value="">Select Room Type</option>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                        </select>
                    </label>

                    {/* Guest Details Section */}
                    {guestDetails.map((guest, index) => (
                        <div key={index} className="guest-detail">
                            <label>
                                {`Guest ${index + 1} Name:`}
                                <input type="text" value={guest.name} onChange={(e) => handleGuestChange(index, 'name', e.target.value)} required />
                            </label>
                            <label>
                                {`Guest ${index + 1} Age:`}
                                <input type="number" value={guest.age} onChange={(e) => handleGuestChange(index, 'age', e.target.value)} min="0" required />
                            </label>
                        </div>
                    ))}

                    <button type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Register'}
                    </button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default RegistrationForm;
