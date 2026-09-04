"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";

// Strictly typed schema for standard internal maintenance
interface ProductItem {
  id: string;
  imageSrc: string;
  altText: string;
  category: "Luxury Hair" | "Premium Jewelry";
  title: string;
  price: string;
}

export default function ProductsLayout() {
  // Balanced mock matrix fulfilling specific operational layouts (2 Hair, 2 Jewelry)
  const featuredItems: ProductItem[] = [
    {
      id: "hair-1",
      imageSrc: "/images/product4.jpg",
      altText:
        "Premium Vietnamese raw bone straight human hair wig lace closure Laniks Beauty",
      category: "Luxury Hair",
      title: "Raw Bone Straight Closure Wig",
      price: "₦420,000",
    },
    {
      id: "hair-2",
      imageSrc: "/images/product5.jpg",
      altText:
        "Luxury donor bouncy curls human hair bundle frontal wig Laniks Beauty",
      category: "Luxury Hair",
      title: "Luxury Double Drawn Bouncy Curls",
      price: "₦385,000",
    },
    {
      id: "jewelry-1",
      imageSrc: "/images/product1.jpg",
      altText:
        "Premium non-tarnish cubic zirconia bridal necklace earrings set Lagos Nigeria",
      category: "Premium Jewelry",
      title: "Zirconia Imperial Bridal Set",
      price: "₦145,000",
    },
    {
      id: "jewelry-2",
      imageSrc: "/images/product2.jpg",
      altText:
        "18k gold plated anti-tarnish cuban link statement choker necklace Laniks Beauty",
      category: "Premium Jewelry",
      title: "18k Gold Plated Cuban Choker",
      price: "₦65,000",
    },
  ];

  // Global transactional messaging parser generator
  const generateWhatsappUrl = (productTitle: string) => {
    const baseNumber = "08088449647"; // Replace with company's operational terminal line
    const text = encodeURIComponent(
      `Hello Laniks Beauty, I would love to verify stock and purchase details for the item: "${productTitle}". Please send across ordering specifications.`,
    );
    return `https://wa.me/${baseNumber}?text=${text}`;
  };

  return (
    <section
      id="featured-products"
      className="w-full py-20 lg:py-32 bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Framework with Niche Identity Targets */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-amber-400 font-semibold mb-3 block">
              Curated Masterpieces
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-stone-50 font-normal tracking-tight">
              Shop Our Signature <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-400 font-semibold">
                Wigs & Accessories
              </span>
            </h2>
          </div>

          <p className="text-stone-400 text-sm max-w-sm md:text-right font-light leading-relaxed">
            Hand-selected, luxury human hair extensions paired seamlessly with
            elegant, non-tarnish statement jewelry pieces.
          </p>
        </div>

        {/* Dynamic 4-Item Display Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {featuredItems.map((item) => (
            <ProductCard
              key={item.id}
              imageSrc={item.imageSrc}
              altText={item.altText}
              category={item.category}
              title={item.title}
              price={item.price}
              whatsappLink={generateWhatsappUrl(item.title)}
            />
          ))}
        </div>

        {/* Global Catalog Navigation Anchor */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-medium tracking-wide shadow-xl shadow-amber-950/10 px-10 py-6 scale-100 hover:scale-[1.02] transition-all duration-300"
          >
            <Link href="/products">View All Masterpieces</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
