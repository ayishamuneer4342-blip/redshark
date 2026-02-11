import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    }, [location]);

    // Check if we are on the home page
    const isHomePage = location.pathname === '/';

    return (
        <header className={`header ${isScrolled || !isHomePage ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src="/logo-red.jpg" alt="REDSHARK" style={{ height: '100px', width: 'auto', mixBlendMode: 'multiply', objectFit: 'contain' }} />
                </Link>

                <nav className={`desktop-nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

                    <div className="nav-item-dropdown"
                        onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
                        onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}
                    >
                        <Link to="/services" className="dropdown-trigger" onClick={(e) => {
                            if (window.innerWidth <= 768) {
                                e.preventDefault();
                                setDropdownOpen(!dropdownOpen);
                            }
                        }}>
                            Services <ChevronDown size={14} className={`chevron ${dropdownOpen ? 'rotate' : ''}`} />
                        </Link>
                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            <Link to="/search-engine-optimization" onClick={() => setMobileMenuOpen(false)}>Search Engine Optimization</Link>
                            <Link to="/google-ads" onClick={() => setMobileMenuOpen(false)}>Google Ads</Link>
                            <Link to="/social-media-marketing" onClick={() => setMobileMenuOpen(false)}>Social Media Marketing</Link>
                            <Link to="/web-development" onClick={() => setMobileMenuOpen(false)}>Web Development</Link>
                        </div>
                    </div>

                    <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                    <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link to="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <button className="btn btn-primary mobile-only" onClick={() => setMobileMenuOpen(false)}>Get Started</button>
                </nav>

                <div className="header-actions">
                    <button className="btn btn-primary desktop-only">Get Started</button>
                    <button
                        className={`mobile-toggle ${isHomePage && !isScrolled ? 'text-white' : 'text-dark'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
