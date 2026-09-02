"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitors page vertical scroll positioning to switch container background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Legacy", href: "#about" },
    { name: "Signature Collection", href: "#featured-products" },
    { name: "Connect", href: "#contact" },
  ];

  const whatsappNumber = "2348000000000";
  const directInquiryUrl = `https://wa.me{whatsappNumber}?text=Hello%20Laniks%20Beauty%2C%20I%20am%20visiting%20your%20digital%20showroom%20and%20would%20love%20to%20speak%20with%20a%20luxury%20consultant.`;

  return (
    <>
      {/* 1. Global Navigation Bar Fixed Framework */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-stone-950/80 backdrop-blur-md border-stone-900/80 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Serif Branding Anchor */}
            <Link href="/" className="flex flex-col group focus:outline-none">
              <span className="text-lg sm:text-xl font-serif text-stone-50 tracking-[0.15em] font-semibold transition-colors group-hover:text-amber-200">
                LANIKS{" "}
                <span className="text-amber-400 font-normal">BEAUTY</span>
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 -mt-0.5 group-hover:text-stone-300 transition-colors">
                Hair & Luxury Pieces
              </span>
            </Link>

            {/* Desktop Navigation Links (Hidden on Phones and Tablets) */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-xs tracking-widest uppercase text-stone-300 hover:text-amber-400 font-light transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action CTA Target Elements */}
            <div className="hidden md:flex items-center">
              <Button
                size="sm"
                className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-medium tracking-wider text-xs uppercase px-5 rounded-full shadow-lg shadow-amber-950/10 transition-all duration-300 scale-100 hover:scale-[1.02]"
              >
                <a
                  href={directInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Now
                </a>
              </Button>
            </div>

            {/* Mobile Interaction Trigger Node */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-900/50 focus:outline-none transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Responsive Mobile Overlay Slideout (Optimized for Touch Actions) */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-stone-950 flex flex-col justify-between px-6 pt-28 pb-10 transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Dynamic Navigation Stack Layer */}
        <div className="flex flex-col space-y-6">
          <span className="text-[10px] tracking-[0.35em] uppercase text-amber-500/60 font-semibold mb-2">
            Navigation Showroom
          </span>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)} // Safely closes overlay context after execution
              className="text-2xl font-serif text-stone-100 hover:text-amber-400 transition-colors tracking-wide font-light py-2 border-b border-stone-900/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Full-Width Mobile Action Funnel Area */}
        <div className="flex flex-col space-y-4">
          <Button
            size="lg"
            className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-stone-950 font-medium tracking-wide py-6 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-amber-950/20"
          >
            <a
              href={directInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4" />
              <span>Consult via WhatsApp</span>
            </a>
          </Button>

          <p className="text-center text-[10px] text-stone-500 font-light tracking-wider">
            Laniks Beauty — Available Nationwide Across Nigeria
          </p>
        </div>
      </div>
    </>
  );
}
