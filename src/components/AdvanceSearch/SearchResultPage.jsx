import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axiosConfig.js"; // Import your axiosConfig
import Card from "./Card.jsx";
import './SearchResults.css';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const SearchResults = () => {
  const { state } = useLocation();
  const { selectedCoordinates, cityname } = state;

  const [restaurants, setRestaurants] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [places, setPlaces] = useState([]);
  const [restaurantImages, setRestaurantImages] = useState([]);
  const [hotelImages, setHotelImages] = useState([]);
  const [isLoading, setIsLoading] = useState({
    restaurants: true,
    hotels: true,
    places: true,
  });

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("restaurant-search/", {
          params: {
            latitude: selectedCoordinates.latitude,
            longitude: selectedCoordinates.longitude,
          },
        });
        setRestaurants(response.data.restaurants.slice(0, 10) || []);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setIsLoading((prev) => ({ ...prev, restaurants: false }));
      }
    };

    const fetchHotels = async () => {
      try {
        const response = await axios.get("nearby-hotels/", {
          params: {
            latitude: selectedCoordinates.latitude,
            longitude: selectedCoordinates.longitude,
          },
        });
        setHotels(response.data.hotels.slice(0, 10) || []);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setIsLoading((prev) => ({ ...prev, hotels: false }));
      }
    };

    const fetchPlaces = async () => {
      try {
        const response = await axios.get("nearby-places/", {
          params: {
            latitude: selectedCoordinates.latitude,
            longitude: selectedCoordinates.longitude,
          },
        });
        setPlaces(response.data.places || []);
      } catch (error) {
        console.error("Error fetching places:", error);
      } finally {
        setIsLoading((prev) => ({ ...prev, places: false }));
      }
    };

    fetchRestaurants();
    fetchHotels();
    fetchPlaces();
  }, [selectedCoordinates]);

  useEffect(() => {
    const fetchRestaurantImages = async () => {
      try {
        const response = await axios.get("restaurant/"); // Endpoint for fetching restaurant images
        let images = response.data.map(restaurant => restaurant.image) || [];
        images = shuffleArray(images); // Shuffle images
        setRestaurantImages(images.slice(0, 10)); // Take only 10 images
      } catch (error) {
        console.error("Error fetching restaurant images:", error);
      }
    };
    
    const fetchHotelImages = async () => {
      try {
        const response = await axios.get("hotel/"); // Endpoint for fetching hotel images
        let images = response.data.map(hotel => hotel.image) || [];
        images = shuffleArray(images); // Shuffle images
        setHotelImages(images.slice(0, 10)); // Take only 10 images
      } catch (error) {
        console.error("Error fetching hotel images:", error);
      }    
    };

    if (restaurants.length > 0) {
      fetchRestaurantImages();
    }
    if (hotels.length > 0) {
      fetchHotelImages();
    }
  }, [restaurants, hotels]);

  return (
    <div className="search-results-container">
      <h1 className="search-results-header">Search Results</h1>

      <h2 className="search-results-subheader">Restaurants of {cityname}</h2>
      {isLoading.restaurants ? (
        <p className="loading-text">Loading restaurants...</p>
      ) : (
        <div className="search-results-card-container">
          {restaurants.map((restaurant, index) => (
            <Card
              key={index}
              name={restaurant.name}
              image={restaurantImages[index]} // Use the image from the array
              description={restaurant.address} // Make sure this field exists
            />
          ))}
        </div>
      )}
      
      <h2 className="search-results-subheader">Hotels of {cityname}</h2>
      {isLoading.hotels ? (
        <p className="loading-text">Loading hotels...</p>
      ) : (
        <div className="search-results-card-container">
          {hotels.map((hotel, index) => (
            <Card
              key={index}
              name={hotel.name.split(", ", 2)[0]} // Hotel name
              description={hotel.name.split(", ", 2)[1]} // Address
              image={hotelImages[index]} // Use the image from the array
            />
          ))}
        </div>
      )}

      <h2 className="search-results-subheader">Places of {cityname}</h2>
      {isLoading.places ? (
        <p className="loading-text">Loading places...</p>
      ) : (
        <div className="search-results-card-container">
          {places.map((place, index) => (
            <Card
              key={index}
              name={place.name} // Make sure this field exists
              image={place.image_url} // Make sure this field exists
              description={place.distance} // Make sure this field exists
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
