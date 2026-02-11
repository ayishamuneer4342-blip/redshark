import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import { Code, Smartphone, Zap, Lock, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Layout, Database, Server, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const WebDevPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does a website take to build?",
            answer: "A standard corporate website takes 4-6 weeks. Custom web applications or complex e-commerce platforms typically take 8-12 weeks. We provide a detailed timeline during discovery."
        },
        {
            question: "Will I be able to edit the website myself?",
            answer: "Yes. We build on user-friendly CMS platforms (like WordPress or headless CMS for React apps). We provide full training so your team can update text, images, and blogs without a developer."
        },
        {
            question: "Do you provide hosting and maintenance?",
            answer: "We offer premium managed hosting and maintenance packages. We handle security updates, backups, and speed optimizations so you never have to worry about downtime."
        },
        {
            question: "Is it mobile responsive?",
            answer: "100%. We design mobile-first. Your site will look and function flawlessly on every screen size, from the smallest iPhone to the largest desktop monitor."
        }
    ];

    return (
        <div className="page-wrapper" style={{ backgroundColor: '#fff', color: '#334155' }}>
            <SEO
                title="Web Development Company in Kerala | Custom Websites"
                description="Red Sharc is a top web development company in Kerala building fast, secure, and conversion-focused websites and applications."
                canonical="https://redsharc.com/web-development"
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
                                background: 'rgba(206, 17, 17, 0.1)',
                                borderRadius: '50px',
                                color: '#ce1111',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '24px'
                            }}>
                                Future-Proof Web Development
                            </div>
                            <h1 className="heading-xl" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                Websites that Wow.<br />
                                <span style={{ color: '#dc2626' }}>Engineered to Convert.</span>
                            </h1>
                            <p className="text-body-lg" style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto 40px' }}>
                                Pretty isn't enough. We build lightning-fast, secure, and user-centric websites that turn visitors into loyal customers.
                            </p>
                            <div className="flex-mobile-col" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary btn-responsive">
                                    Start Your Project
                                </button>
                                <Link to="/case-studies" className="btn btn-secondary btn-responsive" style={{
                                    background: '#fff',
                                    color: '#0f172a',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    View Portfolio
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 2. PROBLEM / AGITATION */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <div className="grid-2">
                            <ScrollReveal animation="slide-right">
                                <div>
                                    <h2 className="heading-lg" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                        Is your website costing you business?
                                    </h2>
                                    <p className="text-body" style={{ color: '#64748b', marginBottom: '20px' }}>
                                        Your website is your 24/7 salesperson. If it's slow, broken, or confusing, you're handing money to competitors.
                                    </p>
                                    <p className="text-body" style={{ color: '#64748b', marginBottom: '20px' }}>
                                        We optimize every line of code to ensure instant load times. Speed isn't just a feature; it's a requirement for ranking and conversion.
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
                                    <h3 className="heading-md" style={{ marginBottom: '24px' }}>Common Pitfalls</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {[
                                            "Site takes more than 3 seconds to load",
                                            "Looks terrible on mobile devices",
                                            "Impossible for your team to update easily",
                                            "Low security and frequent downtime",
                                            "Poor SEO structure holding you back",
                                            "Confusing navigation that kills sales"
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem', color: '#475569' }}>
                                                <AlertTriangle size={20} color="#ef4444" style={{ flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 3. WHY BUSINESSES CHOOSE US */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>Why Businesses Choose Red Sharc</h2>
                                <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                                    We don't just write code; we build digital assets that grow your business.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid-auto-fit">
                            {[
                                { title: "Mobile-First Design", desc: "Built for the 70% of users who browse on their phones." },
                                { title: "Blazing Speed", desc: "Sub-second load times using next-gen frameworks like Next.js." },
                                { title: "SEO-Baked In", desc: "Perfect semantic HTML and schema markup from day one." },
                                { title: "Easy Management", desc: "User-friendly CMS solutions so you can edit content without a developer." },
                                { title: "Bank-Grade Security", desc: "Advanced protection against hacks, DDoS, and data breaches." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                        <h3 className="heading-md" style={{ marginBottom: '10px', color: '#0f172a' }}>{item.title}</h3>
                                        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. INDUSTRIES WE SERVE */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ marginBottom: '60px' }}>Industries We Power</h2>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {[
                                { title: "SaaS & Tech", desc: "Scalable dashboards and customer portals." },
                                { title: "E-Commerce", desc: "High-conversion shops on Shopify or WooCommerce." },
                                { title: "Real Estate", desc: "Fast property listings with advanced filtering." },
                                { title: "Corporate", desc: "Professional brand presence for enterprise clients." },
                                { title: "Healthcare", desc: "HIPAA-compliant patient booking systems." },
                                { title: "Education", desc: "LMS platforms and course enrollment sites." }
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

                {/* 5. WHAT IS WEB DEV */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive text-center" style={{ maxWidth: '1000px' }}>
                        <ScrollReveal animation="zoom-in">
                            <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '24px' }}>Why Professional Development Matters</h2>
                            <p className="text-body" style={{ color: '#64748b', marginBottom: '30px' }}>
                                In the digital age, your website is often the first point of contact between you and your customers. DIY builders are limited, slow, and generic. Custom development offers the freedom to build exactly what your business needs.
                            </p>
                            <p className="text-body" style={{ color: '#64748b' }}>
                                A professionally developed website establishes credibility, improves search engine rankings, and provides a seamless user experience that DIY tools simply cannot match.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 6. OUR SERVICES */}
                <section className="section-responsive" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Our Development Services</h2>
                        </ScrollReveal>
                        <div className="grid-auto-fit">
                            {[
                                { title: "Custom Web Apps", items: ["React/Next.js Applications", "SaaS Platforms", "Customer Portals", "API Integrations"], icon: Code },
                                { title: "E-Commerce", items: ["Shopify Development", "WooCommerce", "Headless Commerce", "Payment Gateway Setup"], icon: ShoppingCart },
                                { title: "CMS Development", items: ["Custom WordPress Themes", "Headless CMS (Strapi/Sanity)", "Easy Content Management", "Blog Migration"], icon: Layout },
                                { title: "UI/UX Design", items: ["Wireframing & Prototyping", "User Journey Mapping", "Mobile-First Design", "Brand Identity"], icon: Zap },
                                { title: "Maintenance & Support", items: ["Security Updates", "Speed Optimization", "Daily Backups", "24/7 Monitoring"], icon: Server },
                                { title: "API Microservices", items: ["Database Design", "Cloud Infrastructure", "Third-party Integrations", "Serverless Functions"], icon: Database }
                            ].map((service, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                                    <div className="card-base" style={{ background: '#fff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                            <div style={{ background: 'rgba(206, 17, 17, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                                <service.icon size={24} color="#ce1111" />
                                            </div>
                                            <h3 className="heading-md" style={{ color: '#0f172a' }}>{service.title}</h3>
                                        </div>
                                        <ul style={{ paddingLeft: '20px', color: '#64748b', lineHeight: '1.8' }}>
                                            {service.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. OUR PROCESS */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ color: '#0f172a', marginBottom: '16px' }}>The Red Sharc Digital Stack</h2>
                                <p style={{ color: '#64748b' }}>From idea to launch, our process ensures excellence.</p>
                            </div>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                            {[
                                { step: "1. Discovery", desc: "Mapping out user journeys and technical requirements." },
                                { step: "2. Design", desc: "Creating high-fidelity wireframes that align with your brand." },
                                { step: "3. Build", desc: "Clean, modular code using modern frameworks." },
                                { step: "4. Test", desc: "Rigorous QA for speed, mobile, and security." },
                                { step: "5. Launch", desc: "Seamless deployment with zero downtime." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-in" delay={i * 150} style={{ flex: '1 1 200px' }}>
                                    <div style={{
                                        padding: '24px',
                                        background: '#f8fafc',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e8f0',
                                        textAlign: 'center',
                                        height: '100%'
                                    }}>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0f172a', marginBottom: '8px' }}>{item.step}</div>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. TOOLS & TECH */}
                <section className="section-responsive text-center" style={{ background: '#f8fafc' }}>
                    <div className="container-responsive">
                        <ScrollReveal>
                            <h2 className="heading-md" style={{ color: '#0f172a', marginBottom: '40px' }}>Our Technology Stack</h2>
                        </ScrollReveal>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', opacity: '0.7' }}>
                            {['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'MongoDB', 'WordPress', 'Shopify', 'AWS', 'Vercel'].map((tool, i) => (
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

                {/* 9. CASE STUDY */}
                <section className="section-responsive" style={{ background: '#0f172a', color: '#fff' }}>
                    <div className="container-responsive" style={{ maxWidth: '1000px' }}>
                        <ScrollReveal>
                            <div className="text-center" style={{ marginBottom: '40px' }}>
                                <span style={{ color: '#f87171', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>SUCCESS STORY</span>
                                <h2 className="heading-lg" style={{ margin: '16px 0' }}>Rebuilding a Luxury PropTech Platform</h2>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up">
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div className="grid-auto-fit">
                                    <div>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>CHALLENGE</h4>
                                        <p style={{ fontSize: '1.1rem' }}>Legacy site was slow (6s load) and impossible to filter properties.</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>SOLUTION</h4>
                                        <p style={{ fontSize: '1.1rem' }}>Headless Next.js app with advanced filtering.</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>RESULT</h4>
                                        <p style={{ fontSize: '1.1rem', color: '#ce1111', fontWeight: 'bold' }}>0.4s load time and +150% in lead submissions.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 10. FAQ */}
                <section className="section-responsive" style={{ background: '#fff' }}>
                    <div className="container-responsive" style={{ maxWidth: '800px' }}>
                        <ScrollReveal>
                            <h2 className="heading-lg text-center" style={{ color: '#0f172a', marginBottom: '60px' }}>Frequently Asked Questions</h2>
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

                {/* 11. CTA */}
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
                                Ready to Upgrade Your Digital Presence?
                            </h2>
                            <p className="text-body-lg" style={{ opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px' }}>
                                Let's build a website that you're proud of and that your customers love.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                <button className="btn-responsive" style={{
                                    background: '#fff',
                                    color: '#dc2626',
                                    border: 'none',
                                    padding: '18px 48px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)'
                                }}>
                                    Start Your Project
                                </button>
                                <span style={{ fontSize: '0.9rem', opacity: '0.8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <ShieldCheck size={16} /> Fast turnaround. Pixel perfect.
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* 12. FOOTER BLURB */}
                <section style={{ padding: '60px 20px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', textAlign: 'center' }}>
                    <div className="container-responsive" style={{ maxWidth: '800px' }}>
                        <p>
                            Red Sharc builds high-performance websites and applications. From custom React apps to scalable e-commerce stores, we engineer digital experiences that convert.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default WebDevPage;
