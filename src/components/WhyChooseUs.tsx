import React from 'react';
import { Check, TrendingUp, Users, Target, BarChart2, Zap } from 'lucide-react';
import './WhyChooseUs.css';

const benefits = [
    "Access to pre-vetted top 3% experts",
    "60% cheaper than traditional agencies",
    "Flexible team scaling (up or down)",
    "Fast turnaround times (avg. 2 weeks)",
    "Dedicated project manager included",
    "No long-term lock-in contracts",
    "Transparent, fixed pricing"
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="container why-content centered-layout">
                <div className="why-text-full">
                    <h2 className="section-title text-center">Why Top Companies Choose Our Collective</h2>
                    <p className="mb-4 text-muted text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>We bridge the gap between expensive agencies and unreliable freelancers.</p>

                    <div className="benefits-list-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="benefit-item-text mb-4">
                            <strong>1. What sets us apart?</strong> While many agencies just plan, we execute. Our expert team doesn't just create strategies for SEO, Meta Ads, and Google Ads—we implement them, monitor results, and drive real growth for your business. With us, your success isn't just a promise—it's our priority.
                        </div>
                        <div className="benefit-item-text mb-4">
                            <strong>2. With the RACE framework,</strong> we maximize ROI by focusing only on the strategies your business truly needs. We identify gaps in Reach, Act, Convert, and Engage, and optimize them to drive measurable growth—no unnecessary tactics, just results.
                        </div>
                        <div className="benefit-item-text mb-4">
                            <strong>3. Every strategy we implement</strong> is backed by real data. We continuously analyze performance, optimize campaigns, and make informed decisions to ensure your business gets the highest impact from every marketing effort.
                        </div>
                    </div>
                </div>
                <div className="why-visual">
                    <div className="why-visual-container">
                        <div className="scene-3d">
                            <div className="cube-wrapper">
                                {/* Central Cube */}
                                <div className="cube">
                                    <div className="face front">
                                        <Zap size={40} color="#fff" />
                                    </div>
                                    <div className="face back"></div>
                                    <div className="face right"></div>
                                    <div className="face left"></div>
                                    <div className="face top"></div>
                                    <div className="face bottom"></div>
                                </div>
                                {/* Floating Elements & Connectors */}
                                <div className="connector-line line-1"></div>
                                <div className="floating-item item-1">
                                    <TrendingUp size={32} color="#fff" />
                                </div>

                                <div className="connector-line line-2"></div>
                                <div className="floating-item item-2">
                                    <BarChart2 size={32} color="#fff" />
                                </div>

                                <div className="connector-line line-3"></div>
                                <div className="floating-item item-3">
                                    <Target size={32} color="#fff" />
                                </div>
                                {/* Orbit Rings */}
                                <div className="ring-3d ring-inner"></div>
                                <div className="ring-3d ring-outer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
