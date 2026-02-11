import React from 'react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import founderImage from '../assets/founder.jpg';
import './Founder.css';

const Founder = () => {
    return (
        <section className="founder-section">
            <div className="container">
                <div className="founder-wrapper">
                    <div className="founder-content">
                        <h2 className="section-title text-left">Hi, I'm Sreyas, founder of Red Sharc.</h2>

                        <p className="founder-story">
                            I started Red Sharc after watching the same problem repeat again and again.
                        </p>

                        <p className="founder-text">
                            Good business owners couldn’t find the right people to work with.<br />
                            Good freelancers couldn’t find the right businesses to work for.
                        </p>

                        <p className="founder-text">
                            <strong>So both sides struggled.</strong>
                        </p>

                        <p className="founder-text">
                            Business owners ended up with agencies they didn’t fully trust.<br />
                            Freelancers ended up doing work that didn’t help them grow.<br />
                            That gap bothered me.
                        </p>

                        <h4 className="font-bold text-xl mb-3 text-white">What I noticed</h4>
                        <p className="founder-text">
                            There are experienced freelancers out there. Really good ones.<br />
                            But they’re hard to find.<br />
                            And harder to manage.<br />
                            And when the work gets serious, reliability becomes the real issue.
                        </p>
                        <p className="founder-text">
                            On the other side, agencies charge a lot. Not always because the work is better, but because the system is heavy.<br />
                            I didn’t want either option.
                        </p>

                        <h4 className="font-bold text-xl mb-3 text-white">Why I built Red Sharc</h4>
                        <p className="founder-text">
                            Red Sharc is my attempt to fix this.
                        </p>
                        <p className="founder-closing">
                            I bring serious business owners and reputed freelancers under one roof.<br />
                            No noise. No guessing. No shortcuts.
                        </p>

                        <div className="founder-sig">
                            <div className="sig-name">Sreyas</div>
                            <div className="sig-role">Founder, Red Sharc</div>
                        </div>

                        <div className="founder-links">
                            <a href="#" className="founder-link"><Linkedin size={18} /> LinkedIn</a>
                            <span className="separator">•</span>
                            <a href="mailto:hello@redsharc.com" className="founder-link"><Mail size={18} /> Email</a>
                            <span className="separator">•</span>
                            <a href="#contact" className="founder-link highlight">Book a call <ArrowRight size={16} /></a>
                        </div>
                    </div>

                    <div className="founder-image-col">
                        <div className="founder-image-box">
                            <img
                                src={founderImage}
                                alt="Ashil Shajeer - Founder of Red Sharc"
                                className="founder-image"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
