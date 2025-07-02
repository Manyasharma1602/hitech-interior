
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';
import './Service.css';

import salonImg from '../assets/salon.jpg';
import kitchenImg from '../assets/kitchen.jpg'
import bedroom1 from '../assets/bedroom1.jpeg';
import livingroomImg from '../assets/livingroom.webp';
import diningroomImg from '../assets/diningroom.jpg';
import terraceImg from '../assets/terrace.webp'

const Services = () => {
  const services = [
    {
      title: 'salon',
      description: 'Luxirious and inviting salon designs, perfect for beauty, relaxation, and client comfort.',
      imageUrl: salonImg,
      link: '/services/salon'
    },
    {
      title: 'Kitchen',
      description: 'Modern and functional kitchen designs, that blend aesthetics with efficiency. We create culinary spaces that inspire.',
      imageUrl: kitchenImg,
      link: '/services/kitchen'
    },
    {
      title: 'Bedroom',
      description: 'Cozy and comfortable bedroom spaces designed for ultimate relaxation and style. Your personal retreat awaits.',
      imageUrl: bedroom1,
      link: '/services/bedroom'
    },
    {
      title: 'Living Room',
      description: 'Stylish and inviting living areas, perfect for family gatherings and entertaining. Designed for comfort and elegance.',
      imageUrl: livingroomImg,
      link: '/services/livingroom'
    },
    {
      title: 'Terrace',
      description: 'Transforming outdoor spaces into serene retreats and vibrant entertaining areas.',
      imageUrl: terraceImg,
      link: '/services/terrace'
    },
    {
      title: 'Dining Room',
      description: 'Elegant and functional dining spaces, crafted for memorable dining experiences. Where designs meets delightful meals.',
      imageUrl: diningroomImg,
      link: '/services/diningroom'
    }
  ];

  return (
    <div className="py-5" style={{ backgroundColor: 'black' }}>
      <Container>
        <h2 className="text-center mb-4 display-4 fw-bold service-heading">INTERIOR DESIGNER</h2>
        <br /><br />
        <p className="text-center mb-3 px-3 service-description" style={{ color: '#f0f0f0', maxWidth: '800px', margin:'0 auto' }}>At HiTech Interiors, we believe that design is not just about looks—it's about function and feeling. Our team of experienced interior designers transforms spaces into beautiful, purposeful environments tailored to your style. From luxurious salons to cozy bedrooms and modern living spaces, we create interiors that elevate everyday living.
        </p>
        <br></br>
        <Row xs={1} md={2} className="gy-4"> {/* g-4 for gutter spacing */}
          {services.map((service, index) => (
            <Col key={index} className="mb-4">
              <ServiceCard {...service} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;