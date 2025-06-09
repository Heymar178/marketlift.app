
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to set up my mobile ordering system?",
      answer: "We can have your custom-branded mobile app live in the app stores within 7 days. The initial setup call takes just 30 minutes, and we handle all the technical work including app development, store submission, and testing."
    },
    {
      question: "Do I need any technical knowledge to use this system?",
      answer: "Not at all! We handle all the technical aspects. You'll receive simple training on managing orders and inventory through our user-friendly dashboard. Our support team is available 24/7 for any questions."
    },
    {
      question: "What payment methods can customers use?",
      answer: "Customers can pay with all major credit cards, debit cards, Apple Pay, Google Pay, and other digital wallets. All payments are processed securely and funds are deposited directly into your business account."
    },
    {
      question: "How does inventory management work?",
      answer: "Our system syncs with your existing inventory in real-time. When items are sold in-store or through the app, inventory is automatically updated everywhere. You'll get low-stock alerts and can easily update prices and availability."
    },
    {
      question: "What if I want to cancel my subscription?",
      answer: "You can cancel anytime with 30 days notice. There are no long-term contracts or cancellation fees. We want you to be completely satisfied with our service, and if you decide it's not for you, we make it easy to cancel."
    },
    {
      question: "Do you integrate with my existing POS system?",
      answer: "Yes! We integrate with most popular POS systems including Square, Toast, Clover, and many others. If you have a specific system, we'll work with you to ensure seamless integration."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 phone and chat support, comprehensive training, ongoing technical maintenance, and regular app updates. We also help with marketing materials to promote your new mobile ordering service."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our mobile ordering platform. 
            Still have questions? We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-brand-green flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <button 
              onClick={() => {
                // @ts-ignore
                Calendly.initPopupWidget({url: 'https://calendly.com/hamzaworks178/30min'});
              }}
              className="btn-primary"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
