import Header from '../components/Header';
import Hero from '../components/Hero';
import USP from '../components/USP';
import SocialProof from '../components/SocialProof';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Tools from '../components/Tools';
import Industries from '../components/Industries';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/UI/ScrollReveal';

function Home() {
    return (
        <div className="home-page">
            <Header />
            <main>
                <Hero />
                <ScrollReveal animation="fade-in"><USP /></ScrollReveal>
                <ScrollReveal animation="fade-in"><SocialProof /></ScrollReveal>
                <ScrollReveal animation="fade-up"><About /></ScrollReveal>
                <ScrollReveal animation="fade-up"><Services /></ScrollReveal>
                <ScrollReveal animation="fade-up"><WhyChooseUs /></ScrollReveal>
                <ScrollReveal animation="slide-left"><HowItWorks /></ScrollReveal>

                <ScrollReveal animation="fade-up"><Tools /></ScrollReveal>
                <ScrollReveal animation="fade-up"><Industries /></ScrollReveal>
                <ScrollReveal animation="fade-up"><Blog /></ScrollReveal>
                <ScrollReveal animation="slide-right"><Testimonials /></ScrollReveal>
                <ScrollReveal animation="fade-up"><FAQ /></ScrollReveal>
                <ScrollReveal animation="zoom-in"><FinalCTA /></ScrollReveal>
                <ScrollReveal animation="fade-up"><Contact /></ScrollReveal>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Home
