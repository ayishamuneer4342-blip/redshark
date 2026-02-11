import React from 'react';
import { ShoppingBag, Server, Activity, Home, BadgeDollarSign, GraduationCap } from 'lucide-react';
import './Industries.css';

const Industries = () => {
    return (
        <section className="industries-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">Industries We Serve</h2>
                <div className="text-center mb-5">
                    <p className="section-subtitle">Specialized expertise across multiple verticals.</p>
                </div>

                <div className="industries-grid">
                    <div className="industry-card"><h3>Dental</h3></div>
                    <div className="industry-card"><h3>Construction</h3></div>
                    <div className="industry-card"><h3>Interior Designing</h3></div>
                    <div className="industry-card"><h3>Travel and Tourism</h3></div>
                    <div className="industry-card"><h3>Ayurvedic Hospital</h3></div>
                    <div className="industry-card"><h3>Health Sector</h3></div>
                    <div className="industry-card"><h3>Clothing Brand</h3></div>
                    <div className="industry-card"><h3>Local Business</h3></div>
                    <div className="industry-card"><h3>Clinics</h3></div>
                    <div className="industry-card"><h3>Study Abroad</h3></div>
                    <div className="industry-card"><h3>Nursing Migration</h3></div>
                    <div className="industry-card"><h3>SAAS</h3></div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
