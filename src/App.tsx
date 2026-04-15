import Nav from './components/Nav';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import FlakeMatch from './components/FlakeMatch';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Gallery />
      <WhyUs />
      <FlakeMatch />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
