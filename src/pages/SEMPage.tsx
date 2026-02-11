import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import { Target, DollarSign, MousePointer, PieChart, CheckCircle, ChevronDown, ChevronUp, Users, BarChart2, Search, Briefcase, MapPin, Shield, Layers, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEMPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How soon can I expect results from Google Ads?",
            answer: "Google Ads can start driving traffic immediately after campaigns go live. Lead and sales performance usually improves within the first few weeks as campaigns are optimized based on real data."
        },
        {
            question: "Is Google Ads suitable for small and local businesses in Kerala?",
            answer: "Yes. Google Ads is highly effective for small and local businesses when campaigns are targeted correctly. As a Google PPC agency in Kerala, we focus on local intent keywords and cost-efficient strategies to deliver results within your budget."
        },
        {
            question: "What is the difference between Google Ads and SEO?",
            answer: "Google Ads provides instant visibility through paid placements, while SEO services in Kerala focus on long-term organic growth. When combined, they create a balanced strategy for immediate and sustainable results."
        },
        {
            question: "How do you control ad spend and avoid wasted clicks?",
            answer: "We use precise keyword targeting, negative keywords, audience filters, and continuous performance monitoring. This ensures your ad budget is spent only on users with genuine intent."
        },
        {
            question: "Will I get access to my Google Ads account and reports?",
            answer: "Yes. Transparency is essential at Red Sharc. You’ll have full access to your Google Ads account along with clear performance reports and regular updates."
        },
        {
            question: "Why choose Red Sharc as your Google Ads agency in Kerala?",
            answer: "We focus on intent-based targeting, ethical practices, continuous optimization, and measurable ROI. As a results-driven digital marketing agency in Kerala, we treat your growth as our priority."
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
                                background: '#f0fdf4',
                                borderRadius: '50px',
                                color: '#16a34a',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '24px'
                            }}>
                                Google Ads Agency in Kerala
                            </div>
                            <h1 className="heading-xl" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                Google Ads Agency in Kerala That Drives <span style={{ color: '#dc2626' }}>Measurable Growth</span>
                            </h1>
                            <p className="text-body-lg" style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto 40px' }}>
                                If you want customers now, Google Ads is the fastest way to get there. At Red Sharc, we help businesses win high-intent searches through precision-driven Google Ads services in Kerala. Every campaign we run is built to attract the right audience, control costs, and convert clicks into real enquiries and sales.
                            </p>
                            <div className="flex-mobile-col" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary btn-responsive">
                                    Start Your Campaign
                                </button>
                                <Link to="/case-studies" className="btn btn-secondary btn-responsive" style={{
                                    background: '#fff',
                                    color: '#0f172a',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    See Our Results
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 2. WHY CHOOSE RED SHARC */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <div className="grid-2">
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 className="heading-lg" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                        Why Businesses Choose Red Sharc as Their Google PPC Agency in Kerala
                                    </h2>
                                    <p className="text-body" style={{ color: '#64748b', marginBottom: '20px' }}>
                                        Most ad campaigns fail not because of budget—but because of poor strategy and weak optimization. As a results-driven Google Ads agency in Kerala, we approach PPC with clarity and accountability.
                                    </p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide-left" delay={200}>
                                <div style={{
                                    background: '#fff',
                                    padding: '40px',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                }}>
                                    <h3 className="heading-md" style={{ marginBottom: '24px' }}>What sets us apart:</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {[
                                            "Keyword targeting based on buyer intent",
                                            "Ad copy written to drive conversions, not just clicks",
                                            "Smart bidding and budget control",
                                            "Continuous testing and performance refinement",
                                            "Seamless integration with digital marketing agency in Kerala strategies",
                                            "We don’t run ads blindly—we run them with purpose"
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem', color: '#475569' }}>
                                                <CheckCircle size={20} color="#16a34a" style={{ flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 3. WHO SHOULD USE */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Who Should Use Our Google Ads Services in Kerala?</h2>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {[
                                { title: "Local Service Businesses", desc: "Plumbers, electricians, salons, etc.", icon: MapPin },
                                { title: "Startups & Small Businesses", desc: "Quick growth and market entry.", icon: TrendingUp },
                                { title: "Ecommerce Brands", desc: "Direct product sales.", icon: DollarSign },
                                { title: "B2B Companies", desc: "Lead generation for high-ticket items.", icon: Briefcase },
                                { title: "Professional Services", desc: "Clinics, consultants, agencies.", icon: Users },
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                        <div style={{ background: 'rgba(220, 38, 38, 0.1)', padding: '10px', borderRadius: '8px', display: 'inline-block', marginBottom: '15px' }}>
                                            <item.icon size={24} color="#dc2626" />
                                        </div>
                                        <h3 className="heading-md" style={{ marginBottom: '10px', color: '#0f172a' }}>{item.title}</h3>
                                        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                        <div className="text-center" style={{ marginTop: '40px' }}>
                            <p style={{ fontStyle: 'italic', color: '#64748b' }}>If your goal is faster leads, sales, or enquiries, working with a trusted Google PPC agency in Kerala makes a measurable difference.</p>
                        </div>
                    </div>
                </section>

                {/* 4. INDUSTRIES WE SERVE */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ marginBottom: '60px' }}>Industries We Work With</h2>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {[
                                { title: "Real Estate & Construction", desc: "High-value lead generation." },
                                { title: "Healthcare & Clinics", desc: "Patient acquisition." },
                                { title: "Education & Training", desc: "Student enrollments." },
                                { title: "Ecommerce & Retail", desc: "Sales and ROAS focus." },
                                { title: "IT & SaaS", desc: "B2B and software leads." },
                                { title: "Travel & Hospitality", desc: "Bookings and inquiries." },
                                { title: "Local Service Providers", desc: "Hyper-local targeting." }
                            ].map((industry, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <h3 className="heading-md" style={{ marginBottom: '10px', color: '#ce1111' }}>{industry.title}</h3>
                                        <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{industry.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. WHATS INCLUDED */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>What’s Included in Our Google Ads Management</h2>
                                <p style={{ color: '#64748b' }}>When you partner with Red Sharc, you get:</p>
                            </div>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {[
                                "Dedicated Google Ads specialist",
                                "Complete campaign setup & management",
                                "Conversion tracking configuration",
                                "Keyword & competitor research",
                                "Ongoing optimization",
                                "Transparent monthly reporting",
                            ].map((text, i) => (
                                <ScrollReveal key={i} animation="fade-in" delay={i * 100}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        padding: '20px',
                                        background: '#f8fafc',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e8f0'
                                    }}>
                                        <CheckCircle size={24} color="#dc2626" />
                                        <span style={{ fontWeight: '600', color: '#334155' }}>{text}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>


                {/* 6. LOCAL TRUST */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '24px' }}>A Google Ads Agency That Understands Kerala Markets</h2>
                                <p className="text-body" style={{ color: '#64748b', marginBottom: '30px' }}>
                                    Kerala audiences behave differently from national markets. As a Kerala-based Google Ads agency, we understand:
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                                    {["Regional search intent", "Local competition levels", "Language and cultural context", "Location-based targeting strategies"].map((item, i) => (
                                        <span key={i} style={{
                                            padding: '10px 20px',
                                            background: '#fff',
                                            borderRadius: '50px',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                            fontWeight: '600',
                                            color: '#475569'
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-body" style={{ color: '#64748b', marginTop: '30px' }}>
                                    That insight helps us deliver better ROI.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>


                {/* 7. OUR SERVICES */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Our Google Ads & PPC Services in Kerala</h2>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {[
                                { title: "Search Advertising", desc: "Capture customers actively searching for your products or services.", icon: Search },
                                { title: "Display Advertising", desc: "Increase visibility and brand recall across Google’s partner websites.", icon: Layers },
                                { title: "YouTube Advertising", desc: "Tell your brand story and engage audiences with video ads.", icon: MousePointer },
                                { title: "Ecommerce & Shopping Ads", desc: "Drive product sales with optimized Shopping campaigns.", icon: DollarSign },
                                { title: "Remarketing Campaigns", desc: "Reconnect with users who have already shown interest in your business.", icon: Users },
                            ].map((service, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#fff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #f1f5f9' }}>
                                        <div style={{ background: 'rgba(206, 17, 17, 0.1)', padding: '10px', borderRadius: '8px', display: 'inline-block', marginBottom: '20px' }}>
                                            <service.icon size={24} color="#ce1111" />
                                        </div>
                                        <h3 className="heading-md" style={{ color: '#0f172a', marginBottom: '10px' }}>{service.title}</h3>
                                        <p style={{ color: '#64748b' }}>{service.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. EXECUTION FRAMEWORK */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>Our Google Ads Execution Framework</h2>
                                <p style={{ color: '#64748b' }}>Every campaign we manage follows a structured system designed for performance.</p>
                            </div>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                            {[
                                "Market & competitor research",
                                "Keyword intent mapping",
                                "Campaign structure and ad creation",
                                "Conversion tracking and analytics setup",
                                "Ongoing optimization and testing",
                                "Performance review and scaling"
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-in" delay={i * 150} style={{ flex: '1 1 300px' }}>
                                    <div style={{
                                        padding: '24px',
                                        background: '#fff',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e8f0',
                                        textAlign: 'center',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px'
                                    }}>
                                        <div style={{
                                            width: '30px', height: '30px', borderRadius: '50%', background: '#ce1111', color: '#fff',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
                                        }}>
                                            {i + 1}
                                        </div>
                                        <span style={{ fontWeight: '600', color: '#0f172a' }}>{item}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. KPIS */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <div className="text-center" style={{ marginBottom: '40px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>What We Measure: KPIs That Matter</h2>
                                <p style={{ color: '#64748b' }}>We track real business metrics—not vanity numbers.</p>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                                {["Cost per lead (CPL)", "Conversion rate", "Click quality and intent", "Return on ad spend (ROAS)", "Campaign scalability"].map((kpi, i) => (
                                    <div key={i} style={{
                                        padding: '15px 25px',
                                        background: '#f1f5f9',
                                        borderRadius: '8px',
                                        color: '#334155',
                                        fontWeight: '600',
                                        borderLeft: '4px solid #ce1111'
                                    }}>
                                        {kpi}
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 10. SEO + ADS */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <div className="grid-2">
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 className="heading-lg" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                        Google Ads + SEO: Smarter Growth Together
                                    </h2>
                                    <p className="text-body" style={{ color: '#64748b', marginBottom: '20px' }}>
                                        While Google Ads brings immediate traffic, <Link to="/search-engine-optimization" style={{ color: '#ce1111', textDecoration: 'underline' }}>SEO services in Kerala</Link> build long-term visibility and trust. At Red Sharc, we combine both for sustainable growth.
                                    </p>
                                    <p className="text-body" style={{ color: '#64748b', marginBottom: '20px' }}>
                                        As a full-service <Link to="/" style={{ color: '#ce1111', textDecoration: 'underline' }}>digital marketing agency in Kerala</Link>, we align:
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {["Paid search campaigns", "SEO content and landing pages", "Conversion optimization", "Audience data insights"].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#475569' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ce1111' }}></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide-left">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <BarChart2 size={200} color="#e2e8f0" strokeWidth={1} />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>


                {/* 11. CASE EXAMPLES */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive" style={{ maxWidth: '1000px' }}>
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ marginBottom: '60px' }}>Kerala-Based Google Ads Case Examples</h2>
                        </ScrollReveal>
                        <div className="grid-2">
                            <ScrollReveal animation="fade-up">
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: '#fff', marginBottom: '10px' }}>Professional Service Firm – Ernakulam</h3>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '15px' }}><strong>Problem:</strong> Low-quality leads and high ad costs</p>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '15px' }}><strong>Approach:</strong> Intent-focused keywords, refined ad copy, better landing pages</p>
                                    <p style={{ color: '#ce1111', fontWeight: 'bold' }}>Outcome: Improved lead quality and reduced wasted spend</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={150}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: '#fff', marginBottom: '10px' }}>Retail Business – Thrissur</h3>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '15px' }}><strong>Problem:</strong> Poor visibility in competitive searches</p>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '15px' }}><strong>Approach:</strong> Structured Search + Display campaigns with remarketing</p>
                                    <p style={{ color: '#ce1111', fontWeight: 'bold' }}>Outcome: Strong enquiry flow and consistent conversions</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 12. TOOLS WE USE */}
                <section className="section-responsive text-center" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-md" style={{ color: '#0f172a', marginBottom: '40px' }}>Tools We Use for Google PPC Management</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', opacity: '0.8' }}>
                            {['Google Ads platform', 'Keyword research and planning tools', 'GA4 and conversion tracking systems', 'Performance dashboards and reports'].map((tool, i) => (
                                <ScrollReveal key={i} animation="zoom-in" delay={i * 50}>
                                    <span style={{
                                        padding: '10px 20px',
                                        background: '#fff',
                                        borderRadius: '30px',
                                        fontSize: '0.95rem',
                                        fontWeight: '600',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                        color: '#475569',
                                        display: 'inline-block'
                                    }}>
                                        {tool}
                                    </span>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>


                {/* 13. ETHICS */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive text-center">
                        <ScrollReveal>
                            <h2 className="heading-md" style={{ color: '#0f172a', marginBottom: '20px' }}>Transparent & Ethical Advertising Practices</h2>
                            <p style={{ color: '#64748b', marginBottom: '30px' }}>As a responsible Google Ads agency in Kerala, Red Sharc commits to:</p>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
                            {[
                                { text: "Honest ad messaging", icon: Shield },
                                { text: "Legitimate traffic sources", icon: CheckCircle },
                                { text: "No click manipulation", icon: MousePointer },
                                { text: "Full access to campaign data", icon: BarChart2 }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#334155', fontWeight: '500' }}>
                                    <item.icon size={20} color="#16a34a" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 14. FAQ */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive" style={{ maxWidth: '800px' }}>
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>FAQs – Google PPC Services in Kerala</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {faqs.map((faq, index) => (
                                <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                                    <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
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

                {/* 15. CTA */}
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
                                Ready to Partner with a Google PPC Agency in Kerala?
                            </h2>
                            <p className="text-body-lg" style={{ opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px' }}>
                                If you’re searching for a Google Ads agency in Kerala that prioritizes performance over promises, Red Sharc is ready to help.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                <div className="flex-mobile-col" style={{ display: 'flex', gap: '20px' }}>
                                    <button className="btn-responsive" style={{
                                        background: '#fff',
                                        color: '#dc2626',
                                        border: 'none',
                                        padding: '18px 48px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)'
                                    }}>
                                        Request a Free Google Ads Audit
                                    </button>
                                    <button className="btn-responsive" style={{
                                        background: 'transparent',
                                        color: '#fff',
                                        border: '2px solid #fff',
                                        padding: '16px 48px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}>
                                        Schedule a PPC Strategy Session
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SEMPage;
