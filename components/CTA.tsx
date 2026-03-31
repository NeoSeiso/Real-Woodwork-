"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-brown to-dark-brown text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-beige mb-10 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote. Let's bring your vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white text-primary-brown px-8 py-4 rounded-full font-semibold hover:bg-beige transition-all hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto max-w-[280px]"
            >
              <Phone size={20} />
              Contact Us
            </Link>
            <a
              href="https://wa.me/27720865620"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-whatsapp text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1faa52] transition-all hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto max-w-[280px]"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
