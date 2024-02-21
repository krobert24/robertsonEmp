import React from 'react';
import { Link } from 'react-router-dom';
interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bottom p-3">
      <div className="container">
          <div className="d-flex justify-content-center">
            <Link to="/" className="nav-link">Home ||</Link>
            <Link to="/contact" className="nav-link"> Contact ||</Link>
            <Link to="/features" className="nav-link"> Features ||</Link>
            <Link to="/store" className="nav-link"> Store </Link>
          </div>
       
        {/* Copyright information */}
        <p className="text-center mb-0">&copy; 2024 The Robertson Empire</p>
        {children}
      </div>
    </footer>
  );
};

export default Footer;