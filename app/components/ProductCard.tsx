import { Star, ShoppingCart, Link } from "lucide-react";
import { Product } from "../types";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function isSponsored(productId: string) {
  const sum = productId
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  // Arbitrary threshold to show ~30% as sponsored
  return sum % 10 < 3;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const showSponsored = isSponsored(product.id);

  return (
    <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow group">
      <a
        href={`/product/${product.id}`}
        className="aspect-square mb-3 overflow-hidden rounded block"
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </a>

      {/* Sponsored tag */}
      {showSponsored && (
        <div className="text-xs text-gray-500 mb-1">Sponsored</div>
      )}

      <a
        href={`/product/${product.id}`}
        className="mb-2 text-gray-900 line-clamp-2 min-h-[2.5rem] hover:text-orange-600 block"
      >
        {product.name}
      </a>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? "fill-orange-400 text-orange-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <a
          href={`/product/${product.id}#reviews`}
          className="text-sm text-blue-600 hover:text-orange-600"
        >
          {product.reviews.toLocaleString()}
        </a>
      </div>

      {/* Price */}
      <div className="mb-3">
        <div className="flex items-baseline gap-2">
          {product.originalPrice && (
            <>
              <span className="text-xs text-red-600">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}
                %
              </span>
              <span className="text-xs">Limited time deal</span>
            </>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Prime badge */}
      {product.prime && (
        <div className="mb-3">
          <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
            Prime
          </span>
          <span className="text-xs text-gray-600 ml-2">
            FREE delivery{" "}
            {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { weekday: "short", month: "short", day: "numeric" }
            )}
          </span>
        </div>
      )}

      {/* Stock status */}
      <div className="mb-3">
        {product.inStock ? (
          <span className="text-sm text-green-600">In Stock</span>
        ) : (
          <span className="text-sm text-red-600">Out of Stock</span>
        )}
      </div>

      {/* Add to cart button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onAddToCart(product);
        }}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <ShoppingCart className="w-4 h-4" />
        Add to Cart
      </button>
    </div>
  );
}
