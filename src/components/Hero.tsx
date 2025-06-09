
import { Smartphone, ShoppingCart, Clock } from 'lucide-react';

const Hero = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/hamzaworks178/30min'});
    } else {
      window.open('https://calendly.com/hamzaworks178/30min', '_blank');
    }
  };

  return (
    <section className="pt-20 pb-16 diagonal-bg text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Quick 7-Day Setup</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mobile Ordering Made Simple for Grocery Stores
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Turn your store into a mobile-first business with your own branded app, curbside pickup, and seamless payments. No tech skills required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={openCalendly} className="btn-primary bg-white text-brand-green hover:bg-gray-50">
                Book Your Free Demo
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-green"
              >
                See How It Works
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-white/90">
              <div className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                <span className="text-sm">Custom Branded Apps</span>
              </div>
              <div className="flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="text-sm">Curbside Pickup</span>
              </div>
            </div>
          </div>
          
          <div className="lg:text-right animate-scale-in">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-64 h-96 bg-gray-900 rounded-2xl mx-auto relative overflow-hidden shadow-2xl">
                <div className="bg-brand-green h-24 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Your Store App</span>
                </div>
                <div className="p-4 bg-white h-full">
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-16 bg-gray-100 rounded flex items-center px-3">
                      <div className="w-12 h-12 bg-brand-orange rounded mr-3"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-300 rounded mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="h-16 bg-gray-100 rounded flex items-center px-3">
                      <div className="w-12 h-12 bg-brand-green rounded mr-3"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-300 rounded mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
