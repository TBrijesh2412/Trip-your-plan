import React from "react";
import "../Features/features.css";

import feature1 from "../../assets/images/feature/beach-umbrella.png";
import feature2 from "../../assets/images/feature/deal.png";
import feature3 from "../../assets/images/feature/location.png";
import feature4 from "../../assets/images/feature/medal.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "Discover Endless Possibilities",
      des: "Discover countless attractions, hotels, and experiences that make travel truly unforgettable.",
    },
    {
      id: 1,
      image: feature2,
      title: "Unlock Deals and Delights",
      des: "Access amazing deals on unforgettable experiences and earn rewards to maximize your travel savings!",
    },
    {
      id: 2,
      image: feature3,
      title: "Hassle-Free Exploration",
      des: "Enjoy easy bookings, skip the queues, and take advantage of free cancellations for a stress-free adventure.",
    },
    {
      id: 3,
      image: feature4,
      title: "Trustworthy Travel Support",
      des: "Access genuine reviews and dependable customer support, ensuring you're guided at every turn on your journey.",
    },
  ];

  return (
    <section className="feature-section">
      <Container>
        <Row>
          <Col md="12">
            <Slider {...settings}>
              {featureList.map((feature, inx) => (
                <Card key={inx}>
                  <Card.Img
                    variant="top"
                    src={feature.image}
                    className="img-fluid"
                    alt={feature.title}
                  />
                  <Card.Title className="card-title">{feature.title}</Card.Title>
                  <Card.Text className="card-text">{feature.des}</Card.Text>
                </Card>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
