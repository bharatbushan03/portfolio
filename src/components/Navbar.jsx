import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Contact', href: '#contact', id: 'contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Active section tracking
            const sections = navLinks.map(l => l.id);
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo">
                    <Code2 className="logo-icon" size={22} />
                    <span className="logo-text">Portfolio.</span>
                </a>

                <ul className="nav-links desktop-nav">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="btn btn-primary nav-cta">Hire Me</a>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div className={`mobile-nav glass ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
