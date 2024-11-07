import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import PlaceSearch from "../Dropdown/PlaceSearch";
import axios from "axios";

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [locations, setLocations] = useState([]);
  const [locationInput, setLocationInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [placeError, setPlaceError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocationSuggestions = async () => {
      if (locationInput.length >= 2) {
        setIsLoading(true);
        try {
          const response = await axios.get("http://localhost:8000/api/location-suggestions/", {
            params: { query: locationInput },
          });
          if (response.data.suggestedLocations) {
            const newLocations = response.data.suggestedLocations.map((loc) => ({
              address: loc.placeAddress,
              latitude: loc.latitude,
              longitude: loc.longitude,
            }));
            setLocations(newLocations);
          } else {
            setLocations([]);
          }
        } catch (error) {
          console.error(
            "Error fetching location suggestions:",
            error.response ? error.response.data : error.message
          );
        } finally {
          setIsLoading(false);
        }
      } else {
        setLocations([]);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchLocationSuggestions();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [locationInput]);

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);

    // If the selected endDate is before the new startDate, reset endDate to null
    if (endDate && date >= endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSearch = () => {
    if (!selectedLocation) {
      console.error("No location selected");
      return;
    }

    navigate("/search-results", {
      state: {
        selectedCoordinates,
        cityname: selectedLocation,
      },
    });
  };

  const selectLocation = (description, coordinates) => {
    setLocationInput(description);
    setSelectedLocation(description);
    setSelectedCoordinates(coordinates);
    setLocations([]);
    setPlaceError("");
  };

  return (
    <section className="box-search-advance">
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <div className="box-search shadow-sm">
              <div className="item-search">
                <label className="item-search-label">Location</label>
                <input
                  type="text"
                  value={locationInput}
                  onChange={handleLocationChange}
                  placeholder="Enter location"
                  className="form-control"
                />
                {isLoading && <p>Loading...</p>}
                {locations.length > 0 && (
                  <PlaceSearch
                    label="Location"
                    onSelect={(description) =>
                      selectLocation(description, {
                        latitude: locations.find((loc) => loc.address === description)?.latitude,
                        longitude: locations.find((loc) => loc.address === description)?.longitude,
                      })
                    }
                    options={locations.map((loc) => loc.address)}
                  />
                )}
              </div>
              <div className="item-search item-search-2">
                <label className="item-search-label">Check In</label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()} // Prevent past dates
                  dateFormat="dd, MMMM, yyyy"
                />
              </div>
              <div className="item-search item-search-2">
                <label className="item-search-label">Check Out</label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate ? startDate : new Date()} // Ensure checkout date is after check-in
                  dateFormat="dd, MMMM, yyyy"
                  placeholderText="Select Check Out Date"
                />
              </div>
              <div className="item-search bd-none">
                <Button
                  className="primaryBtn flex-even d-flex justify-content-center"
                  onClick={handleSearch}
                >
                  <i className="bi bi-search me-2"></i> Search
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdvanceSearch;
