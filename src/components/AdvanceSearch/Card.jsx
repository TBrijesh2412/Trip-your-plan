import React from 'react';
import './Card.css';

const Card = ({ name, image, description }) => {
  return (
    <div className="Custom-cards">
      <img src={image} alt={name} className="Custom-cards-image" />
      <div className="Custom-cards-content">
        <h3 className="Custom-cards-title">{name}</h3>
        <p className="Custom-cards-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
