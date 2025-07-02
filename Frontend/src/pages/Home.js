import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-background text-center">
      <Container>
        <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
          <Col md={8}>
            <h1 className="display-3 fw-bold" style={{color:"#A99A9A9"}}>HITECH INTERIOR</h1>
            <p className="lead fw-bold" style={{color:"white", marginTop:"1 rem"}}>Works with every budget</p>
            <p className="mt-4">
              <Button as={Link} to="/services" className="text-black fw-bold" style={{background: "white", border: '2px solid white'}}>
                Explore Services
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;