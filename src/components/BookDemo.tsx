const BookDemo = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/hamzaworks178/30min",
      });
    } else {
      window.open("https://calendly.com/hamzaworks178/30min", "_blank");
    }
  };

  return (
    <section id="book-demo" className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Grocery Store?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            See exactly how Market Lift will work for your store. Book a
            personalized demo and discover how mobile ordering can boost your
            sales.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">What You'll See:</h3>
              <ul className="text-left space-y-3 text-white/90">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  Your store's custom-branded mobile app
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  Live order management dashboard
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  Customer ordering experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  Curbside pickup workflow
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">What You'll Get:</h3>
              <ul className="text-left space-y-3 text-white/90">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  Personalized setup timeline
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  Custom pricing for your store
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  ROI projections for your business
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  Answers to all your questions
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={openCalendly}
            className="btn-primary bg-white text-brand-green hover:bg-gray-50 text-lg px-8 py-4 mb-8"
          >
            Book Your Free Demo Now
          </button>

          <div className="text-white/80">
            <p className="mb-4">⏰ 30-minute personalized demo</p>
            <p>📱 See your store's app in action</p>
          </div>
        </div>

        {/* Fallback Calendly Embed */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">
            Can't see the booking popup? Use the calendar below:
          </h3>
          <div className="bg-white rounded-lg">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hamzaworks178/30min"
              style={{ minWidth: "320px", height: "630px" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
