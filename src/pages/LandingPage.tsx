import React, { useEffect } from 'react';
import {
    ArrowRight,
    BarChart,
    Mail,
    Globe,
    Award,
    TrendingUp,
    DollarSign,
    Star,
    Zap,
    Target,
    Users,
    Smartphone,
    MonitorPlay,
    Linkedin,
    MapPin,
    ShoppingCart,
    MousePointerClick,
    Search
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import ScrollReveal from '../components/UI/ScrollReveal';
import './LandingPage.css';
import element1 from '../assets/element-1.png';
import element2 from '../assets/element-2.png';
import founder from '../assets/founder.jpg';

const LandingPage = () => {

    // Smooth scroll for anchor links
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            if (link && link.hash && link.hash.startsWith('#') && link.origin === window.location.origin) {
                e.preventDefault();
                const element = document.querySelector(link.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="landing-page">
            <Header />

            {/* --- HERO SECTION --- */}
            <section className="landing-hero">
                {/* Floating Elements (Background) */}
                <div className="floating-element float-1">
                    <div className="float-icon-box">
                        <TrendingUp size={24} color="#ce1111" />
                    </div>
                </div>
                <div className="floating-element float-2">
                    <div className="float-icon-box">
                        <DollarSign size={24} color="#ce1111" />
                    </div>
                </div>
                <div className="floating-element float-3">
                    <div className="float-icon-box">
                        <Zap size={24} color="#ef4444" />
                    </div>
                </div>
                <div className="floating-element float-4">
                    <div className="float-icon-box">
                        <Target size={24} color="#64748b" />
                    </div>
                </div>
                <div className="floating-element float-5">
                    <div className="float-icon-box">
                        <BarChart size={24} color="#000000" />
                    </div>
                </div>
                <div className="floating-element float-6">
                    <div className="float-icon-box">
                        <Mail size={24} color="#ce1111" />
                    </div>
                </div>
                <div className="floating-element float-7">
                    <div className="float-icon-box">
                        <Search size={24} color="#64748b" />
                    </div>
                </div>
                <div className="floating-element float-8">
                    <div className="float-icon-box">
                        <Users size={24} color="#000000" />
                    </div>
                </div>

                <div className="container">
                    <div className="landing-hero-content">
                        <div className="hero-badge">
                            <span className="pulse-dot"></span>
                            Performance Marketing Agency
                        </div>
                        <h1>
                            Stop Guessing.<br />
                            Start <span className="highlight-red-box">Scaling.</span>
                        </h1>
                        <p>
                            We don't just "do marketing". We build <strong>predictable revenue engines</strong>.
                            From Google Ads to TikTok, we turn ad spend into profit with laser-focused performance strategies.
                        </p>

                        <div className="landing-cta-group">
                            <a href="#contact" className="btn-landing-primary">Get Your Free Growth Strategy</a>
                            <a href="#growth-engine" className="btn-landing-secondary">How We Do It</a>
                        </div>

                        <div className="hero-rating">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={20} fill="#f59e0b" stroke="#f59e0b" />
                                ))}
                            </div>
                            <span>Trusted by 50+ Growth-Focused Brands</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SOCIAL PROOF --- */}
            <div className="section-divider-proof">
                <SocialProof />
            </div>

            {/* --- THE PROBLEM (AGITATION) --- */}
            <section className="problem-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <h2 className="section-title-dark">Most Marketing Agencies <br /><span className="text-red">Burn Your Money.</span></h2>
                        <p className="section-subtitle-dark">Does this sound familiar?</p>
                    </ScrollReveal>

                    <div className="problem-grid">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="problem-card">
                                <div className="problem-icon"><Target size={32} /></div>
                                <h3>Vanity Metrics</h3>
                                <p>Agencies reporting on "clicks" and "impressions" but never talking about <strong>Revenue</strong> or <strong>ROAS</strong>.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="problem-card">
                                <div className="problem-icon"><Users size={32} /></div>
                                <h3>The "Set & Forget" Trap</h3>
                                <p>Campaigns that launch with hype but get neglected after month one, causing performance to tank.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={300}>
                            <div className="problem-card">
                                <div className="problem-icon"><Zap size={32} /></div>
                                <h3>Cookie-Cutter Strategies</h3>
                                <p>Applying the same generic template to every business regardless of your unique unit economics.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* --- THE SOLUTION (GROWTH ENGINE) --- */}
            <section id="growth-engine" className="growth-service-section">
                <div className="container">
                    <div className="growth-service-grid">
                        <ScrollReveal animation="slide-left" delay={100}>
                            <div className="growth-service-left">
                                <h2>
                                    Enter The <span className="highlight-red-box">RedShark Growth Engine</span>
                                </h2>

                                <div className="visual-orbit-container">
                                    <div className="orbit-system">
                                        <div className="orbit-center-circle">
                                            <span className="brand-text">REVENUE<br />FOCUS</span>
                                        </div>

                                        {/* Inner Ring */}
                                        <div className="orbit-ring ring-1">
                                            <div className="orbit-item item-mail"><Mail size={18} /></div>
                                            <div className="orbit-item item-edit"><Target size={18} /></div>
                                            <div className="orbit-item item-gem"><DollarSign size={18} /></div>
                                        </div>

                                        {/* Outer Ring */}
                                        <div className="orbit-ring ring-2">
                                            <div className="orbit-item item-video"><MonitorPlay size={20} /></div>
                                            <div className="orbit-item item-search"><Search size={20} /></div>
                                            <div className="orbit-item item-map"><MapPin size={20} /></div>
                                            <div className="orbit-item item-mega"><ShoppingCart size={20} /></div>
                                            <div className="orbit-item item-chart"><BarChart size={20} /></div>
                                            <div className="orbit-item item-image"><Users size={20} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="slide-right" delay={200}>
                            <div className="growth-service-right">
                                <p className="growth-intro">
                                    We don't guess. We engineer growth. Our ecosystem covers every touchpoint of your customer's journey.
                                </p>

                                <ul className="growth-checklist">
                                    <li>
                                        <span className="check-icon">✓</span>
                                        <div>
                                            <strong>Full-Funnel Acquisition</strong>
                                            <p>Capturing demand where it exists and generating it where it doesn't.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="check-icon">✓</span>
                                        <div>
                                            <strong>Conversion Rate Optimization (CRO)</strong>
                                            <p>Turning more of your current traffic into paying customers.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="check-icon">✓</span>
                                        <div>
                                            <strong>Data-Driven Iteration</strong>
                                            <p>Constant A/B testing to lower CPA and increase LTV.</p>
                                        </div>
                                    </li>
                                </ul>

                                <a href="#contact" className="link-arrow">
                                    See How It Works For You <ArrowRight size={18} />
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* --- PERFORMANCE MARKETING AREAS (NEW GRID) --- */}
            <section className="marketing-areas-section">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Performance Marketing Capabilities</h2>
                        <p>We cover every channel that matters to your bottom line.</p>
                    </div>

                    <div className="areas-grid">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="area-card">
                                <ShoppingCart className="area-icon" />
                                <h3>E-commerce Sales</h3>
                                <p>Scaling Shopify & WooCommerce stores with high-ROAS Meta & Google Shopping campaigns.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={150}>
                            <div className="area-card">
                                <MousePointerClick className="area-icon" />
                                <h3>CRO</h3>
                                <p>Optimizing landing pages and user flows to squeeze every drop of revenue from your traffic.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="area-card">
                                <Search className="area-icon" />
                                <h3>Google Ads</h3>
                                <p>Dominate search intent. We manage Search, Shopping, and PMax campaigns that convert.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={250}>
                            <div className="area-card">
                                <Users className="area-icon" />
                                <h3>B2B & B2C Lead Gen</h3>
                                <p>Filling your CRM with qualified leads using targeted funnels and lead magnets.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={300}>
                            <div className="area-card">
                                <Smartphone className="area-icon" />
                                <h3>Social Media Marketing</h3>
                                <p>Creative-first campaigns on Instagram, Facebook, and TikTok that stop the scroll.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={350}>
                            <div className="area-card">
                                <MonitorPlay className="area-icon" />
                                <h3>Display & Video Ads</h3>
                                <p>Brand awareness and retargeting via YouTube and programmatic display networks.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={400}>
                            <div className="area-card">
                                <Linkedin className="area-icon" />
                                <h3>LinkedIn Targeted Ads</h3>
                                <p>Precision B2B targeting to reach decision-makers and high-value accounts.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={450}>
                            <div className="area-card">
                                <MapPin className="area-icon" />
                                <h3>Local Business Campaigns</h3>
                                <p>Dominate your local area with Google Maps and geo-targeted offers.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to scale your revenue?</h2>
                        <p>No fluff. No vanity metrics. Just a clear path to growth.</p>
                        <div className="cta-buttons">
                            <a href="#contact" className="btn-landing-primary">Get Your Proposal</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="landing-faq">
                <div className="container">
                    <FAQ />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
