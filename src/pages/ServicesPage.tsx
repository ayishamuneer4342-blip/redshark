import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ArrowRight, CheckCircle, TrendingUp, Search, MousePointer, BarChart, ShieldCheck, Clock, UserCheck, Play } from 'lucide-react';
import SEO from '../components/SEO';

// Reusing existing logic/styles where appropriate, but customizing for the specific flow
// We can import specific components if they match exactly, or build inline for specific content requirements.

const ServicesPage = () => {
    return (
        <div className="page-wrapper">
            <SEO
                title="Our Services | Red Sharc Digital Marketing"
                description="Explore our comprehensive digital marketing services in Kerala: SEO, PPC, Social Media Marketing, Web Development, and more."
                canonical="https://redsharc.com/services"
            />
            <Header />
            <main style={{ paddingTop: '80px', backgroundColor: '#fff', color: 'var(--text-main)', minHeight: '100vh' }}>

                {/* 1. The Hero Section (The Hook) */}
                <section className="service-hero" style={{ padding: '100px 20px 60px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px', letterSpacing: '-0.02em', color: '#000' }}>
                        Scale Your Monthly Revenue by 35% with <span style={{ color: 'var(--primary)' }}>Data-Driven Performance Marketing</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                        We help B2B SaaS and E-commerce brands acquire high-intent leads through specialized SEO, PPC, and Conversion frameworks.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                        <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', borderRadius: '50px' }}>
                            Get My Free Growth Audit <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4, 5].map(i => <ShieldCheck key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
                            </div>
                            <span>Trusted by 500+ High-Growth Companies</span>
                        </div>
                    </div>
                    {/* Social Proof Bar Inline */}
                    <div style={{ marginTop: '60px', opacity: 0.7, filter: 'grayscale(100%)' }}>
                        <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', color: '#94a3b8' }}>Trusted By Industry Leaders</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
                            {/* Placeholders for logos - mimicking text logos for now */}
                            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#cbd5e1' }}>TechGlobal</span>
                            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#cbd5e1' }}>InnovateX</span>
                            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#cbd5e1' }}>FutureFinance</span>
                            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#cbd5e1' }}>EcoSolutions</span>
                        </div>
                    </div>
                </section>

                {/* 2. The "Problem & Agitation" Section */}
                <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Tired of burning your budget on ads that don't convert?</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Most agencies focus on "vanity metrics" like clicks and impressions. We focus on what matters: Revenue.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ background: '#fee2e2', width: '50px', height: '50px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                    <TrendingUp size={24} color="var(--primary)" />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>Stagnant Organic Traffic</h3>
                                <p style={{ color: 'var(--text-muted)' }}>You're publishing content, but it's not ranking, and your competitors are eating up all the search volume.</p>
                            </div>
                            <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ background: '#fee2e2', width: '50px', height: '50px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                    <MousePointer size={24} color="var(--primary)" />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>High Acquisition Costs</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Your CPA is skyrocketing while lead quality is plummeting. You need a system that lowers costs as you scale.</p>
                            </div>
                            <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ background: '#fee2e2', width: '50px', height: '50px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                    <Search size={24} color="var(--primary)" />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>Invisible Brand Presence</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Great product, but nobody knows you exist. You struggle to stand out in a crowded marketplace.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. The "Service Framework" (The Solution) */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container" style={{ maxWidth: '1100px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <p style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Our Proven Process</p>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>The Red Sharc Revenue Catalyst Engine™</h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', position: 'relative' }}>
                            {/* Connectors could be added with CSS pseudo elements */}
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#f1f5f9', marginBottom: '-20px', zIndex: -1, position: 'relative' }}>01</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Audit & Strategy</h3>
                                <p style={{ color: 'var(--text-muted)' }}>We deep-dive into your analytics to find the leaks in your current funnel and build a roadmap for growth.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#f1f5f9', marginBottom: '-20px', zIndex: -1, position: 'relative' }}>02</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Execution & Optimization</h3>
                                <p style={{ color: 'var(--text-muted)' }}>We launch targeted campaigns and aggressively A/B test creatives and reading pages to maximize performance.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#f1f5f9', marginBottom: '-20px', zIndex: -1, position: 'relative' }}>03</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Scale & Report</h3>
                                <p style={{ color: 'var(--text-muted)' }}>We double down on winning strategies and provide transparent, real-time ROI data so you know exactly where your money goes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Core Service Pillars (The "What") */}
                <section style={{ padding: '80px 20px', backgroundColor: '#0f172a', color: '#fff' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px' }}>What We Deliver</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '10px' }}>Paid Media (PPC)</h3>
                                <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '20px' }}>Stop guessing. We put your brand in front of users ready to buy today.</p>
                                <ul style={{ listStyle: 'none', color: '#cbd5e1' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={16} color="var(--primary)" /> Google Search & Shopping</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={16} color="var(--primary)" /> Meta (Facebook/Instagram) Ads</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={16} color="var(--primary)" /> LinkedIn B2B Lead Gen</li>
                                </ul>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '10px' }}>SEO & Content</h3>
                                <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '20px' }}>Build an evergreen lead machine that lowers your long-term acquisition costs.</p>
                                <ul style={{ listStyle: 'none', color: '#cbd5e1' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={16} color="var(--primary)" /> Technical SEO Audits</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={16} color="var(--primary)" /> High-Authority Backlinks</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={16} color="var(--primary)" /> Conversion-Focused Content</li>
                                </ul>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '10px' }}>Conversion Rate Optimization</h3>
                                <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '20px' }}>We don't just send traffic; we make sure that traffic turns into revenue.</p>
                                <ul style={{ listStyle: 'none', color: '#cbd5e1' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={16} color="var(--primary)" /> Landing Page Design</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={16} color="var(--primary)" /> A/B Testing</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={16} color="var(--primary)" /> User Experience Analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The "Proof of Work" (Case Studies) */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px' }}>Real Results. No Fluff.</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                            <div style={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden' }}>
                                <div style={{ height: '200px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                                    [Chart/Graph Visual]
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '10px' }}>SAAS GROWTH</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>From $0 to $1M ARR in 12 Months</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                                        <strong>Challenge:</strong> New market entrant with zero organic presence.<br />
                                        <strong>Action:</strong> Aggressive content SEO + LinkedIn Ads.<br />
                                        <strong>Result:</strong> 340% increase in qualified demos.
                                    </p>
                                    <a href="#" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>Read Case Study <ArrowRight size={16} /></a>
                                </div>
                            </div>
                            <div style={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden' }}>
                                <div style={{ height: '200px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                                    [Before/After Visual]
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '10px' }}>E-COMMERCE SCALE</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Reducting CPA by 45%</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                                        <strong>Challenge:</strong> Rising ad costs on Facebook.<br />
                                        <strong>Action:</strong> Creative testing framework & UGC.<br />
                                        <strong>Result:</strong> 2.5x ROAS within 60 days.
                                    </p>
                                    <a href="#" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>Read Case Study <ArrowRight size={16} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Deep Social Proof (Testimonials) */}
                <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px' }}>Don't Just Take Our Word For It</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-main)' }}>"Red Sharc completely transformed our lead gen. We went from struggling to get 10 demos a month to booking 50+ consistently. The ROI is undeniable."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#ddd', borderRadius: '50%' }}></div>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>Sarah Jenkins</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>CMO, TechFlow</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-main)' }}>"Finally, an agency that speaks data. They didn't just promise 'branding'; they delivered actual revenue. Their reporting is transparent and helpful."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#ddd', borderRadius: '50%' }}></div>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>Mike Ross</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Founder, UrbanGear</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Objection Killer (FAQ) */}
                <section style={{ padding: '100px 20px' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px' }}>Frequently Asked Questions</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>How soon will I see results?</h4>
                                <p style={{ color: 'var(--text-muted)' }}>For PPC campaigns, you can see traffic instantly and leads within the first week. SEO typically takes 3-6 months for significant compounding growth, but we look for quick wins in the first 30 days.</p>
                            </div>
                            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>What is the minimum ad budget you work with?</h4>
                                <p style={{ color: 'var(--text-muted)' }}>We typically recommend a minimum ad spend of $1,500/month to generate enough data for optimization. However, this varies by industry and competition.</p>
                            </div>
                            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Is there a long-term contract?</h4>
                                <p style={{ color: 'var(--text-muted)' }}>We believe in earning your business every month. Our standard agreements are month-to-month after an initial 3-month ramp-up phase.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Final Call to Action (The "Closing") */}
                <section style={{ padding: '100px 20px', backgroundColor: 'var(--primary)', color: '#fff', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>Ready to stop guessing and start growing?</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '40px', opacity: 0.9 }}>Join the top 1% of brands dominating their market.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                            <button style={{ backgroundColor: '#fff', color: 'var(--primary)', padding: '20px 50px', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                                Book Your Free Strategy Session <ArrowRight size={24} />
                            </button>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>No long-term contracts. Cancel anytime.</p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default ServicesPage;
