import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import '../components/Blog.css'; // Reuse existing blog styles

const BlogPage = () => {
    return (
        <div className="page-wrapper">
            <Header />

            <main style={{ paddingTop: '80px', background: '#fff', color: '#334155' }}>
                {/* HERO */}
                <section className="section-responsive text-center" style={{ background: '#f8fafc', padding: '80px 20px' }}>
                    <div className="container-responsive">
                        <ScrollReveal animation="fade-up">
                            <span style={{ color: '#dc2626', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>
                                OUR INSIGHTS
                            </span>
                            <h1 className="heading-xl" style={{ marginBottom: '24px', color: '#0f172a' }}>
                                Trends, Strategies, and <br />Digital Success Stories
                            </h1>
                            <p className="text-body-lg" style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                                Explore our latest articles on SEO, Web Development, and Performance Marketing.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* BLOG GRID */}
                <section className="section-responsive" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
                    <div className="container-responsive">
                        <div className="blog-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '40px'
                        }}>
                            {blogPosts.map((post, i) => (
                                <ScrollReveal key={post.id} animation="fade-up" delay={i * 50}>
                                    <div className="blog-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div className="blog-image" style={{ height: '240px' }}>
                                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="blog-content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                                            <span className="blog-tag" style={{ marginBottom: '12px' }}>{post.category}</span>
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', lineHeight: '1.3' }}>{post.title}</h3>
                                            <p style={{ color: '#64748b', marginBottom: '20px', flex: '1' }}>{post.summary.substring(0, 120)}...</p>
                                            <Link to={`/blog/${post.slug}`} className="read-more" style={{ marginTop: 'auto' }}>Read Article →</Link>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEWSLETTER */}
                <section style={{ background: '#0f172a', padding: '80px 20px', textAlign: 'center', color: 'white' }}>
                    <div className="container-responsive" style={{ maxWidth: '600px' }}>
                        <ScrollReveal>
                            <h2 className="heading-md" style={{ marginBottom: '20px', color: 'white' }}>Stay Ahead of the Curve</h2>
                            <p style={{ marginBottom: '30px', color: '#94a3b8' }}>Join 5,000+ founders receiving our monthly growth tactics.</p>
                            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'center' }}>
                                <input type="email" placeholder="Enter your business email" style={{ padding: '16px', borderRadius: '8px', border: 'none', width: '100%', maxWidth: '400px' }} />
                                <button className="btn btn-primary" style={{ width: '100%', maxWidth: '400px' }}>Subscribe Free</button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default BlogPage;
