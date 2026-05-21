"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const categories = ["All", "Arabica Coffee", "Lattes", "Matcha", "Desserts", "Middle Eastern"];

const menuItems = [
  { id: 1, name: "Salam Signature Blend", category: "Arabica Coffee", price: "$6.50", rating: 4.9, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Ethiopian Yirgacheffe", category: "Arabica Coffee", price: "$5.50", rating: 4.8, image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Spanish Latte", category: "Lattes", price: "$6.00", rating: 4.9, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Rose Pistachio Latte", category: "Lattes", price: "$7.00", rating: 5.0, image: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=600" },
  { id: 5, name: "Ceremonial Matcha", category: "Matcha", price: "$7.50", rating: 4.8, image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=600" },
  { id: 6, name: "Kunafa Cheesecake", category: "Desserts", price: "$8.50", rating: 4.9, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600" },
  { id: 7, name: "Baklava Trio", category: "Middle Eastern", price: "$9.00", rating: 5.0, image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600" },
  { id: 8, name: "Cardamom Dates", category: "Middle Eastern", price: "$5.00", rating: 4.7, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600" },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Featured Menu
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-card-foreground mb-6">
              Crafted with Passion
            </h3>
            <p className="text-card-foreground/70 text-lg">
              Explore our selection of premium coffee, delightful matcha, and exquisite Middle Eastern desserts.
            </p>
          </motion.div>
        </div>

        {/* Filter Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl bg-background overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span className="text-xs font-bold text-foreground">{item.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-sm text-foreground/60">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
