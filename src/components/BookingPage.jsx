import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import "../BookingPage/bookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const { itemDetails } = location.state || {};

  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleBooking = () => {
    // Handle the booking logic here
    console.log(`Booking ${itemDetails.name} for ${guests} guests from ${checkInDate} to ${checkOutDate}`);
  };

  return (
    <div className="booking-page">
      {itemDetails ? (
        <div>
          <h1>{itemDetails.name}</h1>
          <p>{itemDetails.address}</p>
          <p>{itemDetails.type}</p>
          
          {/* Booking form */}
          <div className="booking-form">
            <label>
              Number of Guests:
              <input 
                type="number" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                min="1" 
              />
            </label>

            <label>
              Check-In Date:
              <input 
                type="date" 
                value={checkInDate} 
                onChange={(e) => setCheckInDate(e.target.value)} 
              />
            </label>

            <label>
              Check-Out Date:
              <input 
                type="date" 
                value={checkOutDate} 
                onChange={(e) => setCheckOutDate(e.target.value)} 
              />
            </label>

            <button onClick={handleBooking}>Book Now</button>
          </div>
        </div>
      ) : (
        <p>No details available.</p>
      )}
    </div>
  );
};

export default BookingPage;
