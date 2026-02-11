import React from 'react';
import { Phone, Users, Rocket, Target } from 'lucide-react';
import './HowItWorks.css';

const steps = [
    { icon: <Phone size={32} />, title: "Discovery Call", desc: "We discuss your vision, goals, and project requirements." },
    { icon: <Users size={32} />, title: "Team Assembly", desc: "We instantly match you with vetted specialists perfect for the job." },
    { icon: <Rocket size={32} />, title: "Execution", desc: "Collaborative development with regular updates and transparency." },
    { icon: <Target size={32} />, title: "Delivery & Support", desc: "Launch with confidence and optional ongoing optimization." }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">From Idea to Launch in 4 Simple Steps</h2>
                    <p className="section-subtitle">No bureaucracy, just results. Here's how we work.</p>
                </div>

                <div className="steps-container">
                    <div className="timeline-line"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-icon-wrapper">
                                {step.icon}
                                <div className="step-number">{index + 1}</div>
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
