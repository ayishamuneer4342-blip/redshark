import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';
import loomelleImg from '../assets/loomelle-craft-logo.jpg';

const testimonials = [
    {
        name: "Loomelle Craft",
        role: "Client",
        text: "Loomelle Craft struggled with lead generation in the initial stage. After partnering with Sreyas and the team, we saw a clear improvement in business growth. Finding a reliable digital marketing agency in Kerala is tough, but this team truly delivers results.",
        image: loomelleImg
    },
    {
        name: "Michael Chen",
        role: "Founder, StartUp X",
        text: "I was hesitant about 'freelancers' but these aren't random gig workers. They are true experts. They rebuilt our entire funnel and doubled our conversion rate.",
        image: ""
    },
    {
        name: "Elena Rodriguez",
        role: "Director of Marketing",
        text: "Best decision we made this year. We saved $45k compared to our previous agency and got better results. The transparency is refreshing.",
        image: ""
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title text-center mb-4">What Our Clients Say</h2>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="var(--secondary)" className="star-icon" />)}
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                {t.image ? (
                                    <div className="author-avatar-wrapper">
                                        <img src={t.image} alt={t.name} className="author-avatar-img" />
                                    </div>
                                ) : (
                                    <div className="author-avatar"></div>
                                )}
                                <div>
                                    <div className="author-name">{t.name}</div>
                                    <div className="author-role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
