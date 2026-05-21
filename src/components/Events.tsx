"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Acoustic Night & Poetry",
    date: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    category: "Live Music",
    description: "Unwind your week with soulful acoustic performances and spoken word poetry in our ambient setting.",
    image: "https://images.unsplash.com/photo-1516280440502-65f53282b85e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Coffee & Discourse",
    date: "First Sunday of Month",
    time: "10:00 AM - 12:00 PM",
    category: "Community",
    description: "Join our monthly intellectual gathering exploring modern topics over freshly brewed artisanal coffee.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Late Night Study Hall",
    date: "Mon - Wed",
    time: "8:00 PM - 12:00 AM",
    category: "Promotion",
    description: "Students get 20% off all lattes and unlimited Wi-Fi during our late-night study hours.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
  }
];

export function Events() {
  return (
    <section id="events" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Happenings
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-card-foreground">
              Events & Promos
            </h3>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
          >
            View All Events 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {event.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h4>
                <p className="text-foreground/70 text-sm mb-6 flex-1">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-foreground/60 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
