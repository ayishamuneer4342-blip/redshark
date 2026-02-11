import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SEOPage from './pages/SEOPage';
import SEMPage from './pages/SEMPage';
import SMMPage from './pages/SMMPage';
import WebDevPage from './pages/WebDevPage';
import BlogPostPage from './pages/BlogPostPage';
import BlogPage from './pages/BlogPage';
import ThankYouPage from './pages/ThankYouPage';
import LandingPage from './pages/LandingPage';
import ScrollToHash from './utils/ScrollToHash';
import './components/UI/ScrollReveal'; // Import global styles if needed or ensuring context
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Router>
      <ScrollToHash />
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
      <ChatBot />
    </Router>
  )
}

export default App
