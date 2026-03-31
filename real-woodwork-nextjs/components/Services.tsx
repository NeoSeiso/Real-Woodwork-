"use client";

import { motion } from "framer-motion";
import { Hammer, Home, Fence, ArrowUpDown, UtensilsCrossed, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Decking & Flooring",
    description: "Premium outdoor wooden decking solutions that enhance your property's aesthetic appeal and functionality.",
  },
  {
    icon: Hammer,
    title: "Pergolas & Structures",
    description: "Custom-designed pergolas and outdoor structures that create perfect spaces for relaxation and entertainment.",
  },
  {
    icon: Fence,
    title: "Gates & Fencing",
    description: "Durable and attractive wooden gates and fencing solutions for enhanced security and curb appeal.",
  },
  {
    icon: ArrowUpDown,
    title: "Staircases",
    description: "Expertly crafted staircases that combine functionality with stunning design, from traditional to contemporary.",
  },
  {
    icon: UtensilsCrossed,
    title: "Custom Kitchens",
    description: "Bespoke kitchen cabinetry and installations designed to perfectly suit your lifestyle and taste.",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Professional repair and maintenance services to keep your woodwork in pristine condition.",
  },
];

export default function Services() {
  return (
    <section className="py-12 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark-brown">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive carpentry and woodwork solutions for residential and commercial properties
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div className="bg-primary-brown/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-brown transition-colors">
                  <IconComponent className="text-primary-brown group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-brown">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
