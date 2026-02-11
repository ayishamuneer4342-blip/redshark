import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">Transparent, Affordable Pricing</h2>
                    <p className="section-subtitle">No hidden fees. No surprises.</p>
                </div>

                <div className="pricing-grid">
                    {/* Card 1 */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Starter</h3>
                        <div className="plan-price">$2,500<span>/project</span></div>
                        <p className="plan-desc">Perfect for small businesses and MVPs.</p>
                        <ul className="plan-features">
                            <li><Check size={16} className="text-primary" /> Dedicated Project Manager</li>
                            <li><Check size={16} className="text-primary" /> Up to 3 Specialists</li>
                            <li><Check size={16} className="text-primary" /> 2 Weeks Turnaround</li>
                            <li><Check size={16} className="text-primary" /> Basic Revisions</li>
                        </ul>
                        <button className="btn btn-outline full-width">Get Started</button>
                    </div>

                    {/* Card 2 - Highlight */}
                    <div className="pricing-card highlighted">
                        <div className="popular-tag">Most Popular</div>
                        <h3 className="plan-name">Growth</h3>
                        <div className="plan-price">$7,500<span>/project</span></div>
                        <p className="plan-desc">For scaling brands needing full execution.</p>
                        <ul className="plan-features">
                            <li><Check size={16} className="text-primary" /> Senior Project Manager</li>
                            <li><Check size={16} className="text-primary" /> Full Specialist Team</li>
                            <li><Check size={16} className="text-primary" /> 1 Month Support</li>
                            <li><Check size={16} className="text-primary" /> Unlimited Revisions</li>
                        </ul>
                        <button className="btn btn-primary full-width">Get Started</button>
                    </div>

                    {/* Card 3 */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Enterprise</h3>
                        <div className="plan-price">Custom</div>
                        <p className="plan-desc">Tailored solutions for large organizations.</p>
                        <ul className="plan-features">
                            <li><Check size={16} className="text-primary" /> Dedicated Account Director</li>
                            <li><Check size={16} className="text-primary" /> Custom Team Generation</li>
                            <li><Check size={16} className="text-primary" /> Priority SLA</li>
                            <li><Check size={16} className="text-primary" /> 24/7 Support</li>
                        </ul>
                        <button className="btn btn-outline full-width">Contact Sales</button>
                    </div>
                </div>

                <div className="included-features">
                    <h3 className="text-center mb-4">Included in Every Package</h3>
                    <div className="included-grid">
                        <div className="included-item"><Check size={18} className="text-primary" /> Dedicated Project Manager</div>
                        <div className="included-item"><Check size={18} className="text-primary" /> Quality review process</div>
                        <div className="included-item"><Check size={18} className="text-primary" /> Weekly status updates</div>
                        <div className="included-item"><Check size={18} className="text-primary" /> 30-day revision period</div>
                        <div className="included-item"><Check size={18} className="text-primary" /> Secure file transfer</div>
                        <div className="included-item"><Check size={18} className="text-primary" /> NDA & IP protection</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
