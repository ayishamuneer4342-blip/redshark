import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './LeadForm.css';

const LeadForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        details: ''
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
        console.log('Lead Form Submitted:', formData);

        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', details: '' });
            // Redirect to Thank You page
            navigate('/thank-you');
        }, 1000);
    };

    return (
        <div className="lead-form-container">
            {submitted ? (
                <div className="lead-success-message">
                    <CheckCircle size={48} color="var(--primary)" />
                    <h3>Details Received!</h3>
                    <p>Redirecting to thank you page...</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="lead-form">
                    <h3 className="lead-form-title">Get a Free Proposal</h3>
                    <div className="form-group-sm">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className="lead-input"
                        />
                    </div>
                    <div className="form-group-sm">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Work Email"
                            className="lead-input"
                        />
                    </div>
                    <div className="form-group-sm">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="lead-input"
                        />
                    </div>
                    <div className="form-group-sm">
                        <textarea
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Project Details (Optional)"
                            className="lead-input lead-textarea"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary lead-submit-btn">
                        Get Started <Send size={16} />
                    </button>
                    <p className="lead-privacy">We respect your privacy. No spam.</p>
                </form>
            )}
        </div>
    );
};

export default LeadForm;
