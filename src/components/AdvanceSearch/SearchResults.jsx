import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../SearchResults/searchResults.css";

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Assuming search results are passed via location.state from the AdvanceSearch component
  const { searchResults } = location.state || { searchResults: [] };

  const handleItemClick = (item) => {
    navigate(`/booking/${item.id}`, {
      state: {
        itemDetails: item,
      },
    });
  };

  return (
    <div className="search-results-container">
      {searchResults.length > 0 ? (
        searchResults.map((item) => (
          <div 
            className="search-result-item" 
            key={item.id} 
            onClick={() => handleItemClick(item)}
          >
            <h4>{item.name}</h4>
            <p>{item.address}</p>
            <p>{item.type}</p>
            {/* Add any other relevant details */}
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
