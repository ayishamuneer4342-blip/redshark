import React from 'react';
import { Award } from 'lucide-react';
import './Team.css';

const stats = [
    { label: "Specialists Across 8 Core Disciplines", value: "150+" },
    { label: "Average Industry Experience", value: "7+ Years" },
    { label: "Combined Projects Delivered", value: "10,000+" },
    { label: "Fortune 500 Companies Served", value: "Trusted By Top Brands" }
];

const certifications = [
    "Google Ads Certified",
    "Meta Blueprint Certified",
    "HubSpot Certified",
    "AWS Certified",
    "Adobe Certified Expert",
    "Certified Scrum Masters"
];

const Team = () => {
    return (
        <section className="team-section">
            <div className="container">
                <h2 className="section-title text-center">World-Class Expertise, Locally Managed</h2>

                <div className="team-stats-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="team-stat-card">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="expertise-container">
                    <h3 className="expertise-title">Our Team's Credentials</h3>

                    <div className="cert-grid">
                        {certifications.map((cert, i) => (
                            <div key={i} className="cert-badge">
                                <Award size={18} className="cert-icon" />
                                <span>{cert}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-affiliations">
                        <p>Team members from top institutions including MIT, Stanford, IIT, Oxford...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
