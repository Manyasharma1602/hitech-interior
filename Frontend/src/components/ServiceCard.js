import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../pages/Service.css'

const ServiceCard = ({ title, description, imageUrl, link}) => {
  return (
    <Card className=" h-100 text-white shadow-lg  main-card" style={{ backgroundColor:"#1a1a1a"}}>
      <Card.Img variant="top" src={imageUrl} alt={title} className="card-img-top-rounded" style={{ height: '400px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold text-lg card-title" style={{color:'#ff69b4'}}>{title}</Card.Title>
        <Card.Text className="fw-bold  flex-grow-1 card-text">
          {description}
        </Card.Text>
        <Button
          as={Link}
          to={link}
          className='mt-3 align-self-start btn-custom'
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;