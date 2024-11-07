import { Container, Row, Col,  } from "react-bootstrap";
import React from 'react'
import Gallery from "./Gallery/Gallery";


const gallery = () => {
    return (
       
<>
<section className="gallery">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Photo Gallery </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
      </>
   );
}

export default gallery