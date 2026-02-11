import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            // Redirect to Thank You page
            navigate('/thank-you');
        }, 1000);
    };

    return (
        <section className="contact-section" id="contact-form">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title">Let's Work Together</h2>
                        <p className="contact-desc">
                            Ready to start your next project? Fill out the form below and we will get back to you as soon as possible.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <h4>Email Us</h4>
                                <p>hello@redshark.ae</p>
                            </div>
                            <div className="contact-item">
                                <h4>Call Us</h4>
                                <p>+971 50 123 4567</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        {submitted ? (
                            <div className="success-message">
                                <CheckCircle size={48} color="var(--primary)" />
                                <h3>Message Sent!</h3>
                                <p>Redirecting...</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn">
                                    Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
