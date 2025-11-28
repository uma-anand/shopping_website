"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ProductSpecsProps {
  specifications: Record<string, string>;
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const entries = Object.entries(specifications);
  const displayedEntries = isExpanded ? entries : entries.slice(0, 5);

  return (
    <div>
      <h2 className="mb-3">Technical Details</h2>
      <div className="border rounded">
        <table className="w-full text-sm">
          <tbody>
            {displayedEntries.map(([key, value], index) => (
              <tr
                key={key}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4 text-gray-700 border-r">{key}</td>
                <td className="py-2 px-4 text-gray-900">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {entries.length > 5 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-blue-600 hover:text-orange-600 hover:underline flex items-center gap-1 text-sm"
        >
          <span>{isExpanded ? "See less" : "See more"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}
