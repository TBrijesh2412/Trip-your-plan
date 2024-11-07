import React from "react";
import Footer from "./Common/Footer/Footer";
import Navbar from "./Common/Header/Header";
import "./Contact.css"; // Import the CSS file

export default function Contact() {
  return (
    <>
      <Navbar />
      {/* Centering the form between Navbar and Footer */}
      <div className="contact-container">
        <div className="form-card">
          <form action="#" className="form-content">
            <span className="form-title">GET IN TOUCH</span>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="form-input"
                placeholder="Phone Number"
              />
            </div>
            <input
              type="email"
              className="form-input-full"
              placeholder="Email"
            />
            <textarea
              name="message"
              rows="5"
              className="form-input-full"
              placeholder="Message"
            />
            <button className="form-button">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </>
  );
}