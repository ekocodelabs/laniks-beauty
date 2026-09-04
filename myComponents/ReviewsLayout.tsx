"use client";

import { FaStar, FaCheckCircle } from "react-icons/fa";

interface ReviewItem {
  id: string;
  name: string;
  location: string;
  verified: boolean;
  rating: number;
  productPurchased: string;
  body: string;
  date: string;
}

export default function ReviewsLayout() {
  // A balanced 4-review matrix showcasing specific target customer testimonials
  const reviews: ReviewItem[] = [
    {
      id: "review-1",
      name: "Chioma AK.",
      location: "Lekki, Lagos",
      verified: true,
      rating: 5,
      productPurchased: "Raw Bone Straight Closure Wig",
      body: "The texture retention on this bone straight hair is flawless. I have installed it three times now, flat-ironed it, and it still holds that rich, mirror-like premium shine. Complete value for money.",
      date: "2 weeks ago",
    },
    {
      id: "review-2",
      name: "Amina B.",
      location: "Abuja, FCT",
      verified: true,
      rating: 5,
      productPurchased: "Zirconia Imperial Bridal Set",
      body: "I purchased the bridal set for my wedding, and the sparkle under the lights was striking. The stones are firmly set and looks like fine diamond jewelry. I received endless compliments!",
      date: "1 month ago",
    },
    {
      id: "review-3",
      name: "Funmi O.",
      location: "Ikeja, Lagos",
      verified: true,
      rating: 5,
      productPurchased: "18k Gold Plated Cuban Choker",
      body: "Living in Lagos means humidity usually destroys gold-plated accessories quickly. But I've worn this anti-tarnish Cuban choker daily for months—even sweat hasn't changed its color. Truly non-tarnish!",
      date: "3 weeks ago",
    },
    {
      id: "review-4",
      name: "Blessing E.",
      location: "Port Harcourt",
      verified: true,
      rating: 5,
      productPurchased: "Double Drawn Bouncy Curls",
      body: "Incredibly thick bundles from top to bottom with absolutely zero shedding. The lace blends seamlessly into my skin. Laniks Beauty is officially my only trusted donor hair plugs now.",
      date: "2 months ago",
    },
  ];

  return (
    <section
      id="reviews"
      className="w-full py-20 lg:py-32 bg-stone-950 border-t border-stone-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Copy */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-amber-400 font-semibold mb-3 block">
            Client Testimonials
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-stone-50 font-normal tracking-tight mb-4">
            Trusted by Connoisseurs of Luxury
          </h2>
          <p className="text-stone-400 text-sm font-light tracking-wide">
            Read transparent feedback from our verified clientele across Nigeria
            detailing their experiences with our premium human hair cuts and
            non-tarnish accessories.
          </p>
        </div>

        {/* Responsive Grid Matrix Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col bg-stone-900/20 border border-stone-900 rounded-2xl p-6 transition-all duration-300 hover:border-amber-500/20 hover:bg-stone-900/40"
            >
              {/* Star Rating Layout Row */}
              <div className="flex items-center gap-1 mb-4 text-amber-400 text-xs">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Testimonial Text */}
              <p className="text-stone-300 text-sm font-light leading-relaxed tracking-wide mb-6 flex-1">
                “{review.body}”
              </p>

              {/* Product Attribution Badge Segment */}
              <div className="border-t border-stone-900/80 pt-4 mt-auto">
                <span className="block text-[10px] uppercase tracking-wider text-amber-500/80 font-medium mb-2">
                  Item: {review.productPurchased}
                </span>

                {/* Profile Card Context Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-stone-100 flex items-center gap-1.5 font-serif">
                      {review.name}
                      {review.verified && (
                        <FaCheckCircle
                          className="text-emerald-500 text-xs"
                          title="Verified Purchase"
                        />
                      )}
                    </h4>
                    <span className="text-[11px] text-stone-500 font-light">
                      {review.location}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-600 font-sans">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
