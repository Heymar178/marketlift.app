import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/hamzaworks178/30min' });
    } else {
      window.open('https://calendly.com/hamzaworks178/30min', '_blank');
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Text */}
            <Link to="/" className="flex items-center"> {/* Wrap in Link */}
              <img 
                src="/lovable-uploads/e2385655-1ddf-45c6-a23e-be0eaafa27fb.svg" 
                alt="Market Lift Logo" 
                className="w-12 h-12 mr-3"
              />
              <span className="text-xl font-bold text-gray-900">Market Lift</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-brand-green transition-colors">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-brand-green transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-brand-green transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-brand-green transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-brand-green transition-colors">FAQ</button>
              <button onClick={openCalendly} className="btn-primary">Book a Demo</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-brand-green transition-colors text-left">Features</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-brand-green transition-colors text-left">How It Works</button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-brand-green transition-colors text-left">Why Us</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-brand-green transition-colors text-left">Reviews</button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-brand-green transition-colors text-left">FAQ</button>
                <button onClick={openCalendly} className="btn-primary w-full">Book a Demo</button>
              </nav>
            </div>      
          )}
        </div>
      </header>
    </>
  );
};

export default Header;