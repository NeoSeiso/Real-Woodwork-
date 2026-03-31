"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/clients-work/Pergola.jpeg", title: "Pergola Design" },
  { src: "/clients-work/work0.jpeg", title: "Custom Woodwork" },
  { src: "/clients-work/Work01.jpeg", title: "Expert Craftsmanship" },
  { src: "/clients-work/work8.jpeg", title: "Outdoor Structures" },
  { src: "/clients-work/work5.jpeg", title: "Decking Solutions" },
  { src: "/clients-work/work9.jpeg", title: "Construction Excellence" },
  { src: "/clients-work/work7.jpeg", title: "Custom Solutions" },
  { src: "/clients-work/work4.jpeg", title: "Professional Work" },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark-brown">
            Our Craftsmanship
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A glimpse into our quality work and attention to detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0 md:opacity-100"
                }`}
              >
                <h4 className="text-white font-bold text-lg">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
