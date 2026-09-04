"use client";

import { FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ContactLayout() {
  const contactChannels = [
    {
      name: "WhatsApp Terminal",
      detail: "+234 808 844 9647",
      description: "Direct instant ordering & bundle customization requests",
      href: "https://wa.me/08088449647",
      icon: FaWhatsapp,
      colorClass: "text-emerald-400 group-hover:bg-emerald-950/40",
    },
    {
      name: "Instagram Catalog",
      detail: "@laniks_beauty",
      description:
        "Daily premium luxury hair reviews & live accessory displays",
      href: "https://instagram.com",
      icon: FaInstagram,
      colorClass: "text-pink-400 group-hover:bg-pink-950/40",
    },
    {
      name: "TikTok Closet",
      detail: "@laniks_beauty",
      description:
        "Behind-the-scenes premium hair quality and non-tarnish testing",
      href: "https://tiktok.com",
      icon: FaTiktok,
      colorClass: "text-stone-100 group-hover:bg-stone-800/40",
    },
    {
      name: "Official Mailbox",
      detail: "hello@laniksbeauty.com",
      description: "Wholesale distributions, wedding bridal orders & inquiries",
      href: "mailto:hello@laniksbeauty.com",
      icon: FaEnvelope,
      colorClass: "text-amber-400 group-hover:bg-amber-950/40",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-20 lg:py-32 bg-stone-950 border-t border-stone-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Module */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-amber-400 font-semibold mb-3 block">
            Connect With Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-stone-50 font-normal tracking-tight mb-4">
            Begin Your Luxury Experience
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light tracking-wide">
            Our specialized sales consultants are available to help verify hair
            textures, process fast shipping inside Lagos, or package custom
            non-tarnish luxury bridal jewelry.
          </p>
        </div>

        {/* Channels Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <a
                key={i}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col p-6 rounded-2xl bg-stone-900/30 border border-stone-800/60 transition-all duration-300 hover:border-amber-500/20 hover:bg-stone-900/50 hover:shadow-xl hover:shadow-amber-950/5"
              >
                {/* Micro Animated Brand Anchor Badge */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-stone-900 border border-stone-800 transition-colors duration-300 ${channel.colorClass} mb-5`}
                >
                  <Icon className="text-xl" />
                </div>

                <h3 className="text-base font-serif text-stone-100 font-medium mb-1 tracking-wide">
                  {channel.name}
                </h3>

                <p className="text-sm text-amber-400 font-sans font-medium tracking-tight mb-2">
                  {channel.detail}
                </p>

                <p className="text-xs text-stone-400 font-light leading-relaxed mt-auto">
                  {channel.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
