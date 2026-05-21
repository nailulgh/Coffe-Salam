"use client";

import { motion } from "framer-motion";
import { Coffee, Users, Star } from "lucide-react";

const stats = [
  { icon: Star, label: "Premium Beans", value: "100%" },
  { icon: Users, label: "Happy Customers", value: "50k+" },
  { icon: Coffee, label: "Cozy Spaces", value: "3" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-primary font-medium tracking-widest uppercase text-sm">
                Our Philosophy
              </h2>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                A comfortable place to hang out & connect.
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Salam is more than just a cafe. It is a sanctuary designed with an Islamic-modern nuance, creating a peaceful environment suitable for discussion, study, and family gatherings. We blend the rich heritage of Middle Eastern hospitality with urban coffee culture.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-heading font-bold text-foreground">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-medium text-foreground/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=1000"
                alt="Cafe Interior"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-background z-10">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800"
                alt="Coffee Preparation"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
