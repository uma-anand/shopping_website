"use client";

import { Search, ShoppingCart, MapPin, Menu, User } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    if (searchValue) {
      params.set("search", searchValue);
    } else {
      params.delete("search");
    }
    window.location.href = "/?" + params.toString();
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Main header */}
      <div className="px-4 py-2">
        <div className="max-w-[1500px] mx-auto flex items-center gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Menu className="w-6 h-6 lg:hidden" />
            <div className="flex items-center gap-1">shopping.com</div>
          </a>

          {/* Deliver to */}
          <a
            href="#"
            className="hidden lg:flex items-center gap-1 hover:border border-white p-2 rounded"
          >
            <MapPin className="w-5 h-5" />
            <div className="text-left">
              <div className="text-xs text-gray-300">Deliver to</div>
              <div className="text-sm">New York 10001</div>
            </div>
          </a>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-3xl">
            <div className="flex">
              <select className="bg-gray-200 text-gray-900 px-3 py-2 rounded-l border-none focus:outline-none hidden md:block">
                <option>All</option>
                <option>Electronics</option>
                <option>Home & Kitchen</option>
                <option>Sports & Outdoors</option>
                <option>Clothing</option>
                <option>Luggage</option>
              </select>
              <input
                type="text"
                placeholder="Search shopping.com"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 px-4 py-2 text-gray-900 bg-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-400 px-4 py-2 rounded-r hover:bg-orange-500"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Account */}
          <a
            href="#"
            className="hidden lg:flex flex-col items-start hover:border border-white p-2 rounded"
          >
            <span className="text-xs">Hello, Sign in</span>
            <span className="text-sm">Account & Lists</span>
          </a>

          {/* Returns & Orders */}
          <a
            href="#"
            className="hidden lg:flex flex-col items-start hover:border border-white p-2 rounded"
          >
            <span className="text-xs">Returns</span>
            <span className="text-sm">& Orders</span>
          </a>

          {/* Cart */}
          <button
            onClick={onCartClick}
            className="flex items-center gap-2 hover:border border-white p-2 rounded relative"
          >
            <div className="relative">
              <ShoppingCart className="w-8 h-8" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
            <span className="hidden lg:block">Cart</span>
          </button>
        </div>
      </div>

      {/* Secondary nav */}
      <div className="bg-gray-800 px-4 py-2">
        <div className="max-w-[1500px] mx-auto flex items-center gap-6 text-sm">
          <a
            href="#"
            className="flex items-center gap-1 hover:border border-white p-1 rounded"
          >
            <Menu className="w-4 h-4" />
            <span>All</span>
          </a>
          <a href="#" className="hover:border border-white p-1 rounded">
            Today's Deals
          </a>
          <a href="#" className="hover:border border-white p-1 rounded">
            Customer Service
          </a>
          <a href="#" className="hover:border border-white p-1 rounded">
            Registry
          </a>
          <a href="#" className="hover:border border-white p-1 rounded">
            Gift Cards
          </a>
          <a href="#" className="hover:border border-white p-1 rounded">
            Sell
          </a>
        </div>
      </div>
    </header>
  );
}
