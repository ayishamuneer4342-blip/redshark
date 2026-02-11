import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYouPage = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main style={{
                paddingTop: '80px',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--bg-darker)'
            }}>
                <div className="container" style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div style={{
                        background: '#fff',
                        padding: '60px 40px',
                        borderRadius: '24px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        <div style={{ marginBottom: '30px' }}>
                            <CheckCircle size={80} color="var(--primary)" style={{ opacity: 0.9 }} />
                        </div>
                        <h1 style={{
                            fontSize: '2.5rem',
                            marginBottom: '20px',
                            color: '#000',
                            fontWeight: 'bold'
                        }}>Thank You!</h1>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '1.2rem',
                            lineHeight: '1.6',
                            marginBottom: '40px'
                        }}>
                            Your message has been successfully sent. We'll get back to you as soon as possible.
                        </p>
                        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <ArrowLeft size={18} /> Back to Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ThankYouPage;
