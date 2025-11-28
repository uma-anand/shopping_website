"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ProductGrid } from "./components/ProductGrid";
import { Cart } from "./components/Cart";
import { Product, CartItem } from "./types";
import { products } from "./data/products";

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [primeOnly, setPrimeOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Cart actions
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== productId));
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === productId ? { ...i, quantity } : i))
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Filtered products
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchesPrime = !primeOnly || p.prime;
    const matchesRating = p.rating >= minRating;
    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      matchesCategory &&
      matchesPrice &&
      matchesPrime &&
      matchesRating &&
      matchesSearch
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <div className="flex max-w-[1500px] mx-auto">
        <Sidebar
          selectedCategory={selectedCategory}
          priceRange={priceRange}
          primeOnly={primeOnly}
          minRating={minRating}
          onCategoryChange={setSelectedCategory}
          onPriceChange={setPriceRange}
          onPrimeChange={setPrimeOnly}
          onRatingChange={setMinRating}
        />

        <main className="flex-1 p-6">
          <p className="text-gray-700 mb-4">
            {filteredProducts.length} results
            {searchQuery && ` for "${searchQuery}"`}
          </p>
          <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
        </main>
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={(id) => updateQuantity(id, 0)}
        total={cartTotal}
      />
    </div>
  );
}
