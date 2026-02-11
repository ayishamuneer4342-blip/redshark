import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import './BlogPostPage.css';

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);
    const [activeHeading, setActiveHeading] = useState<string>('');

    if (!post) {
        return (
            <div className="page-wrapper">
                <Header />
                <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh' }}>
                    <h1 className="heading-lg">Post Not Found</h1>
                    <Link to="/#blog" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Blog</Link>
                </div>
                <Footer />
            </div>
        );
    }

    // Extract headings for Table of Contents
    const headings = post.content
        .filter(item => item.type === 'heading')
        .map(item => item.text || '');

    useEffect(() => {
        const handleScroll = () => {
            const headingElements = headings.map(h => document.getElementById(h));
            let current = '';
            for (const el of headingElements) {
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        current = el.id;
                    }
                }
            }
            if (current) setActiveHeading(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="page-wrapper post-page">
            <Header />

            <main style={{ paddingTop: '80px', background: '#fff', color: '#334155' }}>

                {/* HERO AREA */}
                <div className="post-hero" style={{
                    background: '#0f172a',
                    color: 'white',
                    padding: '80px 20px 120px',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    <div className="container-responsive" style={{ maxWidth: '900px' }}>
                        <Link to="/#blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#94a3b8', textDecoration: 'none', marginBottom: '30px', fontWeight: '500' }}>
                            <ArrowLeft size={16} /> Back to Insights
                        </Link>
                        <ScrollReveal>
                            <span style={{ display: 'block', color: '#f87171', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '16px', textTransform: 'uppercase' }}>
                                {post.category}
                            </span>
                            <h1 className="heading-xl" style={{ marginBottom: '24px' }}>{post.title}</h1>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', color: '#94a3b8', fontSize: '0.95rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {post.publishedDate}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {post.readTime}</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* CONTENT AREA */}
                <div className="container-responsive" style={{ maxWidth: '1200px', marginTop: '40px' }}>

                    {/* Featured Image - Moved out of grid for better alignment */}
                    <div className="post-image-container" style={{ marginBottom: '60px' }}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div className="blog-layout">

                        {/* LEFT SIDEBAR (TOC) - Desktop Only */}
                        <aside className="blog-sidebar">
                            <div className="sticky-toc">
                                <h4 style={{ fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>On this page</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderLeft: '2px solid #e2e8f0' }}>
                                    {headings.map((h, i) => (
                                        <li key={i} style={{ marginBottom: '0' }}>
                                            <button
                                                onClick={() => scrollToHeading(h)}
                                                style={{
                                                    textAlign: 'left',
                                                    background: 'none',
                                                    border: 'none',
                                                    padding: '8px 0 8px 16px',
                                                    fontSize: '0.95rem',
                                                    color: activeHeading === h ? '#dc2626' : '#64748b',
                                                    fontWeight: activeHeading === h ? '600' : '400',
                                                    cursor: 'pointer',
                                                    borderLeft: activeHeading === h ? '2px solid #dc2626' : 'none',
                                                    marginLeft: '-2px',
                                                    transition: 'all 0.2s',
                                                    width: '100%',
                                                    display: 'block'
                                                }}
                                            >
                                                {h}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ marginTop: '40px' }}>
                                    <h4 style={{ fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Share</h4>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <button className="share-btn"><Facebook size={18} /></button>
                                        <button className="share-btn"><Twitter size={18} /></button>
                                        <button className="share-btn"><Linkedin size={18} /></button>
                                        <button className="share-btn"><Share2 size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* MAIN ARTICLE */}
                        <article className="blog-content-wrapper">

                            <div className="post-body">
                                <p className="lead" style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#475569', marginBottom: '40px', fontWeight: '500' }}>
                                    {post.summary}
                                </p>

                                {post.content.map((block, index) => {
                                    // Helper to parse [text](url) into links
                                    const parseTextWithLinks = (text: string) => {
                                        const parts = text.split(/(\[.*?\]\(.*?\))/g);
                                        return parts.map((part, i) => {
                                            const match = part.match(/\[(.*?)\]\((.*?)\)/);
                                            if (match) {
                                                const [_, label, url] = match;
                                                // Internal links use <Link>, external use <a>
                                                if (url.startsWith('/') || url.startsWith('#')) {
                                                    return <Link key={i} to={url} style={{ color: '#dc2626', textDecoration: 'underline', fontWeight: 500 }}>{label}</Link>;
                                                }
                                                return <a key={i} href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626', textDecoration: 'underline', fontWeight: 500 }}>{label}</a>;
                                            }
                                            return part;
                                        });
                                    };

                                    if (block.type === 'heading') {
                                        return (
                                            <h2 key={index} id={block.text} className="post-heading">
                                                {block.text}
                                            </h2>
                                        );
                                    } else if (block.type === 'list') {
                                        return (
                                            <ul key={index} className="post-list">
                                                {block.items?.map((item, i) => (
                                                    <li key={i}>{parseTextWithLinks(item)}</li>
                                                ))}
                                            </ul>
                                        );
                                    } else if (block.type === 'image') {
                                        return (
                                            <div key={index} className="post-inline-image">
                                                <img src={block.src} alt="" />
                                            </div>
                                        );
                                    } else if (block.type === 'callout') {
                                        return (
                                            <div key={index} className="blog-callout">
                                                {block.text && parseTextWithLinks(block.text)}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <p key={index} className="post-text">
                                                {block.text && parseTextWithLinks(block.text)}
                                            </p>
                                        );
                                    }
                                })}
                            </div>
                        </article>
                    </div>
                </div>

                {/* CTA */}
                <section style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', marginTop: '80px' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h2 className="heading-md" style={{ marginBottom: '20px' }}>Enjoyed this read?</h2>
                        <p style={{ marginBottom: '30px', color: '#64748b' }}>Subscribe to our newsletter for more insights on scaling your business.</p>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', padding: '0 20px' }}>
                            <input type="email" placeholder="Enter your email" style={{ padding: '12px 20px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '300px' }} />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default BlogPostPage;
