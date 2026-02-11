import React from 'react';
import { Briefcase, Users, Star, Globe } from 'lucide-react';
import './Stats.css';

const stats = [
    { icon: <Briefcase size={32} />, value: "500+", label: "Projects Delivered" },
    { icon: <Users size={32} />, value: "150+", label: "Expert Freelancers" },
    { icon: <Star size={32} />, value: "98%", label: "Client Satisfaction" },
    { icon: <Globe size={32} />, value: "50+", label: "Countries Served" }
];

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
