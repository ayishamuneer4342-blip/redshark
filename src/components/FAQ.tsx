import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
    { question: "How do you vet your freelancers?", answer: "We have a rigorous 3-stage process including portfolio review, technical challenge, and soft-skills interview. Only the top 3% make it in." },
    { question: "What is the turnaround time?", answer: "Most projects kick off within 48 hours. Small tasks are done in days, complex builds in weeks. We're generally 2x faster than traditional agencies." },
    { question: "Do I have to manage the freelancers?", answer: "No. You get a dedicated Project Manager who handles all coordination, quality control, and communication." },
    { question: "What if I'm not satisfied?", answer: "We offer a 14-day money-back guarantee. If the work doesn't meet the scope, we revise it or refund you." },
    { question: "Can I scale my team up or down?", answer: "Absolutely. That's our main advantage. Add 5 devs for a sprint, then scale back down. No penalties." }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title text-center mb-4">Frequently Asked Questions</h2>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggle(index)}>
                            <div className="faq-question">
                                {faq.question}
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
