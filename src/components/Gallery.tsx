"use client";

import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", alt: "Cafe Interior", size: "col-span-1 row-span-2 md:col-span-2 md:row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600", alt: "Coffee Brewing", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1501339817309-1147e4eb112f?auto=format&fit=crop&q=80&w=600", alt: "Live Music", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1525610553991-56e111536531?auto=format&fit=crop&q=80&w=800", alt: "Outdoor Seating", size: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600", alt: "Islamic Aesthetic Details", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-2" },
  { id: 6, src: "https://images.unsplash.com/photo-1507133750076-4be9df174f88?auto=format&fit=crop&q=80&w=600", alt: "Friends hanging out", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Atmosphere
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visual Experience
          </h3>
          <p className="text-foreground/70 text-lg">
            Immerse yourself in our beautifully designed spaces, where modern aesthetics meet traditional warmth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.size}`}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <span className="text-white font-medium text-lg tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
