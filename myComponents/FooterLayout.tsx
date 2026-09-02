"use client";

import Link from "next/link";

export default function FooterLayout() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-stone-950 border-t border-stone-900/60 pt-16 pb-8 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Master Navigation Brand Space */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-900">
          {/* Brand Core Column */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <span className="text-lg font-serif text-stone-50 tracking-wider font-semibold">
              LANIKS <span className="text-amber-400 font-normal">BEAUTY</span>
            </span>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm tracking-wide">
              Nigeria’s choice for luxury unprocessed raw donor human hair wigs,
              premium closures, and authentic anti-tarnish jewelry accessories
              tailored to last a lifetime.
            </p>
          </div>

          {/* Catalog Categories Index Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-stone-200">
              Our Collections
            </span>
            <ul className="space-y-2 text-xs font-light tracking-wide">
              <li>
                <Link
                  href="/products?category=hair"
                  className="hover:text-amber-400 transition-colors"
                >
                  Premium Human Wigs
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=hair"
                  className="hover:text-amber-400 transition-colors"
                >
                  Raw Donor Bundles
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=jewelry"
                  className="hover:text-amber-400 transition-colors"
                >
                  Anti-Tarnish Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=jewelry"
                  className="hover:text-amber-400 transition-colors"
                >
                  Bridal Jewelry Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Informational Links */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-stone-200">
              Customer Support
            </span>
            <ul className="space-y-2 text-xs font-light tracking-wide">
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-400 transition-colors"
                >
                  The Laniks Legacy Story
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Book Bridal Consultations
                </a>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="hover:text-amber-400 transition-colors"
                >
                  Nationwide Delivery & Pickups
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Legal & Developer Signature Compliance Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-wide font-light">
          {/* Licensing & Copyright */}
          <p className="text-stone-500 order-2 sm:order-1 text-center sm:text-left">
            &copy; {currentYear} Laniks Beauty. All rights reserved. Registered
            in Nigeria.
          </p>

          {/* Essential Legal Policies Block */}
          <div className="flex items-center space-x-6 order-1 sm:order-2">
            <Link
              href="/privacy-policy"
              className="hover:text-stone-300 transition-colors underline underline-offset-4 decoration-stone-800 hover:decoration-amber-400/40"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-stone-300 transition-colors underline underline-offset-4 decoration-stone-800 hover:decoration-amber-400/40"
            >
              Terms of Use
            </Link>
          </div>

          {/* Premium Developer Attribution Accent */}
          <p className="text-stone-500 order-3 text-center sm:text-right">
            Designed & Engineered by{" "}
            <span className="text-stone-300 font-medium hover:text-amber-400 transition-colors cursor-pointer">
              ekocodelabs
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
