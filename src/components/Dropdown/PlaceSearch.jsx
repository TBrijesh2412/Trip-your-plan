// src/components/CustomDropdown/CustomDropdown.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './PlaceSearch.css'; // Correct relative import

const CustomDropdown = ({ options, onSelect }) => {
  return (
    <div className="dropdown-container">
      <ul className="dropdown-list">
        {options.length > 0 ? (
          options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => onSelect(option)}
            >
              {option}
            </li>
          ))
        ) : (
          <li className="dropdown-item">No suggestions</li>
        )}
      </ul>
    </div>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CustomDropdown;