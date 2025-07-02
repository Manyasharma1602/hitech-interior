import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const AppFooter = () => {
  const[clickedIcon, setClickedIcon] = useState(null);

   const handleClick = (iconName) => {
    setClickedIcon(iconName === clickedIcon ? null : iconName);
   }

  return (
    <footer className="pt-4 pb-2" style={{ backgroundColor: 'black', borderTop: '1px solid #4b0082', marginTop: "0" }}>
      <Container>
        <Row className="text-center text-white">
          <Col md={12}>
            <p className="mb-2 fw-bold ">&copy; {new Date().getFullYear()} Hitech Interior. All rights reserved.</p>
            {/*Social Media Icons*/}
            <div className="mb-3 text-center">

              {/* WhatsApp Integration */}
              <a
                href="https://wa.me/7454059197"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className={`footer-icon mx-2 ${clickedIcon === 'whatsapp' ? 'clicked' : ''}`} style={{ fontSize: '1.5rem' }}
                onClick={()=> handleClick('whatsapp')} />
              </a>

              {/* Facebook Integration */}
              <a 
                href="https://www.facebook.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                  >
                  <FaFacebook className={`footer-icon mx-2 ${clickedIcon === 'facebook' ? 'clicked' : ''}`} style={{ fontSize: '1.5rem' }}
                 onClick={()=> handleClick('facebook')}/>
                </a>

                {/*Instagram Integration*/}
              <a 
                 href="https://www.instagram.com/hitechgroup96" 
                 target="_blank" rel="noopener noreferrer"
                   >
                    <FaInstagram  className={`footer-icon mx-2 ${clickedIcon === 'instagram' ? 'clicked' : ''}`} style={{ fontSize: '1.5rem' }}
                   onClick={()=> handleClick('instagram')} />
              </a>

              {/*Linkedin Integration (My client dont want this)*/}
              <a href="https://www.linkedin.com/in/yourprofile"
               target="_blank" rel="noopener noreferrer"
                 >
                  <FaLinkedin  className={`footer-icon mx-2 ${clickedIcon === 'linkedin' ? 'clicked' : ''}`}  style={{ fontSize: '1.5rem' }}
                onClick={()=> handleClick('linkedin')} />
                  </a>
            </div>
            <p className=" text-white mt-3" style={{fontSize: '1.5rem'}}>Designed with passion by Hitech Interior</p>
            <h4 className='mt-2 fw-bold text-white ceo' style={{fontSize: '2rem'}}> CEO:  Kasim Khan</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;