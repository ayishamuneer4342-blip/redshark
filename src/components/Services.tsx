import React from 'react';
import { Palette, Code, PenTool, Search, Share2, BarChart, Bot, Monitor } from 'lucide-react';
import './Services.css';

const services = [
    { icon: <Palette size={32} />, title: "Graphic Design & Branding", desc: "Logos, brand identity, and visual assets that stand out." },
    { icon: <Code size={32} />, title: "Web Development", desc: "Custom websites and applications built with modern tech." },
    { icon: <PenTool size={32} />, title: "Content Creation", desc: "Engaging copy, videos, and graphics for your audience." },
    { icon: <Search size={32} />, title: "SEO & Organic Growth", desc: "Rank higher and drive free traffic to your business." },
    { icon: <Share2 size={32} />, title: "Paid Advertising", desc: "High-ROI campaigns on Google, Meta, and LinkedIn." },
    { icon: <BarChart size={32} />, title: "Performance Marketing", desc: "Data-driven strategies to maximize conversions." },
    { icon: <Bot size={32} />, title: "AI Automation", desc: "Streamline workflows with intelligent bots and automations." },
    { icon: <Monitor size={32} />, title: "Custom Software", desc: "Tailored software solutions for complex business needs." }
];

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">Best Digital Marketing Agency In Kerala</h2>
                    <p className="section-subtitle">Complete digital marketing solutions under one roof . Everything you need to grow your business ,handled by experts .</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
