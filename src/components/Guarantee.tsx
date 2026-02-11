import React from 'react';
import { ShieldCheck, Clock, UserCheck, MessageCircle, CheckCircle } from 'lucide-react';
import './Guarantee.css';

const Guarantee = () => {
    return (
        <section className="guarantee-section">
            <div className="container">
                <h2 className="section-title text-center">Our Iron-Clad Guarantee: You Win, or We Work for Free</h2>

                <div className="guarantee-main-box">
                    <div className="promise-badge">The Collective Promise</div>
                    <h3 className="primary-guarantee">
                        If you're not satisfied with our work within the first 14 days, we'll revise it until you love it—or refund 100% of your money. No questions asked.
                    </h3>
                </div>

                <div className="guarantee-grid">
                    <div className="guarantee-card">
                        <ShieldCheck size={32} className="guarantee-icon" />
                        <h4>Quality Guarantee</h4>
                        <ul>
                            <li>All work reviewed by senior specialists before delivery</li>
                            <li>Unlimited revisions within scope for 30 days</li>
                        </ul>
                    </div>

                    <div className="guarantee-card">
                        <Clock size={32} className="guarantee-icon" />
                        <h4>Timeline Guarantee</h4>
                        <ul>
                            <li>We hit our deadlines, or your next milestone is free</li>
                            <li>Average project delivery: 2-3 weeks faster than industry standard</li>
                        </ul>
                    </div>

                    <div className="guarantee-card">
                        <UserCheck size={32} className="guarantee-icon" />
                        <h4>Expert Match Guarantee</h4>
                        <ul>
                            <li>If you're not happy with your assigned team, we'll switch them out within 48 hours—at no cost</li>
                        </ul>
                    </div>

                    <div className="guarantee-card">
                        <MessageCircle size={32} className="guarantee-icon" />
                        <h4>Communication Guarantee</h4>
                        <ul>
                            <li>Response within 4 business hours, or we credit you $100</li>
                            <li>Weekly status updates, no ghosting—ever</li>
                        </ul>
                    </div>
                </div>

                <div className="trust-seal">
                    <CheckCircle size={20} />
                    <span>Backed by 500+ successful projects</span>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
