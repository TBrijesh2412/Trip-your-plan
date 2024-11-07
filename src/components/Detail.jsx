import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../api/axiosConfig"; // Import the configured Axios instance
import "../components/Cards/card.css";

const Detail = ({ destinations }) => {
  const { id } = useParams(); // Get the ID from the URL
  const destination = destinations.find(dest => dest.id === parseInt(id)); // Find the destination by ID

  if (!destination) {
    return <div>Destination not found!</div>;
  }

  const handleSave = async () => {
    try {
      const response = await api.post('save-destination/', {
        title: destination.title,
        location: destination.location,
        days: parseInt(destination.days),  // Convert to integer
        price: parseFloat(destination.price), // Convert to float for price
        after_discount: parseFloat(destination.afterDiscount), // Convert to float for after_discount
        rating: parseFloat(destination.rating), // Convert to float for rating
        reviews: parseInt(destination.reviews), // Convert to integer
      });
      alert(response.data.message); // Alert the success message from the response
    } catch (error) {
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        alert(`Error: ${error.response.data}`);
      } else if (error.request) {
        console.error("Request data:", error.request);
        alert("No response from the server.");
      } else {
        console.error("Error message:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };
  

  return (
    <div className="detail-container">
      <Card>
        <Card.Img
          variant="top"
          src={destination.image} // Display the image from the destination
          className="img-fluid"
          alt={destination.title} // Alt text for the image
        />
        <Card.Body id='card'>
          <Card.Title>{destination.title}</Card.Title>
          <Card.Text>
            <strong>Location:</strong> {destination.location}
          </Card.Text>
          <Card.Text>
            <strong>Days:</strong> {destination.days}
          </Card.Text>
          <Card.Text>
            <strong>Price:</strong> ₹{destination.price}
          </Card.Text>
          <Card.Text>
            <strong>After Discount:</strong> ₹{destination.afterDiscount}
          </Card.Text>
          <Card.Text>
            <strong>Rating:</strong> {destination.rating} stars ({destination.reviews} reviews)
          </Card.Text>
          <Button variant="primary" onClick={handleSave}>
            Save Destination
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
