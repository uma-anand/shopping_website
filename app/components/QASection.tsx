"use client";

import { Search, ThumbsUp, ChevronDown } from "lucide-react";
import { qas } from "../data/reviews";
import { useState } from "react";

interface QASectionProps {
  productId: string;
}

export function QASection({ productId }: QASectionProps) {
  const productQAs = qas.filter((qa) => qa.productId === productId);
  const [expandedQAs, setExpandedQAs] = useState<Set<string>>(new Set());

  if (productQAs.length === 0) {
    return null;
  }

  const toggleQA = (qaId: string) => {
    setExpandedQAs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(qaId)) {
        newSet.delete(qaId);
      } else {
        newSet.add(qaId);
      }
      return newSet;
    });
  };

  return (
    <div className="border-t pt-8">
      <h2 className="text-2xl mb-6">Customer questions & answers</h2>

      {/* Search questions */}
      <div className="mb-6">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Have a question? Search for answers"
              className="w-full border rounded-lg px-4 py-2 pr-10"
            />
            <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="border border-gray-300 rounded-lg px-6 py-2 hover:bg-gray-50">
            Ask a question
          </button>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {productQAs.map((qa) => {
          const isExpanded = expandedQAs.has(qa.id);
          const displayedAnswers = isExpanded
            ? qa.answers
            : qa.answers.slice(0, 1);

          return (
            <div key={qa.id} className="border-b pb-6">
              {/* Question */}
              <div className="mb-4">
                <h3 className="mb-2">
                  <span className="mr-2">Q:</span>
                  <span>{qa.question}</span>
                </h3>
                <div className="text-sm text-gray-600 ml-5">
                  <span>{qa.asker.name}</span>
                  <span className="mx-2">•</span>
                  <span>
                    {new Date(qa.asker.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Answers */}
              <div className="ml-5 space-y-4">
                {displayedAnswers.map((answer) => (
                  <div
                    key={answer.id}
                    className="border-l-2 border-gray-200 pl-4"
                  >
                    <div className="flex gap-2 mb-2">
                      <span className="text-gray-600">A:</span>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 mb-2">
                          {answer.text}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <span>
                              By{" "}
                              <span
                                className={
                                  answer.sellerResponse ? "text-orange-600" : ""
                                }
                              >
                                {answer.answerer.name}
                              </span>
                            </span>
                            {answer.sellerResponse && (
                              <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">
                                Seller
                              </span>
                            )}
                          </div>
                          <span>•</span>
                          <span>
                            {new Date(answer.answerer.date).toLocaleDateString(
                              "en-US",
                              { month: "long", day: "numeric", year: "numeric" }
                            )}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-4">
                          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                            <ThumbsUp className="w-4 h-4" />
                            <span>Helpful ({answer.helpful})</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Show more answers */}
                {qa.answers.length > 1 && (
                  <button
                    onClick={() => toggleQA(qa.id)}
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-orange-600 ml-4"
                  >
                    <span>
                      {isExpanded
                        ? "See fewer answers"
                        : `See ${qa.answers.length - 1} more answer${
                            qa.answers.length - 1 > 1 ? "s" : ""
                          }`}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Answer this question */}
              <div className="mt-3 ml-5">
                <button className="text-sm text-blue-600 hover:text-orange-600 hover:underline">
                  Answer this question
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* See more questions */}
      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-orange-600 hover:underline">
          See all {productQAs.length} answered questions
        </button>
      </div>
    </div>
  );
}
