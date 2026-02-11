import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import {
    Search, BarChart2, Globe, TrendingUp, AlertTriangle, CheckCircle,
    ChevronDown, ChevronUp, ArrowRight, ShieldCheck, MapPin,
    FileText, Zap, Target, Settings, Layers
} from 'lucide-react';

const SEOPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does it take to see results from SEO services in Kerala?",
            answer: "SEO is a long-term strategy. Most businesses start seeing visible improvements within 3 to 4 months, while strong and stable results build over time depending on competition and industry."
        },
        {
            question: "Why should I choose RedShark as the best SEO company in Kerala?",
            answer: "Unlike many agencies that focus only on reports, we focus on execution and measurable growth. Our strategies are customized, transparent, and aligned with your business goals."
        },
        {
            question: "Do you provide local SEO services in Kerala?",
            answer: "Yes. Our SEO services include complete local SEO optimization for businesses targeting customers in Kerala, including Google Business Profile optimization and location-based keyword strategies."
        },
        {
            question: "Is SEO better than paid ads?",
            answer: "SEO delivers long-term organic growth, while paid ads provide faster visibility. As a full-service digital marketing agency, we often recommend combining both for maximum results."
        },
        {
            question: "Which businesses can benefit from your SEO agency in Kerala?",
            answer: "Our SEO services are ideal for startups, local businesses, SMEs, and established brands looking for sustainable online growth."
        }
    ];

    const services = [
        {
            title: "Keyword Research & SEO Strategy",
            desc: "We identify high-intent keywords your customers are actively searching for and build a strategy focused on conversions—not just traffic.",
            icon: Target
        },
        {
            title: "On-Page SEO Optimization",
            items: ["Meta titles & descriptions", "Content optimization", "Header tags (H1–H6)", "URL structure & internal linking"],
            icon: FileText
        },
        {
            title: "Technical SEO",
            items: ["Website speed optimization", "Mobile responsiveness", "Core Web Vitals improvement", "Crawlability & indexation fixes", "Schema & structured data setup"],
            icon: Settings
        },
        {
            title: "Local SEO (Kerala-Focused)",
            items: ["Google Business Profile optimization", "Local keyword targeting", "Location-based SEO strategies", "NAP consistency & local citations"],
            icon: MapPin
        },
        {
            title: "Link Building & Authority Growth",
            desc: "We build high-quality, relevant backlinks that improve domain authority and long-term rankings—no spam, no risky shortcuts.",
            icon: Globe
        },
        {
            title: "SEO Tracking & Reporting",
            items: ["Keyword ranking reports", "Organic traffic analysis", "Conversion tracking", "Monthly performance insights"],
            icon: BarChart2
        }
    ];

    return (
        <div className="page-wrapper" style={{ backgroundColor: '#fff', color: '#334155' }}>
            <Header />

            <main style={{ paddingTop: '80px' }}>
                {/* 1. HERO SECTION */}
                <section className="section-responsive text-center" style={{ position: 'relative' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <div style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                background: 'rgba(206, 17, 17, 0.1)',
                                borderRadius: '50px',
                                color: '#ce1111',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '24px'
                            }}>
                                Best SEO Company in Kerala
                            </div>
                            <h1 className="heading-xl" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                Best SEO Company in <span style={{ color: '#dc2626' }}>Kerala</span>
                            </h1>
                            <p className="text-body-lg" style={{ color: '#64748b', maxWidth: '900px', margin: '0 auto 40px' }}>
                                Looking for the best SEO company in Kerala to grow your online visibility and generate consistent leads? You're in the right place. At RedShark, we provide result-driven SEO services in Kerala that help businesses rank higher on Google, attract quality traffic, and convert visitors into customers.
                            </p>
                            <p className="text-body" style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto 40px' }}>
                                We don't believe in shortcuts or generic SEO packages. Our approach is strategic, data-backed, and focused on real business growth.
                            </p>
                            <div className="flex-mobile-col" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary btn-responsive">
                                    Get a Free SEO Audit
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

                {/* 2. WHY CHOOSE REDSHARK */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>Why Choose RedShark as Your SEO Agency in Kerala?</h2>
                                <p style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
                                    While many agencies focus only on plans and reports, we focus on execution and results. As a trusted SEO agency in Kerala, our goal is to deliver measurable outcomes—not vanity rankings.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid-auto-fit">
                            {[
                                { title: "Strategy-first, ROI-focused SEO", icon: Target },
                                { title: "Transparent reporting and clear communication", icon: CheckCircle },
                                { title: "Industry-specific keyword targeting", icon: Search },
                                { title: "Ethical, white-hat SEO practices", icon: ShieldCheck },
                                { title: "Dedicated SEO experts focused on growth", icon: TrendingUp }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#fff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div style={{ background: 'rgba(206, 17, 17, 0.1)', padding: '12px', borderRadius: '8px', flexShrink: 0 }}>
                                            <item.icon size={24} color="#ce1111" />
                                        </div>
                                        <h3 className="heading-sm" style={{ color: '#0f172a', margin: 0 }}>{item.title}</h3>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal animation="fade-up">
                            <p className="text-body" style={{ color: '#64748b', textAlign: 'center', marginTop: '40px', maxWidth: '800px', margin: '40px auto 0' }}>
                                As part of our full-stack approach, we also operate as the <strong>best digital marketing agency in Kerala</strong>, offering integrated solutions that go beyond SEO.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 3. OUR SEO SERVICES */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '16px' }}>Our SEO Services in Kerala</h2>
                            <p className="text-body text-center" style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto 60px' }}>
                                We offer end-to-end SEO services in Kerala designed for startups, local businesses, and growing brands.
                            </p>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {services.map((service, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#f8fafc', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                            <div style={{ background: 'rgba(206, 17, 17, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                                <service.icon size={24} color="#ce1111" />
                                            </div>
                                            <h3 className="heading-md" style={{ color: '#0f172a' }}>{service.title}</h3>
                                        </div>
                                        {service.desc && <p style={{ color: '#64748b', lineHeight: '1.6' }}>{service.desc}</p>}
                                        {service.items && (
                                            <ul style={{ paddingLeft: '20px', color: '#64748b', lineHeight: '1.8', marginTop: '12px' }}>
                                                {service.items.map((item, j) => (
                                                    <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. SEO + DIGITAL MARKETING */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive text-center" style={{ maxWidth: '900px' }}>
                        <ScrollReveal animation="zoom-in">
                            <h2 className="heading-lg" style={{ marginBottom: '24px' }}>SEO That Works Better with Digital Marketing</h2>
                            <p className="text-body" style={{ color: '#94a3b8', marginBottom: '30px' }}>
                                SEO performs best when supported by a complete growth strategy. As the best digital marketing agency in Kerala, we integrate SEO with Google Ads, conversion optimization, and social media marketing services in Kerala to accelerate results and build long-term brand visibility.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 5. WHO CAN BENEFIT */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Who Can Benefit from Our SEO Services in Kerala?</h2>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {[
                                "Small & medium businesses seeking consistent leads",
                                "Startups aiming for sustainable organic growth",
                                "Local businesses targeting customers across Kerala",
                                "Brands looking to reduce dependency on paid ads"
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#fff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <CheckCircle size={20} color="#ce1111" style={{ flexShrink: 0 }} />
                                        <p style={{ color: '#475569', margin: 0 }}>{item}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                        <ScrollReveal animation="fade-up">
                            <p className="text-body" style={{ color: '#64748b', textAlign: 'center', marginTop: '40px' }}>
                                If long-term growth matters to you, our SEO strategies are built for exactly that.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 6. WHAT YOU CAN EXPECT */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>What You Can Expect from Our SEO Agency in Kerala</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                            {[
                                "Improved Google search visibility",
                                "Higher-quality organic traffic",
                                "Better engagement and conversions",
                                "Long-term ranking stability"
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-in" delay={i * 100} style={{ flex: '1 1 200px' }}>
                                    <div style={{
                                        padding: '24px',
                                        background: '#f8fafc',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e8f0',
                                        textAlign: 'center',
                                        height: '100%'
                                    }}>
                                        <CheckCircle size={32} color="#ce1111" style={{ margin: '0 auto 12px', display: 'block' }} />
                                        <p style={{ fontSize: '1rem', color: '#0f172a', fontWeight: '600' }}>{item}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                        <ScrollReveal animation="fade-up">
                            <p className="text-body" style={{ color: '#64748b', textAlign: 'center', marginTop: '40px' }}>
                                We focus on outcomes that impact your business—not just reports.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 7. OUR PROCESS */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>Our SEO Process – How We Deliver Real Results</h2>
                                <p style={{ color: '#64748b' }}>As the best SEO company in Kerala, we follow a clear, proven process focused on execution—not guesswork.</p>
                            </div>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                            {[
                                { step: "1. SEO Audit & Discovery", desc: "We analyze your website, competitors, and market to understand exactly where growth opportunities exist." },
                                { step: "2. Strategy & Keyword Mapping", desc: "Based on research, we build a custom SEO roadmap aligned with your business goals and target audience." },
                                { step: "3. Implementation & Optimization", desc: "From on-page and technical SEO to content and local optimization, our team executes every step with precision." },
                                { step: "4. Monitoring & Continuous Improvement", desc: "As a performance-focused SEO agency in Kerala, we track results, refine strategies, and optimize continuously for better rankings and conversions." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-in" delay={i * 150} style={{ flex: '1 1 250px' }}>
                                    <div style={{
                                        padding: '24px',
                                        background: '#fff',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e8f0',
                                        height: '100%'
                                    }}>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#ce1111', marginBottom: '8px' }}>{item.step}</div>
                                        <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                        <ScrollReveal animation="fade-up">
                            <p className="text-body" style={{ color: '#0f172a', textAlign: 'center', marginTop: '40px', fontWeight: '600' }}>
                                Our goal is simple: sustainable growth that delivers measurable business impact.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 8. TOOLS WE USE */}
                <section className="section-responsive text-center" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>SEO Tools We Use to Deliver Results</h2>
                            <p className="text-body" style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto 40px' }}>
                                As the best SEO company in Kerala, we rely on industry-leading SEO tools to ensure every decision is data-driven and every strategy is measurable.
                            </p>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', opacity: '0.8' }}>
                            {[
                                'Google Analytics',
                                'Google Search Console',
                                'Keyword Research Tools',
                                'Competitor Analysis Tools',
                                'Technical SEO Audit Tools',
                                'Rank Tracking Tools',
                                'Content Optimization Tools'
                            ].map((tool, i) => (
                                <ScrollReveal key={i} animation="zoom-in" delay={i * 50}>
                                    <span style={{
                                        padding: '10px 20px',
                                        background: '#f8fafc',
                                        borderRadius: '30px',
                                        fontSize: '0.95rem',
                                        fontWeight: '600',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                        color: '#475569',
                                        display: 'inline-block',
                                        border: '1px solid #e2e8f0'
                                    }}>
                                        {tool}
                                    </span>
                                </ScrollReveal>
                            ))}
                        </div>
                        <ScrollReveal animation="fade-up">
                            <p className="text-body" style={{ color: '#64748b', marginTop: '40px' }}>
                                By combining these tools with expert strategy and execution, our SEO services in Kerala deliver consistent, sustainable growth.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 9. CASE STUDIES */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <span style={{ color: '#ce1111', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>SUCCESS STORIES</span>
                                <h2 className="heading-lg" style={{ margin: '16px 0' }}>Case Studies – SEO Success Stories from Kerala</h2>
                            </div>
                        </ScrollReveal>

                        <div className="grid-2" style={{ gap: '40px' }}>
                            <ScrollReveal animation="fade-up">
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '20px' }}>Case Study 1: Local Service Business – Kollam</h3>
                                    <p style={{ color: '#94a3b8', marginBottom: '8px', fontWeight: '600' }}>Industry: Home Services</p>

                                    <div style={{ marginTop: '24px' }}>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>CHALLENGE</h4>
                                        <p style={{ fontSize: '1rem' }}>Low Google visibility and heavy dependency on paid ads</p>
                                    </div>

                                    <div style={{ marginTop: '20px' }}>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>OUR APPROACH</h4>
                                        <ul style={{ paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.8' }}>
                                            <li>Local keyword research</li>
                                            <li>Google Business Profile optimization</li>
                                            <li>On-page & technical SEO</li>
                                            <li>Location-based content strategy</li>
                                        </ul>
                                    </div>

                                    <div style={{ marginTop: '20px' }}>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>RESULTS</h4>
                                        <ul style={{ paddingLeft: '20px', color: '#ce1111', lineHeight: '1.8', fontWeight: '600' }}>
                                            <li>Strong improvement in local keyword rankings</li>
                                            <li>Consistent inbound leads from organic search</li>
                                            <li>Reduced reliance on paid advertising</li>
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '20px' }}>Case Study 2: Education & Training Institute – Kottayam</h3>
                                    <p style={{ color: '#94a3b8', marginBottom: '8px', fontWeight: '600' }}>Industry: Education</p>

                                    <div style={{ marginTop: '24px' }}>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>CHALLENGE</h4>
                                        <p style={{ fontSize: '1rem' }}>Poor search visibility despite quality courses</p>
                                    </div>

                                    <div style={{ marginTop: '20px' }}>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>OUR APPROACH</h4>
                                        <ul style={{ paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.8' }}>
                                            <li>Competitor and keyword gap analysis</li>
                                            <li>Content and technical SEO optimization</li>
                                            <li>Conversion-focused landing pages</li>
                                        </ul>
                                    </div>

                                    <div style={{ marginTop: '20px' }}>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>RESULTS</h4>
                                        <ul style={{ paddingLeft: '20px', color: '#ce1111', lineHeight: '1.8', fontWeight: '600' }}>
                                            <li>Higher rankings for course-related keywords</li>
                                            <li>Increased organic enquiries from Kerala</li>
                                            <li>Improved brand visibility in Kottayam</li>
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 10. ETHICAL SEO PROMISE */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive text-center" style={{ maxWidth: '800px' }}>
                        <ScrollReveal animation="zoom-in">
                            <ShieldCheck size={48} color="#ce1111" style={{ margin: '0 auto 24px', display: 'block' }} />
                            <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '24px' }}>Our Ethical SEO Promise</h2>
                            <p className="text-body" style={{ color: '#64748b' }}>
                                We strictly follow Google's white-hat SEO guidelines. As a professional SEO agency in Kerala, we never use spammy backlinks, keyword stuffing, or risky techniques that can harm your website in the long run.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 11. FAQ */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive" style={{ maxWidth: '800px' }}>
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Frequently Asked Questions – SEO Services in Kerala</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {faqs.map((faq, index) => (
                                <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                                    <div style={{ background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            style={{
                                                width: '100%', textAlign: 'left', padding: '24px', background: 'none', border: 'none',
                                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer'
                                            }}
                                        >
                                            <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f172a' }}>{faq.question}</span>
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
                </section>

                {/* 12. CTA */}
                <section style={{ padding: '80px 20px', background: '#fff' }}>
                    <ScrollReveal animation="zoom-in">
                        <div style={{
                            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                            borderRadius: '32px',
                            padding: '80px 40px',
                            textAlign: 'center',
                            color: '#fff',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                            <h2 className="heading-xl" style={{ marginBottom: '24px', letterSpacing: '-1px' }}>
                                Ready to Work with the Best SEO Company in Kerala?
                            </h2>
                            <p className="text-body-lg" style={{ opacity: '0.9', maxWidth: '700px', margin: '0 auto 40px' }}>
                                If you're looking for a reliable SEO agency in Kerala that focuses on execution, transparency, and real growth, RedShark is your trusted partner.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                <button className="btn-responsive" style={{
                                    background: '#fff',
                                    color: '#dc2626',
                                    border: 'none',
                                    padding: '18px 48px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)',
                                    marginRight: '16px'
                                }}>
                                    Get a Free SEO Audit
                                </button>
                                <button className="btn-responsive" style={{
                                    background: 'transparent',
                                    color: '#fff',
                                    border: '2px solid #fff',
                                    padding: '16px 48px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}>
                                    Book a Strategy Call
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* 13. SEO FOOTER CONTENT */}
                <section style={{ padding: '60px 20px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', textAlign: 'center' }}>
                    <div className="container-responsive" style={{ maxWidth: '800px' }}>
                        <p>
                            RedShark is a results-driven digital marketing agency offering SEO services in Kerala. We help businesses grow through ethical, data-driven strategies focused on improving online visibility, generating quality leads, and building long-term growth.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SEOPage;
