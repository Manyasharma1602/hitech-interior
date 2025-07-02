import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './ServiceDetail.css'

// Import all your service images
import salonImg from '../assets/salon.jpg';
import salon7 from '../assets/salon7.jpg';
import salon8 from '../assets/salon8.jpg';
import terraceImg from '../assets/terrace.webp';
import terrace1 from '../assets/terrace1.webp';
import terrace2 from '../assets/terrace2.jpg';
import bedroomImg from '../assets/bedroom.jpg';
import livingroomImg from '../assets/livingroom.webp';
import livingroom1 from '../assets/livingroom1.jpeg';
import livingroom2 from '../assets/livingroom2.jpeg'
import diningroomImg from '../assets/diningroom.jpg';
import diningroom1 from '../assets/diningroom1.jpg';
import diningroom2 from '../assets/diningroom2.jpeg';
import kitchenImg from '../assets/kitchen.jpg';
import KitchenImg1 from '../assets/kitchen1.jpg';
import KitchenImg2 from '../assets/kitchen2.jpg';
import bedroom1 from '../assets/bedroom1.jpeg';
import bedroom2 from '../assets/bedroom2.jpeg';

// Define a mapping of service names to their details
// In a real application, this data would ideally come from your backend API
const serviceDetailsData = {

   salon: {
    title: 'Chic Salon Interior Design',
    description: 'Designing salons that exude sophistication, comfort, and functionality. We create spaces that enhance the client experience and optimize workflow for beauty professionals. From elegant reception areas to functional styling stations, every detail is crafted to elevate your brand.',
    image: salonImg,
    features: [
      'Custom Styling Stations & Seating',
      'Optimized Lighting for Beauty Services',
      'Luxurious Waiting Areas',
      'Efficient Storage Solutions',
      'Brand-Consistent Aesthetics'
    ],
    projectHighlights: [
      { name: 'Modern Glam Salon', description: 'Sleek lines, metallic accents, and plush seating for a high-end feel.', image: salon7 },
      { name: 'Urban Barber Shop', description: 'Industrial elements combined with classic touches for a masculine, trendy space.', image: salon8 }
    ]
  },


  kitchen: {
    title: 'Modern Kitchen Design',
    description: 'Our kitchen designs blend functionality with aesthetic appeal, creating spaces that are perfect for cooking, entertaining, and family gatherings. We focus on optimizing layouts, selecting durable materials, and integrating smart storage solutions. From minimalist modern to warm traditional, we bring your dream kitchen to life.',
    image: kitchenImg,
    features: [
      'Custom Cabinetry & Storage Solutions',
      'Ergonomic Layout Planning',
      'Premium Countertop Materials (Granite, Quartz, Marble)',
      'Integrated Appliance Solutions',
      'Smart Lighting & Ventilation'
    ],
    projectHighlights: [
      { name: 'Sleek & Minimalist', description: 'A highly functional kitchen featuring handleless cabinets and integrated appliances.', image: KitchenImg1 },
      { name: 'Family-Centric Island', description: 'A large island with seating, perfect for breakfast and casual meals.', image: KitchenImg2 }
    ]
  },

  bedroom: {
    title: 'Serene Bedroom Interiors',
    description: 'We design bedrooms that are sanctuaries of comfort and tranquility. Our approach considers lighting, color palettes, and furniture arrangement to create a personal retreat that promotes relaxation and well-being. Whether you prefer a luxurious master suite or a cozy guest room, we tailor every detail to your comfort.',
    image: bedroom1,
    features: [
      'Personalized Color Schemes & Textures',
      'Custom Wardrobes & Storage',
      'Ambient & Task Lighting Design',
      'Comfort-Focused Furniture Selection',
      'Soundproofing Solutions (Optional)'
    ],
    projectHighlights: [
      { name: 'Minimalist Zen Retreat', description: 'Clean lines, natural materials, and calming colors for ultimate relaxation.', image: bedroomImg },
      { name: 'Luxurious Master Suite', description: 'Plush textures, statement lighting, and custom-built-ins for opulence.', image: bedroom2 }
    ]
  },

  livingroom: {
    title: 'Elegant Living Room Spaces',
    description: 'The living room is the heart of your home, and we design it to be both inviting and impressive. We focus on creating versatile spaces for relaxation, entertainment, and social gatherings. Our designs optimize flow, seating arrangements, and focal points to create a harmonious and stylish environment.',
    image: livingroomImg,
    features: [
      'Spacious Seating Arrangements',
      'Entertainment Unit Integration',
      'Statement Lighting & Decor',
      'Accent Walls & Feature Elements',
      'Flow & Spatial Optimization'
    ],
    projectHighlights: [
      { name: 'Contemporary & Open', description: 'A large open-plan living area with modern furniture and bold art.', image: livingroom1 },
      { name: 'Cozy & Hygge Inspired', description: 'Warm textures, soft lighting, and comfortable seating for a cozy feel.', image: livingroom2 }
    ]
  },

  terrace: {
    title: 'Exquisite Terrace & Balcony Design',
    description: 'Transforming outdoor spaces into extensions of your home. Whether it’s a cozy balcony or a sprawling terrace, we design areas for relaxation, entertaining, and enjoying nature. We integrate suitable furniture, lush greenery, ambient lighting, and durable flooring to create your perfect outdoor oasis.',
    image: terraceImg,
    features: [
      'Custom Outdoor Furniture Selection',
      'Landscaping & Greenery Integration',
      'Ambient & Task Outdoor Lighting',
      'Weather-Resistant Flooring & Materials',
      'Shading Solutions (Pergolas, Awnings)'
    ],
    projectHighlights: [
      { name: 'Rooftop Lounge', description: 'A sophisticated terrace lounge with comfortable seating and city views.', image: terrace1 },
      { name: 'Vertical Garden Balcony', description: 'A small balcony maximized with a stunning vertical garden and seating nook.', image: terrace2 }
    ]
  },


  diningroom: {
    title: 'Sophisticated Dining Room Design',
    description: 'Our dining room designs are crafted to enhance your dining experience, making every meal a special occasion. We consider table size, chair comfort, lighting, and storage to create a space that is both elegant and practical for intimate dinners or large celebrations. ',
    image: diningroomImg,
    features: [
      'Custom Dining Table & Chair Selection',
      'Statement Chandeliers & Lighting',
      'Buffet & Storage Solutions',
      'Ambiance & Mood Setting',
      'Wall Art & Decor Integration'
    ],
    projectHighlights: [
      { name: 'Formal & Grand', description: 'A spacious dining room with a large antique table and crystal chandelier.', image: diningroom1},
      { name: 'Casual & Bright', description: 'A bright, airy dining space with a wooden table and minimalist decor.', image: diningroom2 }
    ]
  },
};

const ServiceDetail = () => {
  // useParams hook gets URL parameters (e.g., 'kitchen' from /services/kitchen)
  const { serviceName } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // Convert the URL parameter to lowercase to match our data keys
    const formattedServiceName = serviceName ? serviceName.toLowerCase() : '';
    setService(serviceDetailsData[formattedServiceName]);
  }, [serviceName]); // Re-run effect if serviceName changes

  if (!service) {
    // If service data is not found, display a 404-like message or redirect
    return (
      <Container className="py-5 text-center text-white">
        <h2 className="gradient-text">Service Not Found</h2>
        <p className="lead text-white-75">The service you are looking for does not exist.</p>
        <Button as={Link} to="/services" className="btn-gradient mt-3">
          Back to Services
        </Button>
      </Container>
    );
  }

  return (
    <div className="py-5" style={{backgroundColor: 'black'}}>
      <Container>
        {/* Service Title and Image */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={10}>
            <h1 className="display-4 fw-bold gradient-text mb-4 main-title">{service.title}</h1> <br></br><br></br>
            <Image
              src={service.image}
              fluid
              rounded
              className="shadow-lg main-img"
              alt={service.title}
              style={{ maxHeight: '600px', objectFit: 'cover', width: '100%' }}
            />
          </Col>
        </Row>

        {/* Description */}
        <Row className="justify-content-center mb-5">
          <Col md={8} className="dark-gradient-bg p-4 rounded shadow-lg over-box">
            <h3 className="gradient-text mb-3 over-heading">Overview :</h3>
            <p className="text-white-75 service-description">{service.description}</p>
          </Col>
        </Row>

        {/* Key Features */}
        {service.features && service.features.length > 0 && (
          <Row className="justify-content-center mb-5">
            <Col md={8} className="dark-gradient-bg p-4 rounded shadow-lg feature-box">
              <h3 className="gradient-text mb-3 key-heading">Key Features of Our Design :</h3>
              <ul className="text-white-75 list-unstyled">
                {service.features.map((feature, index) => (
                  <li key={index} className="mb-2 key-list">
                    <i className="bi bi-check-circle-fill text-info me-2"></i> {feature}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        )}

        {/* Project Highlights (if available) */}
        {service.projectHighlights && service.projectHighlights.length > 0 && (
          <Row className="justify-content-center mb-5">
            <Col md={10}>
              <h3 className="text-center gradient-text mb-4 project-high">Project Highlights</h3><br></br>
              <Row xs={1} md={2} className="g-4">
                {service.projectHighlights.map((project, index) => (
                  <Col key={index}>
                    <div className="dark-gradient-bg p-3 rounded shadow-lg h-100 text-center main-card">
                      <Image src={project.image} fluid rounded className="mb-3 img" alt={project.name} style={{ height: '400px', objectFit: 'cover', width: '100%' }} />
                      <h5 className="gradient-text img-heading">{project.name}</h5><br></br>
                      <p className="text-white-75 img-text">{project.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}
        <br></br><br></br><br></br>

        {/* Call to Action */}
        <Row className="justify-content-center text-center">
          <Col md={10}>
            <h3 className="gradient-text mb-3 btn-heading">Ready to Start Your Project?</h3>
            <p className="lead text-white-75 mb-4 btn-para">
              Get a personalized consultation for your {service.title} project today!
            </p>
            <Button
              as={Link}
              to="/contact" // Link to your contact page
              className="btn-lg btn-gradient btn-custom"
            >
              Request a Consultation
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;