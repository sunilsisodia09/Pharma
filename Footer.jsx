import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="pharma-footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>PharmaGyaan</h3>
          <p>Advancing research and education in pharmaceutical sciences.</p>
          <p>Foundational learning in subjects like Pharmacology, Pharmaceutics, Pharmacognosy, and more.</p>
          <p>Interactive resources such as practical guides, clinical knowledge, and research case studies.</p>
          <p>Career support via job insights, industry trends, and exam preparation tips.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@PharmaGyaan.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Dehradun, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PharmaGyaan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
