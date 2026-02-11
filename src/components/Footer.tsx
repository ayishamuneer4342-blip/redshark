import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Col 1 */}
                    <div className="footer-col">
                        <img src="/logo-red.jpg" alt="RED SHARC" style={{ height: '64px', width: 'auto', marginBottom: '16px' }} />
                        <p className="footer-desc">
                            Access the world's top digital marketing talent without the agency markup.
                        </p>
                        <div className="social-icons">
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Graphic Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">SEO & Social Media</a></li>
                            <li><a href="#">Paid Advertising</a></li>
                            <li><a href="#">Content Creation</a></li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Work</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="contact-list">
                            <li>
                                <Mail size={16} className="contact-icon" />
                                <span>hello@redsharc.com</span>
                            </li>
                            <li>
                                <MapPin size={16} className="contact-icon" />
                                <span>San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">© 2026 Red Sharc Collective. All rights reserved.</div>
                    <div className="policy-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
