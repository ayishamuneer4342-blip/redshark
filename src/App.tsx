import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHash from './utils/ScrollToHash';
import './components/UI/ScrollReveal';
import ChatBot from './components/ChatBot';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SEOPage = lazy(() => import('./pages/SEOPage'));
const SEMPage = lazy(() => import('./pages/SEMPage'));
const SMMPage = lazy(() => import('./pages/SMMPage'));
const WebDevPage = lazy(() => import('./pages/WebDevPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));

// Loading fallback
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#fff'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #ce1111',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/search-engine-optimization" element={<SEOPage />} />
          <Route path="/google-ads" element={<SEMPage />} />
          <Route path="/social-media-marketing" element={<SMMPage />} />
          <Route path="/web-development" element={<WebDevPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </Suspense>
      <ChatBot />
    </Router>
  )
}

export default App
