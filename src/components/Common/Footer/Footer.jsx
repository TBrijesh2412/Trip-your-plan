import React, { useState } from "react";
import "../Footer/footer.css";
import { Col, Container, Row } from "react-bootstrap";
import footer1 from '../../../assets/images/icons/logo_place.png'
import footer2 from '../../../assets/images/icons/logo_email.png'
import footer3 from '../../../assets/images/icons/logo_phone.png'

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible)
  }

  return (
    <>
      <footer className="footer">
        <Container>
          {/* Company Info */}
          <Row className="text-center mt-4 footer-h">
            <Col xs={12} className="company-info">
              <h2 className="footer-title">TripPlanner</h2>
              <p className="footer-description">
                Your ultimate travel companion. Explore the world with us!
              </p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={12} sm={4} className="icons">
              <img src={footer1} className="social-icon" alt="Location" />
              <div className="info-footer">
                <h4>ADDRESS</h4>
                <p>L.J. Institute Of Engineering and Technology</p>
                <p>Ahmedabad, India</p>
              </div>
            </Col>

            <Col xs={12} sm={4} className="icons">
              <img src={footer2} className="social-icon" alt="Email" />
              <div className="info-footer">
                <h4>EMAIL</h4>
                <p>TripPlannerInfo@company.com</p>
                <p>TripPlannerSupport@company.com</p>
              </div>
            </Col>

            <Col xs={12} sm={4} className="icons">
              <img src={footer3} className="social-icon" alt="Phone" />
              <div className="info-footer">
                <h4>PHONE</h4>
                <p>+123-456-789</p>
                <p>+213-465-987</p>
              </div>
            </Col>
          </Row>

          {/* Newsletter Subscription */}
          <Row className="text-center mt-4">

            <h4>Subscribe to Our Newsletter</h4>
            <form>
              <Col xs={12} md={12}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="subscribe-btn">Subscribe</button>
              </Col>
            </form>
          </Row>
        </Container>
      </footer>
      <div id="back-top" onClick={scrollTop} className={visible ? "active" : ""}><i className="bi bi-arrow-up"></i></div>
    </>
  );
};

export default Footer;