"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, Phone, User, CheckCircle2 } from "lucide-react";

export function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <section id="reservation" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-[60%] -right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Book a Table
              </h2>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-card-foreground mb-6">
                Reserve Your Spot
              </h3>
              <p className="text-card-foreground/70 text-lg leading-relaxed">
                Whether it's a quiet study session, a business meeting, or a family gathering, ensure your perfect spot is waiting for you. Experience the serenity of Salam.
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary shrink-0 border border-border">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-card-foreground/60 font-medium">For large group bookings</p>
                  <p className="text-lg font-bold text-card-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-background rounded-3xl p-8 md:p-10 shadow-2xl border border-border relative overflow-hidden">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-foreground">Reservation Confirmed!</h4>
                  <p className="text-foreground/70 max-w-sm">
                    Thank you for booking with Salam. We will send you a WhatsApp confirmation shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" /> Name
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" /> WhatsApp Number
                      </label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+1 234 567 890" 
                        className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" /> People
                      </label>
                      <select className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5+ People</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-primary" /> Date
                      </label>
                      <input 
                        required
                        type="date" 
                        className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" /> Time
                      </label>
                      <input 
                        required
                        type="time" 
                        className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl transition-colors mt-4 shadow-md shadow-primary/20"
                  >
                    Confirm Reservation
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
