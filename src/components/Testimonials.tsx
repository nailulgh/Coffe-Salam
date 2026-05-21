"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Local Artist",
    content: "Salam is my go-to place for inspiration. The ambiance is incredibly serene, and the Spanish Latte is simply perfection. The Islamic-modern design elements make it truly unique.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Omar Hassan",
    role: "Software Engineer",
    content: "Finally, a cafe where I can actually focus! The wifi is fast, the seating is comfortable, and the Kunafa Cheesecake is the best reward after a long coding session.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Laila & Tariq",
    role: "Regular Customers",
    content: "We had our first meeting here, and now it's our favorite weekend spot. The staff always remembers our order, and the Baklava Trio is heavenly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Testimonials
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16">
              What Our Guests Say
            </h3>
          </motion.div>

          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0, 
                  x: currentIndex === index ? 0 : 50,
                  scale: currentIndex === index ? 1 : 0.9,
                  pointerEvents: currentIndex === index ? "auto" : "none"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <p className="text-xl md:text-2xl font-heading text-foreground/90 italic mb-8 max-w-2xl">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                  <div className="ml-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
