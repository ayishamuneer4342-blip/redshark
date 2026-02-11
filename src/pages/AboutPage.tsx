import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Target, Users, Zap, Award } from 'lucide-react';
import Founder from '../components/Founder';

const AboutPage = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main style={{ paddingTop: '80px', backgroundColor: '#fff', color: 'var(--text-main)', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '80px' }}>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
                            We Are <span style={{ color: 'var(--primary)' }}>RedShark</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            A collective of digital natives, creative strategists, and technical wizards. We don't just build websites; we build engines for growth.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#000' }}>Our Mission</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                                To empower ambitious businesses with the digital tools and strategies they need to dominate their market. We believe in transparency, speed, and results that you can measure.
                            </p>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#000', marginTop: '40px' }}>Our Vision</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                                To be the leading force in digital transformation, redefining how businesses interact with their audience through innovative technology and creative excellence.
                            </p>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#000', marginTop: '40px' }}>Our Story</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                                RedShark began in 2024 with a clear purpose: to disrupt the traditional agency model. We saw a gap between technical execution and creative strategy, and we set out to bridge it. What started as a small team of passionate experts has grown into a full-service digital powerhouse, driven by the success of our partners.
                            </p>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                    <Target size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#000' }}>Result Oriented</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We focus on KPIs that actually matter to your bottom line.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                    <Users size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#000' }}>Client Partnership</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We work with you, not just for you. Your success is our success.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                    <Zap size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#000' }}>Agile Execution</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We move fast, iterate quickly, and stay ahead of the curve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Founder />
            </main>
            <Footer />
            <WhatsAppButton />
        </div >
    );
};

export default AboutPage;
