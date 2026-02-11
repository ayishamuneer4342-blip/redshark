import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import {
    Share2, Users, Heart, MessageCircle, AlertTriangle, CheckCircle,
    ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Video, Radio,
    ThumbsUp, Globe, BarChart2, Zap, Target, Layers, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SMMPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does social media marketing take to show results?",
            answer: "Organic growth takes time, while paid campaigns can generate faster results."
        },
        {
            question: "Why choose Red Sharc as the best social media marketing agency in Kerala?",
            answer: "We focus on strategy, execution, transparency, and measurable performance."
        },
        {
            question: "Do you provide paid social media advertising?",
            answer: "Yes. We offer complete Meta Ads strategy, execution, and optimization."
        },
        {
            question: "Will social media marketing help generate leads for my business?",
            answer: "Yes. When planned strategically, social media marketing can generate quality leads by targeting the right audience, using engaging content, and guiding users toward clear calls to action. We align content and campaigns with your business goals to support measurable growth."
        },
        {
            question: "How do you decide which social media platforms are right for my business?",
            answer: "We analyze your business type, target audience, and goals before selecting platforms. Not every business needs to be on every channel, so we focus on the platforms where your Kerala audience is most active and likely to engage."
        }
    ];

    const platforms = [
        { name: "Facebook Marketing", desc: "Community building, reach expansion, and lead-driven campaigns", icon: ThumbsUp },
        { name: "Instagram Marketing", desc: "Brand visibility, reels, stories, and engagement growth", icon: Smartphone },
        { name: "LinkedIn Marketing", desc: "B2B branding, authority building, and professional engagement", icon: Users },
        { name: "YouTube Marketing", desc: "Video visibility, storytelling, and long-form content strategy", icon: Video },
        { name: "WhatsApp Marketing", desc: "Direct customer communication and broadcast updates", icon: MessageCircle }
    ];

    return (
        <div className="page-wrapper" style={{ backgroundColor: '#fff', color: '#0f172a' }}>
            <SEO
                title="Social Media Marketing Agency in Kerala | SMM Services"
                description="Boost your brand visibility with Red Sharc, the best social media marketing agency in Kerala. Strategic, result-driven SMM campaigns."
                canonical="https://redsharc.com/social-media-marketing"
            />
            <Header />

            <main style={{ paddingTop: '80px' }}>
                {/* 1. HERO SECTION */}
                <section className="section-responsive text-center" style={{ position: 'relative' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <div style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                background: 'rgba(206, 17, 17, 0.05)',
                                borderRadius: '50px',
                                color: '#ce1111',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '24px'
                            }}>
                                Social Media Marketing Agency in Kerala
                            </div>
                            <h1 className="heading-xl" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                Result-Driven <span style={{ color: '#ce1111' }}>Social Media Marketing</span> in Kerala
                            </h1>
                            <p className="text-body-lg" style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto 40px' }}>
                                at Red Sharc, we help businesses turn social media into a powerful growth channel—not just a posting platform. We combine strategy, creativity, and performance marketing to deliver measurable outcomes.
                            </p>
                            <div className="flex-mobile-col" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary btn-responsive" style={{ background: '#ce1111', borderColor: '#ce1111' }}>
                                    Get a Free Social Media Audit
                                </button>
                                <button className="btn btn-secondary btn-responsive" style={{
                                    background: '#fff',
                                    color: '#0f172a',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    Book a Strategy Call
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 2. INTRO: WHAT IS SMM */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive text-center" style={{ maxWidth: '1000px' }}>
                        <ScrollReveal animation="zoom-in">
                            <h2 className="heading-lg" style={{ marginBottom: '24px', color: '#0f172a' }}>Why Social Media Marketing Is Important for Kerala Businesses</h2>
                            <p className="text-body" style={{ color: '#64748b', marginBottom: '30px' }}>
                                Kerala has one of the most active and engaged social media audiences in India. Customers today discover brands, compare services, and make purchase decisions on platforms like Instagram, Facebook, and LinkedIn.
                            </p>
                            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', display: 'inline-block', width: '100%' }}>
                                <h3 className="heading-md" style={{ marginBottom: '16px', textAlign: 'left' }}>With professional social media marketing in Kerala, businesses can:</h3>
                                <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                                    {[
                                        "Reach highly targeted local audiences",
                                        "Build brand awareness and trust",
                                        "Engage customers consistently",
                                        "Generate quality leads and enquiries",
                                        "Support long-term sales growth"
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569' }}>
                                            <CheckCircle size={20} color="#ce1111" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 3. CHALLENGES & STRATEGY */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive">
                        <div className="grid-2">
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
                                        Why Choose Red Sharc as Your Social Media Marketing Agency in Kerala?
                                    </h2>
                                    <p className="text-body" style={{ color: '#94a3b8', marginBottom: '20px' }}>
                                        Many businesses post regularly but see little to no growth. That’s because success on social media requires the right strategy, execution, and continuous optimization.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {[
                                            "Platform-specific social media strategies",
                                            "Content designed for engagement and conversions",
                                            "Organic + paid social media expertise",
                                            "Transparent reporting and clear insights",
                                            "Kerala-focused audience targeting"
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem' }}>
                                                <CheckCircle size={20} color="#f87171" style={{ flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide-left" delay={200}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '20px', color: '#fecaca' }}>We don’t chase likes—we focus on results.</h3>
                                    <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '20px' }}>
                                        As a performance-focused social media marketing agency in Kerala, Red Sharc allows you to reach the right people at the right time.
                                    </p>
                                    <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                                        From content creation to paid advertising, we handle it all with a clear focus on ROI and business growth.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 4. SERVICES SECTION */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ marginBottom: '60px', color: '#0f172a' }}>Our Social Media Marketing Services in Kerala</h2>
                            <p className="text-body text-center" style={{ color: '#64748b', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 60px' }}>
                                We provide complete social media marketing services in Kerala for startups, local businesses, and growing brands.
                            </p>
                        </ScrollReveal>

                        <div className="grid-3" style={{ marginBottom: '100px' }}>
                            {[
                                { title: "Social Media Strategy & Planning", desc: "We analyze your business, audience, competitors, and industry to create a custom social media roadmap aligned with your goals." },
                                { title: "Content Creation & Branding", desc: "Creative post designs, engaging captions, reels, and brand-consistent visuals." },
                                { title: "Social Media Account Management", desc: "Content scheduling, posting, profile optimization, and community management." },
                                { title: "Paid Social Media Advertising", desc: "Meta Ads (Facebook & Instagram), campaign setup, audience targeting, and lead generation." },
                                { title: "Performance Tracking & Reporting", desc: "Engagement analysis, lead tracking, monthly reports, and continuous improvement." }
                            ].map((service, i) => (
                                <ScrollReveal key={i} animation="zoom-in" delay={i * 50}>
                                    <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(206, 17, 17, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Layers size={20} color="#ce1111" />
                                        </div>
                                        <h3 className="heading-md" style={{ fontSize: '1.25rem', color: '#0f172a' }}>{service.title}</h3>
                                        <p style={{ color: '#64748b', lineHeight: '1.6' }}>{service.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* PLATFORMS */}
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ marginBottom: '60px', color: '#0f172a' }}>Platforms We Manage</h2>
                        </ScrollReveal>
                        <div className="grid-auto-fit" style={{ marginBottom: '100px' }}>
                            {platforms.map((platform, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
                                        <div style={{ background: 'rgba(206, 17, 17, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '10px', marginBottom: '16px' }}>
                                            <platform.icon size={24} color="#ce1111" />
                                        </div>
                                        <h3 className="heading-md" style={{ marginBottom: '12px', color: '#0f172a' }}>{platform.name}</h3>
                                        <p style={{ color: '#64748b', lineHeight: '1.6' }}>{platform.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* PROCESS */}
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ marginBottom: '40px', color: '#0f172a' }}>Our Social Media Marketing Process</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                            {[
                                "Brand & Audience Analysis",
                                "Strategy & Content Planning",
                                "Content Creation & Campaign Execution",
                                "Monitoring & Optimization",
                                "Reporting & Growth Insights"
                            ].map((step, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div style={{
                                        padding: '16px 24px',
                                        background: '#ce1111',
                                        color: '#fff',
                                        borderRadius: '50px',
                                        fontWeight: 'bold',
                                        fontSize: '0.95rem'
                                    }}>
                                        {i + 1}. {step}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. KPI & METRICS */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ marginBottom: '60px', color: '#0f172a' }}>Key Performance Indicators (KPIs) We Track</h2>
                        </ScrollReveal>
                        <div className="grid-3">
                            <ScrollReveal animation="fade-up">
                                <div style={{ padding: '32px', background: '#f8fafc', borderRadius: '24px' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '20px', color: '#0f172a' }}>Organic Social Media</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {["Reach and impressions", "Engagement rate", "Follower growth", "Content performance"].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#64748b' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ce1111' }}></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={100}>
                                <div style={{ padding: '32px', background: 'rgba(206, 17, 17, 0.05)', borderRadius: '24px' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '20px', color: '#b91c1c' }}>Paid Social Media</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {["Leads and conversions", "Cost per lead (CPL)", "Click-through rate (CTR)", "Return on ad spend (ROAS)"].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#991b1b' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#b91c1c' }}></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={200}>
                                <div style={{ padding: '32px', background: '#f1f5f9', borderRadius: '24px' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '20px', color: '#334155' }}>Business Impact</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {["Enquiries generated", "Website traffic from social", "Conversion quality", "Overall campaign ROI"].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#1e293b' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ce1111' }}></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 6. CASE STUDIES */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ marginBottom: '60px' }}>Social Media Marketing Success in Kerala</h2>
                        </ScrollReveal>
                        <div className="grid-2">
                            <ScrollReveal animation="slide-right">
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '16px', color: '#fecaca' }}>Local Retail Brand – Kochi</h3>
                                    <div style={{ marginBottom: '16px' }}>
                                        <strong style={{ color: '#fff' }}>Challenge:</strong> <span style={{ color: '#94a3b8' }}>Low engagement and poor visibility</span>
                                    </div>
                                    <div style={{ marginBottom: '16px' }}>
                                        <strong style={{ color: '#fff' }}>Solution:</strong> <span style={{ color: '#94a3b8' }}>Content strategy, creative redesign, Meta Ads</span>
                                    </div>
                                    <div>
                                        <strong style={{ color: '#fff' }}>Result:</strong> <span style={{ color: '#4ade80' }}>Increased engagement, better reach, consistent enquiries</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide-left" delay={200}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '16px', color: '#fecaca' }}>Service Business – Trivandrum</h3>
                                    <div style={{ marginBottom: '16px' }}>
                                        <strong style={{ color: '#fff' }}>Challenge:</strong> <span style={{ color: '#94a3b8' }}>No leads from social media</span>
                                    </div>
                                    <div style={{ marginBottom: '16px' }}>
                                        <strong style={{ color: '#fff' }}>Solution:</strong> <span style={{ color: '#94a3b8' }}>Lead-focused ad campaigns and conversion optimization</span>
                                    </div>
                                    <div>
                                        <strong style={{ color: '#fff' }}>Result:</strong> <span style={{ color: '#4ade80' }}>Steady lead flow with reduced cost per lead</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 7. TOOLS & ETHICS */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <div className="grid-2">
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 className="heading-lg" style={{ marginBottom: '30px', color: '#0f172a' }}>Tools We Use</h2>
                                    <p style={{ marginBottom: '30px', color: '#64748b' }}>
                                        To deliver high-performance social media marketing in Kerala, we use:
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
                                        {['Meta Business Manager', 'Platform Analytics', 'Content Scheduling', 'Performance Tracking'].map((tool, i) => (
                                            <span key={i} style={{
                                                background: '#f8fafc',
                                                padding: '10px 20px',
                                                borderRadius: '8px',
                                                fontWeight: '600',
                                                color: '#0f172a',
                                                border: '1px solid #e2e8f0'
                                            }}>
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                    <p style={{ color: '#64748b', fontStyle: 'italic' }}>Every decision is backed by data.</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="slide-left">
                                <div style={{ background: 'rgba(206, 17, 17, 0.05)', padding: '40px', borderRadius: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                        <ShieldCheck size={32} color="#ce1111" />
                                        <h2 className="heading-md" style={{ color: '#991b1b', margin: 0 }}>Our Ethical Promise</h2>
                                    </div>
                                    <p style={{ marginBottom: '24px', color: '#7f1d1d' }}>
                                        As a professional social media marketing agency in Kerala, Red Sharc follows ethical practices:
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {["No fake followers or engagement", "No misleading ads", "No spam tactics", "Only real audiences & real growth"].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#7f1d1d' }}>
                                                <CheckCircle size={18} color="#ce1111" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 8. SERVICE AREAS & FAQ */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">


                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <h3 className="heading-lg text-center" style={{ marginBottom: '40px', color: '#0f172a' }}>Frequently Asked Questions</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {faqs.map((faq, index) => (
                                    <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                                        <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                                            <button
                                                onClick={() => toggleFaq(index)}
                                                style={{
                                                    width: '100%', textAlign: 'left', padding: '24px', background: 'none', border: 'none',
                                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: '#0f172a'
                                                }}
                                            >
                                                <span style={{ fontSize: '1rem', fontWeight: '600' }}>{faq.question}</span>
                                                {openFaq === index ? <ChevronUp size={20} color="#64748b" /> : <ChevronDown size={20} color="#64748b" />}
                                            </button>
                                            {openFaq === index && (
                                                <div style={{ padding: '0 24px 24px', color: '#64748b', lineHeight: '1.6' }}>
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. FINAL CTA */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff', textAlign: 'center' }}>
                    <div className="container-responsive" style={{ maxWidth: '800px' }}>
                        <ScrollReveal animation="zoom-in">
                            <div style={{ background: '#ce1111', padding: '60px 40px', borderRadius: '32px' }}>
                                <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
                                    Ready to Grow with the Best Social Media Marketing Agency in Kerala?
                                </h2>
                                <p className="text-body-lg" style={{ marginBottom: '30px', opacity: '0.9' }}>
                                    If you’re looking for a reliable social media marketing agency in Kerala that delivers real business results, Red Sharc is your growth partner.
                                </p>
                                <div className="flex-mobile-col" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <button className="btn-responsive" style={{
                                        background: '#fff',
                                        color: '#ce1111',
                                        border: 'none',
                                        padding: '16px 40px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}>
                                        Get a Free Social Media Audit
                                    </button>
                                    <button className="btn-responsive" style={{
                                        background: 'transparent',
                                        color: '#fff',
                                        border: '2px solid #fff',
                                        padding: '14px 38px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}>
                                        Book a Strategy Call
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SMMPage;
