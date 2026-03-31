"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  {
    title: "Expert Craftsmanship",
    description: "Years of experience delivering exceptional woodwork projects with meticulous attention to detail.",
  },
  {
    title: "Quality Materials",
    description: "We use only premium-grade timber and materials to ensure durability and longevity.",
  },
  {
    title: "Custom Solutions",
    description: "Every project is tailored to your specific needs, style preferences, and budget.",
  },
  {
    title: "Professional Service",
    description: "From consultation to completion, we maintain clear communication and professionalism.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <Image
              src="/clients-work/Client work.jpeg"
              alt="Professional carpentry work"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-brown">
              Why Choose REAL WOODWORK?
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="bg-primary-brown text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-primary-brown">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
