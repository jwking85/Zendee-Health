import React from "react";
import { ShoppingCart, Printer, ExternalLink } from "lucide-react";
import { resolveAffiliateUrl } from "../src/lib/affiliate";

interface ShoppingListProps {
  products: string[]; // Strings from AI output
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ products }) => {
  if (!products || products.length === 0) return null;

  // Deduplicate
  const uniqueProducts = [...new Set(products.map((p) => String(p).trim()))];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
        <h5 className="font-bold text-gray-800 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-teal-600" />
          Shopping List
        </h5>
        <button
          type="button"
          onClick={handlePrint}
          className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
          title="Print List"
        >
          <Printer className="w-4 h-4" />
        </button>
      </div>

      <ul className="space-y-3">
        {uniqueProducts.map((name, idx) => {
          // Unified resolver handles direct affiliate links + fallback Amazon search
          const href = resolveAffiliateUrl(name);

          return (
            <li key={idx} className="text-sm text-gray-700">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-4 h-4 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0 group-hover:border-teal-500 transition-colors" />

                <div className="flex-grow">
                  <span className="group-hover:text-gray-900 transition-colors">
                    {name}
                  </span>

                  <div className="mt-0.5 inline-flex items-center gap-1 text-[11px] text-teal-600 group-hover:text-teal-700">
                    View on Amazon
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
        <span>{uniqueProducts.length} items</span>
        <span className="italic">RemedyClear Recommendations</span>
      </div>
    </div>
  );
};

export default ShoppingList;
