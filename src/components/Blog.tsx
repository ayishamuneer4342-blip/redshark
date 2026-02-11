import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './Blog.css';

const Blog = () => {
    // Display only the first 3 posts on the homepage
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section className="blog-section" id="blog">
            <div className="container">
                <h2 className="section-title text-center mb-5">Latest Insights</h2>
                <div className="text-center mb-5">
                    <p className="section-subtitle">Trends, strategies, and success stories.</p>
                </div>

                <div className="blog-grid">
                    {recentPosts.map((post) => (
                        <div className="blog-card" key={post.id}>
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="blog-content">
                                <span className="blog-tag">{post.category}</span>
                                <h3>{post.title}</h3>
                                <p>{post.summary.substring(0, 100)}...</p>
                                <Link to={`/blog/${post.slug}`} className="read-more">Read Article →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
