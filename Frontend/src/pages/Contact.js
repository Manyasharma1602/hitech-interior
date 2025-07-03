import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // 'success', 'error', 'loading'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      //const response = await fetch('http://localhost:5000/api/contact', {
      
       const response = await fetch(' https://hitech-interior.onrender.com',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        console.error('Error:', data.msg);
      }
    } catch (err) {
      setStatus('error');
      console.error('Network Error:', err);
    }
  };

const [showPopup, setShowPopup] = useState(false);
const handleWhatsAppClick = () => {
  setShowPopup(true);
  setTimeout(() => {
    window.open("https://wa.me/7454059197", "_blank"); // replace with your actual number
    setShowPopup(false);
  }, 1500);
};

const [showWhatsApp, setShowWhatsApp] = useState(false);
const handleClick = (e) => {
  e.preventDefault();

  // Optional: Form validation or submission logic here

  // Show WhatsApp popup
  setShowWhatsApp(true);

  // Redirect to WhatsApp after 1.5 seconds
  setTimeout(() => {
    window.location.href = "https://wa.me/7454059197"; // Replace with your WhatsApp number
  }, 1500);
};

  return (
    <Container fluid style={{backgroundColor: 'black'}}>
      <h2 className="text-center mb-4 fw-bold display-5 text-white heading">Contact Us</h2>
      <p className="text-center mb-5 lead text-light fw-bold" style={{fontSize: "28px"}}>
        Have a question or a project idea? Reach out to us!
      </p>

      <Row className="justify-content-center">
        <Col md={7} className="p-4 rounded-lg shadow-lg custom-form-box">
          {status === 'success' && (
            <Alert variant="success">
              ✅ Thank you! Your message has been sent successfully.
            </Alert>
          )}
          {status === 'error' && (
            <Alert variant="danger">
              ❌ Oops! Something went wrong. Please try again later.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="custom-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="custom-input"
              />
              <Form.Text className="text-light">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label className="text-white">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="custom-input "
              />
            </Form.Group>

            <Button
              type="submit"
              onClick={handleClick}
              disabled={status === 'loading'}
              className="btn-custom w-100"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
          </Form>

          {showWhatsApp && (
  <div className="whatsapp-pop">
    <img src="/whatsapp.png" alt="WhatsApp" className="whatsappicon" />
    Redirecting to WhatsApp...
  </div>
)}

        </Col>
      </Row>
      <br></br><br></br><br></br>

      <h2 className="text-center text-white mt-5 mb-4 heading">Our Process</h2><br></br>
<div className="d-flex flex-wrap justify-content-center gap-4 text-light mb-5">
  <div className="step-card text-center">
    <div className="step-circle">1</div>
    <h5 className="text-pink mt-3">Initial Consultation</h5>
    <p>We understand your needs and vision for your salon.</p>
  </div>
  <div className="step-card text-center">
    <div className="step-circle">2</div>
    <h5 className="text-pink mt-3">Design & Planning</h5>
    <p>Our designers create tailored concepts with your input.</p>
  </div>
  <div className="step-card text-center">
    <div className="step-circle">3</div>
    <h5 className="text-pink mt-3">Execution</h5>
    <p>We bring the design to life with quality and precision.</p>
  </div>
</div>

 <div className="text-center text-white mt-5">
  <h3 className="mb-3">Ready to transform your salon space?</h3>
   <button
  className="btn btn-pink mt-4"
  onClick={handleWhatsAppClick}
  style={{
    background: 'linear-gradient(to right, #ff69b4, #800080)',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
>
  Book a Free Consultation
</button>
  </div>   
             
 <br></br><br></br>

 {showPopup && (
  <div style={{
    position: 'fixed',
    bottom: '80px',
    right: '30px',
    backgroundColor: '#25D366',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    animation: 'fadeIn 0.3s ease',
  }}>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      style={{ width: '28px', height: '28px' }}
    />
    <span style={{ fontWeight: 'bold' }}>Redirecting to WhatsApp...</span>
  </div>
)}

 </Container>
  );
};

export default Contact;