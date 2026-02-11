import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title text-start mb-4">About Us</h2>
                        <p className="lead-text">We are a collective of experts dedicated to your growth.</p>
                        <p>
                            RedShark was born from a simple observation: traditional agencies often focus on billable hours rather than real client growth. Having worked with many companies and clients, we saw a recurring problem—clients would spend money without seeing meaningful results because no one was taking a truly focused, strategic approach. Many agencies don't fully understand each business or its market.
                        </p>
                        <p>
                            From this insight, we built RedShark. Our mission is to deliver the right strategies that actually work for each business. We analyze your market, study competitors, and identify growth opportunities tailored to your unique needs.
                        </p>
                        <p>
                            With RedShark, your business isn't just another client—it's a partner. By 2025, we aim to help businesses like yours achieve measurable growth and stronger market positions through focused, strategic execution.
                        </p>
                    </div>

                    <div className="about-visual">
                        <div className="stat-card">
                            <span className="stat-number">150+</span>
                            <span className="stat-label">Expert Talent</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Remote Network</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Global Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
