import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-brown text-beige">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src="/logo/RW Logo.jpeg"
              alt="REAL WOODWORK PTY LTD"
              width={130}
              height={130}
              className="mb-4 rounded-lg"
            />
            <p className="text-sm leading-relaxed">
              Expert carpentry and woodwork services in Ballito, KwaZulu-Natal. Quality craftsmanship you can trust.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-gold transition-colors hover:pl-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-gold transition-colors hover:pl-1 inline-block">
                  About & Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-gold transition-colors hover:pl-1 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Decking & Flooring</li>
              <li>Pergolas & Structures</li>
              <li>Custom Kitchens</li>
              <li>Staircases</li>
              <li>Gates & Fencing</li>
              <li>Repairs & Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:bhekani36@gmail.com" className="hover:text-gold transition-colors">
                  bhekani36@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>072 086 5620</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Ballito, KwaZulu-Natal</span>
              </li>
              <li>
                <a
                  href="https://wa.me/27720865620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-whatsapp hover:text-[#1faa52] transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>&copy; {currentYear} REAL WOODWORK PTY LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
