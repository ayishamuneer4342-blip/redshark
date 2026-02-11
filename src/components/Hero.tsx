import React from 'react';
import { ArrowRight, CheckCircle, Mail, FileEdit, Gem, Video, Search, MapPin, Megaphone, BarChart, Image } from 'lucide-react';
import LeadForm from './LeadForm';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-gradient"></div>
            <div className="container hero-content">
                <div className="hero-text">
                    <div className="trust-badge">
                        <span className="badge-icon">✨</span>
                        <span>Trusted by 500+ High-Growth Companies</span>
                    </div>

                    <h1 className="hero-headline">
                        We know why you are here- <span className="text-gradient">more leads, more sale and more growth.</span>
                    </h1>

                    <p className="hero-subheadline">
                        Want to grow your business? You're in the right place. We don't make big promises — we deliver real results. Through strategic SEO, Google Ads, and Meta Ads, we help businesses improve online visibility, generate quality leads, boost sales, and long-term growth.
                    </p>

                    <div className="hero-cta-group">
                        <button className="btn btn-primary btn-lg">
                            Talk to a Marketing Expert <ArrowRight size={20} className="icon-right" />
                        </button>
                    </div>

                    <div className="hero-trust-elements">
                        <div className="trust-item">
                            <CheckCircle size={16} className="text-primary" />
                            <span>RACE Framework</span>
                        </div>
                        <div className="trust-item">
                            <CheckCircle size={16} className="text-primary" />
                            <span>150+ Clients</span>
                        </div>
                        <div className="trust-item">
                            <CheckCircle size={16} className="text-primary" />
                            <span>Research-Based Strategy</span>
                        </div>
                        <div className="trust-item">
                            <CheckCircle size={16} className="text-primary" />
                            <span>Business-Focused Growth</span>
                        </div>
                        <div className="trust-item">
                            <CheckCircle size={16} className="text-primary" />
                            <span>Expert Team</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-orbit-container">
                        <div className="orbit-system">
                            <div className="orbit-center-circle">
                                <span className="brand-text">RED SHARC</span>
                            </div>

                            {/* Inner Ring */}
                            <div className="orbit-ring ring-1">
                                <div className="orbit-item item-mail"><Mail size={18} /></div>
                                <div className="orbit-item item-edit"><FileEdit size={18} /></div>
                                <div className="orbit-item item-gem"><Gem size={18} /></div>
                            </div>

                            {/* Outer Ring */}
                            <div className="orbit-ring ring-2">
                                <div className="orbit-item item-video"><Video size={20} /></div>
                                <div className="orbit-item item-search"><Search size={20} /></div>
                                <div className="orbit-item item-map"><MapPin size={20} /></div>
                                <div className="orbit-item item-mega"><Megaphone size={20} /></div>
                                <div className="orbit-item item-chart"><BarChart size={20} /></div>
                                <div className="orbit-item item-image"><Image size={20} /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-form-col">
                    <LeadForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;
