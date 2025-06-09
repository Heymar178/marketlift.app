import { MessageCircle, Calendar } from 'lucide-react';

const FloatingElements = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/hamzaworks178/30min' });
    } else {
      window.open('https://calendly.com/hamzaworks178/30min', '_blank');
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5043156707', '_blank');
  };

  return (
    <>
      {/* » Mobile WhatsApp button (still unchanged) */}
      <div className="md:hidden">
        <button onClick={openWhatsApp} className="whatsapp-float">
          <MessageCircle className="w-10 h-10 transform rotate-90" />
        </button>
      </div>

      {/* » Desktop “Book Demo” button (stacked icon + text) */}
      <div className="hidden md:flex md:justify-center md:items-center">
        <button
          onClick={openCalendly}
          className="sticky-demo btn-primary p-2"
        >
          {/* Inner wrapper forces flex-col stacking */}
          <div className="flex flex-col items-center">
            <Calendar className="w-10 h-10 mb-1 transform rotate-90" />
            <span className="text-lg font-semibold">Book Demo</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatingElements;