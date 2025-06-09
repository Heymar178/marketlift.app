
import { Award, Clock, Shield } from 'lucide-react';

const Pricing = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/hamzaworks178/30min'});
    } else {
      window.open('https://calendly.com/hamzaworks178/30min', '_blank');
    }
  };

  const whyChooseUsFeatures = [
    {
      icon: <Award className="w-8 h-8 text-brand-green" />,
      title: "Industry Expertise",
      description: "Years of experience helping grocery stores succeed with mobile ordering technology"
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-green" />,
      title: "Quick Setup",
      description: "Get your custom-branded app live in just 7 days, not months like competitors"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-green" />,
      title: "Complete Support",
      description: "24/7 technical support, app store management, and ongoing maintenance included"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-brand-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Market Lift?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another tech company. We're your dedicated partner in transforming 
            your grocery store with proven mobile ordering solutions.
          </p>
        </div>

        {/* Why Choose Us Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyChooseUsFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={openCalendly} className="btn-primary text-lg px-8 py-4">
            See It In Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
