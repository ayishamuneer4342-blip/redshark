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
                        {/* Orbit Rings */}
                        <div className="orbit-ring ring-1"></div>
                        <div className="orbit-ring ring-2"></div>

                        {/* Core Element */}
                        <div className="core-circle">
                            <div className="core-content">
                                <Zap size={32} color="#fff" style={{ marginBottom: '8px' }} />
                                <span className="core-text">GROWTH</span>
                                <span className="core-sub">Engine</span>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <div className="float-card card-1">
                            <div className="card-icon bg-light-red">
                                <TrendingUp size={20} />
                            </div>
                            <div className="card-content">
                                <span className="card-label">Conversion</span>
                                <span className="card-value">+150%</span>
                            </div>
                        </div>

                        <div className="float-card card-2">
                            <div className="card-icon bg-light-blue">
                                <Users size={20} />
                            </div>
                            <div className="card-content">
                                <span className="card-label">Engagement</span>
                                <span className="card-value">High Vol.</span>
                            </div>
                        </div>

                        <div className="float-card card-3">
                            <div className="card-icon bg-light-green">
                                <Target size={20} />
                            </div>
                            <div className="card-content">
                                <span className="card-label">ROAS</span>
                                <span className="card-value">4.5x</span>
                            </div>
                        </div>

                        <div className="float-card card-4">
                            <div className="card-icon bg-light-purple">
                                <BarChart2 size={20} />
                            </div>
                            <div className="card-content">
                                <span className="card-label">Analytics</span>
                                <span className="card-value">Real-time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
