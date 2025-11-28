"use client";

import { useState } from "react";
import {
  ChevronLeft,
  Star,
  Check,
  MapPin,
  Shield,
  RotateCcw,
  Truck,
} from "lucide-react";
import { Product } from "../types";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ReviewsSection } from "./ReviewsSection";
import { QASection } from "./QASection";
import { ProductSpecs } from "./ProductSpecs";

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductDetail({ product, onAddToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const deliveryDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const fastestDelivery = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-[1500px] mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <a
              href="/"
              className="flex items-center gap-1 text-blue-600 hover:text-orange-600 hover:underline"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to results
            </a>
            <span className="text-gray-400">/</span>
            <a
              href={`/?category=${product.category}`}
              className="text-blue-600 hover:text-orange-600 hover:underline"
            >
              {product.category}
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 truncate max-w-md">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column - Images */}
          <div className="lg:col-span-5">
            <div className="sticky top-4">
              {/* Main image */}
              <div className="mb-4 border rounded-lg overflow-hidden bg-gray-50">
                <ImageWithFallback
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Thumbnail images */}
              <div className="grid grid-cols-6 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="border-2 rounded overflow-hidden border-gray-200"
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle column - Product info */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {/* Brand */}
              <div>
                <a
                  href={`/?brand=${product.brand}`}
                  className="text-blue-600 hover:text-orange-600 hover:underline"
                >
                  Visit the {product.brand} Store
                </a>
              </div>

              {/* Title */}
              <h1 className="text-2xl">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">{product.rating}</span>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-orange-400 text-orange-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <a
                  href="#reviews"
                  className="text-blue-600 hover:text-orange-600 hover:underline"
                >
                  {product.reviews.toLocaleString()} ratings
                </a>
              </div>

              {/* Bestseller badge */}
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded">
                <span className="text-sm">#1 Best Seller</span>
                <span className="text-sm">in {product.category}</span>
              </div>

              <hr />

              {/* Price */}
              <div className="space-y-2">
                {discount > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                      -{discount}%
                    </span>
                    <span className="text-red-600">Limited time deal</span>
                  </div>
                )}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl text-red-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">List Price:</span>
                      <span className="text-sm text-gray-600 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
                {discount > 0 && (
                  <p className="text-sm text-gray-600">
                    You Save: $
                    {(product.originalPrice! - product.price).toFixed(2)} (
                    {discount}%)
                  </p>
                )}
              </div>

              <hr />

              {/* About this item */}
              <div>
                <h2 className="mb-3">About this item</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-gray-600 mt-1">•</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr />

              {/* Product description */}
              <div>
                <h2 className="mb-2">Product Description</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <hr />

              {/* Specifications */}
              <ProductSpecs specifications={product.specifications} />
            </div>
          </div>

          {/* Right column - Buy box */}
          <div className="lg:col-span-3">
            <div className="border rounded-lg p-4 sticky top-4 space-y-4">
              {/* Price */}
              <div className="text-2xl">${product.price.toFixed(2)}</div>

              {/* Prime shipping */}
              {product.prime && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">Prime</span>
                    <Truck className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-sm">
                    <span className="text-green-700">FREE delivery</span>{" "}
                    <span className="font-bold">
                      {deliveryDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </p>
                  <p className="text-sm">
                    Or fastest delivery{" "}
                    <span className="font-bold">
                      {fastestDelivery.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </p>
                </div>
              )}

              {/* Delivery location */}
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <a
                  href="#"
                  className="text-blue-600 hover:text-orange-600 hover:underline"
                >
                  Deliver to New York 10001
                </a>
              </div>

              {/* Stock status */}
              <div className="text-lg text-green-700">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </div>

              {/* Quantity selector */}
              <div>
                <label className="text-sm block mb-1">Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded px-3 py-2 w-20"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add to cart button */}
              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    onAddToCart(product);
                  }
                }}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 rounded-full transition-colors"
              >
                Add to Cart
              </button>

              {/* Buy now button */}
              <button className="w-full bg-orange-400 hover:bg-orange-500 text-gray-900 py-2 rounded-full transition-colors">
                Buy Now
              </button>

              <hr />

              {/* Secure transaction */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-600" />
                  <a
                    href="#"
                    className="text-blue-600 hover:text-orange-600 hover:underline cursor-pointer"
                  >
                    Secure transaction
                  </a>
                </div>
                <div className="text-gray-700">
                  <span>Ships from: </span>
                  <span className="font-medium">Amazon</span>
                </div>
                <div className="text-gray-700">
                  <span>Sold by: </span>
                  <a
                    href={`/seller/${product.sellerId}`}
                    className="text-blue-600 hover:text-orange-600 hover:underline"
                  >
                    {product.seller}
                  </a>
                </div>
              </div>

              <hr />

              {/* Return policy */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <RotateCcw className="w-4 h-4 text-gray-600" />
                  <a
                    href="#"
                    className="text-blue-600 hover:text-orange-600 hover:underline"
                  >
                    30-day return policy
                  </a>
                </div>
                <div className="text-sm text-gray-700">
                  Eligible for return, refund or replacement within 30 days of
                  receipt
                </div>
              </div>

              <hr />

              {/* Add to list */}
              <a
                href="#"
                className="text-sm text-gray-700 hover:text-gray-900 block"
              >
                Add to List
              </a>
            </div>
          </div>
        </div>

        {/* Reviews and Q&A sections */}
        <div className="mt-8 space-y-8">
          <ReviewsSection productId={product.id} />
          <QASection productId={product.id} />
        </div>
      </div>
    </div>
  );
}
