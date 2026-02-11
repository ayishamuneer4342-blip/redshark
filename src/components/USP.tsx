import React from 'react';
import { Users, Target, Zap } from 'lucide-react';
import './USP.css';

const USP = () => {
    return (
        <section className="usp-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">What makes us different from the rest.</h2>
                <div className="usp-grid">
                    <div className="usp-card">
                        <div className="icon-wrapper">
                            <Users className="usp-icon" />
                        </div>
                        <h3>What sets us apart?</h3>
                        <p>While many agencies just plan, we execute. Our expert team doesn’t just create strategies for SEO, Meta Ads, and Google Ads—we implement them, monitor results, and drive real growth for your business. With us, your success isn’t just a promise—it’s our priority.</p>
                    </div>
                    <div className="usp-card">
                        <div className="icon-wrapper">
                            <Target className="usp-icon" />
                        </div>
                        <h3>The RACE Framework</h3>
                        <p>With the RACE framework, we maximize ROI by focusing only on the strategies your business truly needs. We identify gaps in Reach, Act, Convert, and Engage, and optimize them to drive measurable growth—no unnecessary tactics, just results.</p>
                    </div>
                    <div className="usp-card">
                        <div className="icon-wrapper">
                            <Zap className="usp-icon" />
                        </div>
                        <h3>Data-Backed Strategy</h3>
                        <p>Every strategy we implement is backed by real data. We continuously analyze performance, optimize campaigns, and make informed decisions to ensure your business gets the highest impact from every marketing effort.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default USP;
