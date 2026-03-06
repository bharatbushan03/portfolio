import React from 'react';
import { Code2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section glass">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Code2 className="logo-icon" size={24} />
                    <span className="logo-text">Portfolio.</span>
                </div>
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Designed & Built by Bharat Lashotra
                </p>
            </div>
        </footer>
    );
};
export default Footer;
