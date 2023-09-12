import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
      <footer className="mt-5 container-fluid fixed-bottom bg-primary d-flex align-items-center" >
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; {new Date().getFullYear()} Your Company Name</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;
  

