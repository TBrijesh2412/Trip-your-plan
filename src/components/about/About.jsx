import React from 'react';
import Navbar from '../Common/Header/Header';
import "./About.css";
import feature1 from "../../assets/images/feature/beach.jpeg";
import feature2 from "../../assets/images/feature/deal.webp";
import feature3 from "../../assets/images/feature/location.jpeg";
import feature4 from "../../assets/images/feature/medal.jpeg";
import feature5 from "../../assets/images/feature/adventure.jpeg"; // Add new images
import feature6 from "../../assets/images/feature/Culture.webp";
import { Card, Col, Container, Row } from "react-bootstrap";
const About = () => {
  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "Discover India",
      des: "Explore over 500,000 attractions, hotels, and experiences across the country.",
    },
    {
      id: 1,
      image: feature2,
      title: "Exclusive Deals",
      des: "Find quality activities at great prices and earn credits for future bookings.",
    },
    {
      id: 2,
      image: feature3,
      title: "Seamless Booking",
      des: "Book last minute, skip lines, and enjoy free cancellations.",
    },
    {
      id: 3,
      image: feature4,
      title: "Trustworthy Travel",
      des: "Read reviews and get reliable customer support at every step.",
    },
    {
      id: 4,
      image: feature5,
      title: "Adventure Awaits",
      des: "Experience thrilling adventures from trekking in the Himalayas to scuba diving in the Andaman Sea.",
    },
    {
      id: 5,
      image: feature6,
      title: "Cultural Richness",
      des: "Immerse yourself in India's diverse culture and traditions, from festivals to local cuisines.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="feature-section">
        <Container>
          <Row>
            {featureList.map((feature) => (
              <Col md={4} sm={6} key={feature.id}>
                <Card className="feature-card">
                  <Card.Img
                    variant="top"
                    src={feature.image}
                    className="img-fluid"
                    alt={feature.title}
                  />
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.des}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;