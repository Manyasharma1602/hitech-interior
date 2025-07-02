import React from 'react';
import './about.css';
import SalonDesign1 from '../assets/salon1.jpg';
import SalonDesign2 from '../assets/salon2.jpg';
import SalonDesign3 from '../assets/salon3.jpg';
import SalonDesign4 from '../assets/salon4.jpg';
import SalonDesign5 from '../assets/salon5.jpg';
import SalonDesign6 from '../assets/salon6.webp';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-heading">Salon Experts</h1>
        <p className="about-subtext">
          We specialize in crafting premium salon interiors that combine luxury, comfort, and functionality.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>About Our Salon Interior Expertise</h2>
          <p className='about-description'>
            With over 8+ years of experience, our team has transformed more than 300 salons across India. 
            From elegant hair studios to high-end beauty parlors, we understand how to blend aesthetics with utility.
            Our designers ensure every corner of your salon reflects professionalism and sophistication —
            giving your clients an unforgettable experience the moment they walk in.

            HiTech Interior is a leading interior design company specializing in luxurious and 
            functional salon spaces. With over a decade of experience, we have transformed salons, 
            spas, and grooming studios into modern and elegant environments that attract and retain
             clients. Our expert team focuses on combining aesthetics with practicality, using premium 
             materials and innovative layouts to deliver world-class salon interiors.
              Whether it's a small makeover or a full-scale setup, HiTech Interior is committed to
               delivering personalized designs that reflect your brand and elevate your business
                presence.

          </p>
        </div>

        <div className="about-gallery">
          <img src={SalonDesign1} alt="Salon Design 1" />
          <img src={SalonDesign2} alt="Salon Design 2" />
          <img src={SalonDesign3} alt="Salon Design 3" />
          <img src={SalonDesign4} alt="Salon Design 4" />
          <img src={SalonDesign5} alt="Salon Design 5" />
          <img src={SalonDesign6} alt="Salon Design 6" />
        </div>
        </section>

        
        <section className="footer-info-section">
  <div className="footer-columns">
    <div className="footer-column">
      <h4>Company</h4>
      <ul>
        <li>About HiTech Interior</li>
        <li>Why Choose Us</li>
        <li>Our Team</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Salon Design Services</h4>
      <ul>
        <li>Luxury Salon Interiors</li>
        <li>Hair Studio Setup</li>
        <li>Beauty Spa Design</li>
        <li>Barber Shop Interiors</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Client Support</h4>
      <ul>
        <li>Project Consultation</li>
        <li>Custom Design Packages</li>
        <li>Warranty & Maintenance</li>
        <li>FAQs</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Client Reviews</li>
        <li>Get a Quote</li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;