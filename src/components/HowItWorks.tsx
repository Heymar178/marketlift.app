
import { UserPlus, Palette, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Quick 30-minute setup call to get your account ready and gather your store information.",
      timeline: "Day 1"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "We create your branded mobile app with your logo, colors, and store personality.",
      timeline: "Days 2-7"
    },
    {
      icon: Rocket,
      title: "Go Live",
      description: "Your app goes live in app stores. Start taking mobile orders and watch your sales grow.",
      timeline: "Day 7+"
    }
  ];

  const openCalendly = () => {
    // @ts-ignore
    Calendly.initPopupWidget({url: 'https://calendly.com/hamzaworks178/30min'});
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Setup to Success in Just 7 Days
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle everything from app development to app store submission. 
            You'll be taking mobile orders within a week.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-brand-orange text-white text-sm font-bold px-3 py-1 rounded-full">
                  {step.timeline}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-brand-green/30 transform -translate-y-1/2"></div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={openCalendly} className="btn-primary text-lg px-8 py-4">
            Start Your 7-Day Journey
          </button>
          <p className="text-gray-500 mt-4">
            Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
