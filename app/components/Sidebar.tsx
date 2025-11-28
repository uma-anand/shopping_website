"use client";

import { Star } from "lucide-react";

interface SidebarProps {
  selectedCategory: string;
  priceRange: [number, number];
  primeOnly: boolean;
  minRating: number;
  onCategoryChange: (category: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onPrimeChange: (prime: boolean) => void;
  onRatingChange: (rating: number) => void;
}

export function Sidebar({
  selectedCategory,
  priceRange,
  primeOnly,
  minRating,
  onCategoryChange,
  onPriceChange,
  onPrimeChange,
  onRatingChange,
}: SidebarProps) {
  const categories = [
    "All",
    "Electronics",
    "Home & Kitchen",
    "Sports",
    "Clothing",
  ];
  const priceRanges: { label: string; range: [number, number] }[] = [
    { label: "Under $25", range: [0, 25] },
    { label: "$25 to $50", range: [25, 50] },
    { label: "$50 to $100", range: [50, 100] },
    { label: "$100 & Above", range: [100, 500] },
  ];

  return (
    <aside className="w-64 bg-white p-4 border-r hidden lg:block">
      <div className="mb-6">
        <h3 className="mb-3">Category</h3>
        {categories.map((c) => (
          <label
            key={c}
            className="flex items-center gap-2 cursor-pointer hover:text-orange-600"
          >
            <input
              type="radio"
              className="w-4 h-4"
              checked={selectedCategory === c}
              onChange={() => onCategoryChange(c)}
            />
            {c}
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="mb-3">Price</h3>
        {priceRanges.map((p, i) => (
          <label
            key={i}
            className="flex items-center gap-2 cursor-pointer hover:text-orange-600"
          >
            <input
              type="radio"
              className="w-4 h-4"
              checked={
                priceRange[0] === p.range[0] && priceRange[1] === p.range[1]
              }
              onChange={() => onPriceChange(p.range)}
            />
            {p.label}
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="mb-3">Prime</h3>
        <label className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={primeOnly}
            onChange={() => onPrimeChange(!primeOnly)}
          />
          Prime
        </label>
      </div>

      <div>
        <h3 className="mb-3">Rating</h3>
        {[4, 3, 2, 1].map((r) => (
          <label
            key={r}
            className="flex items-center gap-2 cursor-pointer hover:text-orange-600"
          >
            <input
              type="radio"
              className="w-4 h-4"
              checked={minRating === r}
              onChange={() => onRatingChange(r)}
            />
            <div className="flex gap-1">
              {Array.from({ length: r }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-orange-400 text-orange-400"
                />
              ))}
            </div>
          </label>
        ))}
        <label className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            className="w-4 h-4"
            checked={minRating === 0}
            onChange={() => onRatingChange(0)}
          />
          All Ratings
        </label>
      </div>
    </aside>
  );
}
