"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-brown">
              Crafting Quality Woodwork Since Day One
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              At REAL WOODWORK PTY LTD, we bring your vision to life with expert craftsmanship and attention to detail. Based in Ballito, KwaZulu-Natal, we specialize in creating beautiful, functional wooden structures that stand the test of time.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              From custom decking and elegant pergolas to bespoke kitchens and intricate staircases, our team of skilled artisans delivers exceptional results on every project. We combine traditional woodworking techniques with modern innovation to ensure quality and durability.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you're looking to enhance your outdoor living space or transform your interior, we're here to make it happen with professionalism and pride.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/clients-work/Client work.jpeg"
              alt="Quality woodwork craftsmanship"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
