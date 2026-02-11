import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = () => {
    return (
        <section className="final-cta-section" id="contact">
            <div className="container">
                <div className="cta-box">
                    <h2 className="cta-headline">Ready to Transform Your Digital Presence?</h2>
                    <p className="cta-sub">Join 500+ companies growing faster with our collective. Start your project today.</p>

                    <div className="cta-buttons">
                        <button className="btn btn-primary btn-lg">
                            Schedule Free Consultation <ArrowRight size={20} className="icon-right" />
                        </button>
                        <button className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                            Get Custom Quote
                        </button>
                    </div>

                    <p className="cta-guarantee">🔒 100% Satisfaction Guarantee • No Commitment Required</p>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
