import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Gonzalez",
      location: "Houston, TX",
      quote:
        "Our mobile orders increased by 45% in the first month. Customers love the convenience, and we love the extra revenue!",
      metric: "↑45% mobile orders",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      location: "Houston, TX",
      quote:
        "The setup was incredibly easy. Within a week, we had our own branded app. Customer pickup is so much faster now.",
      metric: "↑28% customer retention",
      rating: 5,
    },
    {
      name: "James Williams",
      location: "Houston, TX",
      quote:
        "Market Lift transformed our business. The support team is amazing, and the app works perfectly. Highly recommend!",
      metric: "↑52% weekend sales",
      rating: 5,
    },
    {
      name: "Rosa Martinez",
      location: "Houston, TX",
      quote:
        "We were skeptical about mobile ordering, but the results speak for themselves. Our younger customers especially love it.",
      metric: "↑38% new customers",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Store Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the growing list of local grocery stores that have increased their
            sales and improved customer satisfaction with Market Lift.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-brand-off-white rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Testimonial Content */}
            <div className="text-center animate-fade-in">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-brand-orange fill-current"
                    />
                  )
                )}
              </div>

              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].store}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>

                <div className="hidden md:block w-px h-16 bg-gray-300"></div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green">
                    {testimonials[currentTestimonial].metric}
                  </div>
                  <div className="text-gray-600 text-sm">
                    First Month Results
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-brand-green"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
