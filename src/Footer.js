import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src="/Logo.svg" alt="Little Lemon Logo" />
      </div>
      
      <div className="footer-links">
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-address">
        <p>123 Flavor Street</p>
        <p>Chicago, IL 60601</p>
        <p>+1 (312) 555-7890</p>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
