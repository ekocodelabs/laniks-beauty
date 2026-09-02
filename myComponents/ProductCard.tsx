"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  category: string;
  title: string;
  price: string;
  whatsappLink: string;
}

export function ProductCard({
  imageSrc,
  altText,
  category,
  title,
  price,
  whatsappLink,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col bg-stone-900/40 border border-stone-800/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-950/5">
      {/* 1. Image Container with Aspect Ratio Lock */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-stone-950">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Soft luxury shadow filter overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-stone-950/20 via-transparent to-transparent" />
      </div>

      {/* 2. Structured Descriptive Context */}
      <div className="flex flex-col flex-1 p-5">
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-amber-500 mb-2">
          {category}
        </span>

        <h3 className="text-base font-serif text-stone-100 font-normal tracking-wide line-clamp-1 mb-2 group-hover:text-amber-200 transition-colors">
          {title}
        </h3>

        <p className="text-lg font-medium text-stone-200 font-sans tracking-tight mb-5">
          {price}
        </p>

        {/* 3. CTA Action Area */}
        <Button
          variant="outline"
          className="mt-auto w-full border-stone-800 text-stone-300 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 font-medium transition-all duration-300"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Inquire via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
