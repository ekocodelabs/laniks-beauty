"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // shadcn button component

export default function BannerLayout() {
  // Configurable details for easy maintainability
  const whatsappNumber = "08088449647"; // Replace with your actual Nigerian country code + phone number
  const message = encodeURIComponent(
    "Hello Laniks Beauty, I am interested in exploring your luxury hair and premium jewelry collections.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      {/* 1. Video Container with fallback/poster layout */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60 scale-105 transition-transform duration-1000"
          poster="/banner.jpg" // High-res fallback graphic inside your public folder
        >
          <source src="/images/video banner2.mp4" type="video/mp4" />
          {/* Fallback Image if browser blocks or fails to render video assets */}
          <Image
            src="/banner-fallback.jpg"
            alt="Laniks Beauty Premium Human Hair and Non-Tarnish Jewelry Accessories"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </video>

        {/* 2. Premium Luxury Shadow Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-900/40 to-stone-950/70 z-10" />
      </div>

      {/* 3. Fully Accessible, Highly Functional SEO Content Copy */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Sub-badge highlighting targeted high-end positioning */}
        <span className="inline-block text-xs md:text-sm tracking-[0.25em] mt-27 uppercase text-amber-400 font-medium mb-4 animate-fade-in">
          Premium Hair & Luxury Accessories
        </span>

        {/* Structured Main H1 Header optimizing high value local search terms */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-50 font-normal tracking-tight leading-[1.15] mb-6">
          Define Your Elegance with <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-400 to-amber-200 font-semibold drop-shadow-sm">
            Laniks Beauty
          </span>
        </h1>

        {/* Search Intent Description detailing product scope natively */}
        <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed tracking-wide mb-8 balance">
          Discover unmatched luxury with our premium raw donor human hair wigs,
          authentic frontals, and exquisite non-tarnish jewelry accessories
          tailored for the modern Nigerian woman.
        </p>

        {/* 4. Action Layer - Direct Integration into Nigerian Direct-to-Consumer Funnels */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-medium tracking-wide shadow-xl shadow-amber-950/20 px-8 transition-all duration-300 scale-100 hover:scale-[1.02]"
          >
            <a href="#collections">Explore Collections</a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-emerald-500/40 text-stone-50 hover:bg-emerald-950/30 hover:text-emerald-300 font-medium tracking-wide px-8 transition-all duration-300"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-emerald-400 text-xl" />
              <span>Order via WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Decorative High-End Bottom Boarder Subtle Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent z-20" />
    </section>
  );
}
