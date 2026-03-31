"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About & Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white shadow-md"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/RW Logo.jpeg"
              alt="REAL WOODWORK PTY LTD"
              width={50}
              height={50}
              className="md:w-[60px] md:h-[60px]"
              priority
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-brown"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-primary-brown transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-brown group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/27720865620"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-whatsapp text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#1faa52] transition-all hover:shadow-lg"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-gray-700 hover:bg-cream rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/27720865620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-full font-semibold mt-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
