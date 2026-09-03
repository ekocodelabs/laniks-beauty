"use client";

import Image from "next/image";

export default function AboutLayout() {
  return (
    <section
      id="about"
      className="relative w-full py-20 lg:py-32 bg-stone-950 overflow-hidden"
    >
      {/* Subtle Background Branding Glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 1. Media Canvas Layer (5 Columns on Large Displays) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 order-2 lg:order-1">
            {/* The High-End Product Focus Image */}
            <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden border border-stone-800 shadow-2xl group">
              <Image
                src="/images/banner.jpg" // Sourced securely from your public folder
                alt="Luxury raw donor hair extensions and non-tarnish gold accessories by Laniks Beauty"
                fill
                sizes="(max-w-1024px) 50vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/40 via-transparent to-transparent" />
            </div>

            {/* The Dynamic Secondary Video Layer */}
            <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden border border-stone-800 shadow-2xl lg:-mt-12 lg:ml-12 bg-stone-900 z-10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full opacity-90"
                poster="/images/banner3.jpg"
              >
                <source src="/images/video banner.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-stone-950/10 pointer-events-none" />
            </div>
          </div>

          {/* 2. Structured Copywriting Framework (7 Columns on Large Displays) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Section Tagline */}
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-amber-400 font-semibold mb-3">
              The Laniks Legacy
            </span>

            {/* H2 Title Tag optimized with core niche search items */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-stone-50 font-normal tracking-tight leading-tight mb-6">
              Crafting Premium Wigs & <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-400 to-amber-200 font-semibold">
                Anti-Tarnish Luxury Jewelry
              </span>
            </h2>

            {/* Targeted Narrative Copy embedding high-volume local longtail keywords natively */}
            <div className="space-y-5 text-stone-300 font-light text-sm sm:text-base leading-relaxed tracking-wide">
              <p>
                Founded on the promise of timeless indulgence, **Laniks Beauty**
                caters to women across Nigeria who refuse to compromise on
                quality. We specialize in sourcing unprocessed, luxury{" "}
                <strong className="text-stone-100 font-medium">
                  premium raw donor human hair wigs
                </strong>{" "}
                and precision-cut closures that offer seamless natural lace
                blending and unparalleled longevity.
              </p>

              <p>
                Beyond premium hair extensions, we curate a sophisticated
                universe of
                <strong className="text-stone-100 font-medium">
                  {" "}
                  non-tarnish gold accessories in Lagos
                </strong>
                . From luxury bridal jewelry sets to brilliant cubic zirconia
                statement rings, our collection undergoes strict resistance
                testing to withstand premium daily wear without changing color
                or losing brilliance.
              </p>

              <p className="border-l-2 border-amber-500/40 pl-4 py-1 text-stone-400 italic">
                “True beauty is an asset that commands attention. Laniks ensures
                your crown is uncompromisingly brilliant, whether through
                flowing raw bundles or high-luster premium gemstones.”
              </p>
            </div>

            {/* Strategic Trust Multipliers/Badges for the Nigerian Market */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-stone-900 mt-10">
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-serif text-amber-400 font-bold">
                  100%
                </p>
                <p className="text-[11px] sm:text-xs text-stone-400 tracking-wide uppercase mt-1">
                  Verified Human Hair
                </p>
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-serif text-amber-400 font-bold">
                  Anti-Rust
                </p>
                <p className="text-[11px] sm:text-xs text-stone-400 tracking-wide uppercase mt-1">
                  Non-Tarnish Metals
                </p>
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-serif text-amber-400 font-bold">
                  Nationwide
                </p>
                <p className="text-[11px] sm:text-xs text-stone-400 tracking-wide uppercase mt-1">
                  Fast Delivery Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
