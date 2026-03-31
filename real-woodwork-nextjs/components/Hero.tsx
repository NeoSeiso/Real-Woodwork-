"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[500px] flex items-center justify-center text-white mt-[68px] md:mt-[80px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/gallery/wood1.jpg')",
          filter: "brightness(0.6)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-brown/70 to-dark-brown/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 text-shadow-lg"
        >
          REAL WOODWORK PTY LTD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 font-light text-beige max-w-3xl mx-auto"
        >
          Expert Carpentry & Woodwork Services in Ballito, KwaZulu-Natal
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="bg-primary-brown text-white px-8 py-3.5 rounded-full font-semibold hover:bg-dark-brown transition-all hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto max-w-[280px]"
          >
            Get a Quote
          </Link>
          <a
            href="https://wa.me/27720865620"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-primary-brown transition-all hover:shadow-2xl w-full sm:w-auto max-w-[280px]"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
}
