import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import AppFooter from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact'; // Import the Contact page
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail.js';

// Placeholder components for other pages (create these files in src/pages)
/*const Portfolio = () => <div className="py-5 text-center text-white"><h2 className="gradient-text">Our Portfolio Coming Soon!</h2><p>Check back to see our latest designs.</p></div>;*/
/*const About = () => <div className="py-5 text-center text-white"><h2 className="gradient-text">About Hitech Interior</h2><p>Learn more about our mission and team.</p></div>;*/

/*const ServiceDetail = () => <div className="py-5 text-center text-white">
  <h2 className="gradient-text">Service Detail Page</h2>
  <p>Details about a specific service will go here.</p></div>;*/


function App() {
  return (
    <Router>
      <AppNavbar />
      <main style={{ minHeight: 'calc(100vh - 120px)' }}> {/* Adjust minHeight based on Navbar/Footer height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceName" element={<ServiceDetail />} /> {/* Example for dynamic service routes */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add a 404 page if desired */}
          <Route path="*" element={<div className="py-5 text-center text-white"><h2 className="gradient-text">404 - Page Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
        </Routes>
      </main>
      <AppFooter />
    </Router>
  );
}

export default App;
