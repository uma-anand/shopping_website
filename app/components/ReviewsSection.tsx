"use client";
import { Star, ThumbsUp, Check } from "lucide-react";
import { reviews } from "../data/reviews";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ReviewsSectionProps {
  productId: string;
}

export function ReviewsSection({ productId }: ReviewsSectionProps) {
  const productReviews = reviews.filter((r) => r.productId === productId);

  if (productReviews.length === 0) {
    return null;
  }

  const avgRating =
    productReviews.reduce((sum, r) => sum + r.rating, 0) /
    productReviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: productReviews.filter((r) => r.rating === stars).length,
    percentage:
      (productReviews.filter((r) => r.rating === stars).length /
        productReviews.length) *
      100,
  }));

  return (
    <div id="reviews" className="border-t pt-8">
      <h2 className="text-2xl mb-6">Customer reviews</h2>

      {/* Rating summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 bg-gray-50 p-6 rounded-lg">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(avgRating)
                      ? "fill-orange-400 text-orange-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xl">{avgRating.toFixed(1)} out of 5</span>
          </div>
          <p className="text-sm text-gray-600">
            {productReviews.length} global ratings
          </p>
        </div>

        <div className="space-y-2">
          {ratingDistribution.map(({ stars, percentage }) => (
            <div key={stars} className="flex items-center gap-3">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-orange-600 hover:underline whitespace-nowrap"
              >
                {stars} star
              </a>
              <div className="flex-1 h-6 bg-gray-200 rounded overflow-hidden">
                <div
                  className="h-full bg-orange-400"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 w-12 text-right">
                {percentage.toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Review filters */}
      <div className="mb-6">
        <h3 className="mb-3">Review this product</h3>
        <p className="text-sm text-gray-600 mb-4">
          Share your thoughts with other customers
        </p>
        <a
          href="#"
          className="border border-gray-300 rounded px-6 py-2 hover:bg-gray-50 inline-block"
        >
          Write a customer review
        </a>
      </div>

      <hr className="my-6" />

      {/* Filter and sort */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <select className="border rounded px-3 py-2 text-sm">
            <option>All reviews</option>
            <option>5 star only</option>
            <option>4 star only</option>
            <option>3 star only</option>
            <option>2 star only</option>
            <option>1 star only</option>
          </select>
          <select className="border rounded px-3 py-2 text-sm">
            <option>Top reviews</option>
            <option>Most recent</option>
          </select>
        </div>
      </div>

      {/* Individual reviews */}
      <div className="space-y-6">
        {productReviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-start gap-4">
              {/* Reviewer info */}
              <div className="flex-shrink-0">
                <a
                  href={review.author.profileUrl}
                  className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center block"
                >
                  <span className="text-gray-600 text-lg">
                    {review.author.name[0]}
                  </span>
                </a>
              </div>

              <div className="flex-1">
                {/* Author name */}
                <div className="mb-2">
                  <a
                    href={review.author.profileUrl}
                    className="hover:text-orange-600 hover:underline"
                  >
                    {review.author.name}
                  </a>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-orange-400 text-orange-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm">{review.title}</span>
                </div>

                {/* Review metadata */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                  <span>
                    Reviewed in the United States on{" "}
                    {new Date(review.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  {review.verifiedPurchase && (
                    <div className="flex items-center gap-1 text-orange-600">
                      <Check className="w-4 h-4" />
                      <span>Verified Purchase</span>
                    </div>
                  )}
                  {review.vine && (
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">
                      Vine Customer Review
                    </span>
                  )}
                </div>

                {/* Attributes */}
                {Object.keys(review.attributes).length > 0 && (
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                    {Object.entries(review.attributes).map(([key, value]) => (
                      <span key={key}>
                        <span className="capitalize">{key}:</span> {value}
                      </span>
                    ))}
                  </div>
                )}

                {/* Review text */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {review.body}
                  </p>
                </div>

                {/* Review images */}
                {review.images && review.images.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {review.images.map((image, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-24 h-24 border rounded overflow-hidden block"
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`Review image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    ))}
                  </div>
                )}

                {/* Review actions */}
                <div className="flex items-center gap-6 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Helpful ({review.helpful})</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See more reviews */}
      <div className="mt-6 text-center">
        <a
          href="#"
          className="text-blue-600 hover:text-orange-600 hover:underline"
        >
          See all {productReviews.length} reviews
        </a>
      </div>
    </div>
  );
}
