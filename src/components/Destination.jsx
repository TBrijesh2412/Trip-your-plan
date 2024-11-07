import React from 'react';
import Navbar from './Common/Header/Header';
import { Container, Row, Col, } from "react-bootstrap";
import { popularsData } from "./utils/data";
import PopularCard from "./Cards/PopularCard";

const Destinations = () => {
  return (
    <>
      <Navbar />
      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Popular Activities </h1>
              </div>
            </Col>
          </Row>
          <Row>
            {popularsData.map((val, inx) => {
              return (
                <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                  <PopularCard val={val} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Destinations;