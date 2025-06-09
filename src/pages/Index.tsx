
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import BookDemo from '../components/BookDemo';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BookDemo />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
