import React, {useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Make sure the path is correct
import './navbar.css';

const AppNavbar = () => {

   const [activeLink, setActiveLink] = useState('home'); // Initialize with 'home' or the default active link

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
 


  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "black"}}>
      <Container>
        <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
        <img src={logo} alt='Hitech Interior Symbol' className='hitech-symbol'/>
          <span className="hitech-logo">HITECH INTERIOR</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/" className={`fw-semibold px-3 nav-link-custom ${activeLink === 'home' ? 'pink-purple-text' : 'text-white'}`}
              onClick={() => handleLinkClick('home')} >Home</Nav.Link>

            <Nav.Link as={Link} to="/services" className={`fw-semibold px-3 nav-link-custom ${activeLink === 'services' ? 'pink-purple-text' : 'text-white'}`}
              onClick={() => handleLinkClick('services')} >Services</Nav.Link>

            <Nav.Link as={Link} to="/portfolio" className={`fw-semibold px-3 nav-link-custom ${activeLink === 'portfolio' ? 'pink-purple-text' : 'text-white'}`}
              onClick={() => handleLinkClick('portfolio')}>Portfolio</Nav.Link>

            <Nav.Link as={Link} to="/about" className={`fw-semibold px-3 nav-link-custom ${activeLink === 'about' ? 'pink-purple-text' : 'text-white'}`}
              onClick={() => handleLinkClick('about')}>About Us</Nav.Link>

            <Nav.Link as={Link} to="/contact" className={`fw-semibold px-3 nav-link-custom ${activeLink === 'contact' ? 'pink-purple-text' : 'text-white'}`}
              onClick={() => handleLinkClick('contact')}>Contact Us</Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;