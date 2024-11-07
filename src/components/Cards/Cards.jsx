import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "../Cards/card.css";
import { NavLink } from "react-router-dom";

const Cards = ({ destination }) => {
  const [showModal, setShowModal] = useState(false); // Manage modal state

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="img-box">
        <NavLink className="body-text text-dark text-decoration-none" to="/">
          <Card>
            <Card.Img
              variant="top"
              src={destination.image}
              className="img-fluid"
              alt={destination.name}
              style={{ height: "400px", objectFit: "cover" }}
              onClick={handleShow} // Open modal on image click
            />
            <Card.Title>{destination.title}</Card.Title>
          </Card>
        </NavLink>
      </div>

      {/* Modal for Lightbox Effect */}
      <Modal show={showModal} onHide={handleClose} centered className="custom-modal-width">
        <Modal.Body>
          {/* Modal Title */}
          <h1 className="text-center">{destination.title}</h1>

          {/* Image and Text in Flexbox */}
          <div className="modal-content-wrapper">
            {/* Left Side Image */}
            <div className="modal-image">
              <img
                src={destination.image}
                alt={destination.title}
                className="img-fluid"
                style={{ maxHeight: "60vh", maxWidth: "100%", objectFit: "contain" }} // Responsive image
              />
            </div>

            {/* Right Side Text Section */}
            <div className="modal-description">
              <p><strong>Location:</strong> {destination.location}</p>
              <p><strong>Category:</strong> {destination.category}</p>
              <br />
              <p>{destination.des1}</p>
              <p>{destination.des2}</p>
              <p>{destination.des3}</p>
              <p>{destination.des4}</p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cards;
