
import { Smartphone, Truck, CreditCard, Database, Gift, HeadphonesIcon } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile Ordering",
      description: "Custom-branded mobile app for iOS and Android. Customers browse, order, and pay seamlessly.",
      benefits: ["iOS & Android apps", "Custom branding", "Real-time orders"]
    },
    {
      icon: Truck,
      title: "Curbside Pickup",
      description: "Efficient pickup system with SMS notifications. Customers stay in their cars while you bring orders out.",
      benefits: ["SMS notifications", "Location tracking", "Contactless delivery"]
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Accept all major payment methods with industry-leading security. Funds deposited directly to your account.",
      benefits: ["Credit & debit cards", "Digital wallets", "Secure processing"]
    },
    {
      icon: Database,
      title: "Inventory Sync",
      description: "Real-time inventory management prevents overselling. Automatic updates across all platforms.",
      benefits: ["Real-time updates", "Stock alerts", "Automatic sync"]
    },
    {
      icon: Gift,
      title: "Loyalty & Coupons",
      description: "Built-in loyalty program and digital coupons to increase customer retention and repeat purchases.",
      benefits: ["Point rewards", "Digital coupons", "Customer insights"]
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated support team handles all technical issues. You focus on your business, we handle the tech.",
      benefits: ["Phone & chat support", "Technical maintenance", "Training included"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-brand-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Go Mobile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete mobile ordering solution designed specifically for independent grocery stores. 
            No technical knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
