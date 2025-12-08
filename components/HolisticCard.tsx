import React from "react";
import {
  Leaf,
  ShoppingCart,
  Info,
} from "lucide-react";
import type { RecommendationResponse } from "../types";
import { resolveAffiliateUrl } from "../src/lib/affiliate";

interface HolisticCardProps {
  data: RecommendationResponse;
  isPro: boolean; // kept for future features, not gating anything now
}

export const HolisticCard: React.FC<HolisticCardProps> = ({ data }) => {
  const {
    holisticRootCause = "",
    holisticExplanation = "",
    holisticProtocols = [],
    products = [],
  } = data || {};

  return (
    <article
      className="
        relative rounded-3xl border-2 border-emerald-300
        bg-gradient-to-br from-emerald-50 to-white
        shadow-[0_10px_35px_rgba(16,185,129,0.18)]
        animate-[fadeInUp_0.4s_ease-out]
        overflow-hidden
      "
    >
      {/* subtle top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500" />

      <header className="flex items-start justify-between gap-3 px-6 pt-6 pb-4">
        <div className="flex gap-3">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100">
            <Leaf className="h-5 w-5 text-emerald-700" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-emerald-900 border-l-4 border-emerald-400 pl-3">
              Natural Wellness View
            </h2>
            <p className="mt-1 text-xs text-emerald-900/80 max-w-md leading-relaxed">
              Lifestyle-focused ideas around sleep, nutrition, blood sugar,
              stress, and gut health so you can support your body from the root.
            </p>
          </div>
        </div>
      </header>

      <div className="border-t border-emerald-100" />

      <div className="px-6 pb-6 pt-4 space-y-6">
        {/* Root Cause */}
        {holisticRootCause && (
          <section>
            <h3 className="text-xs font-semibold tracking-wide text-emerald-700 uppercase mb-2">
              Holistic Perspective
            </h3>
            <p className="text-sm text-emerald-900 italic leading-relaxed">
              {holisticRootCause}
            </p>
          </section>
        )}

        {/* Explanation */}
        {holisticExplanation && (
          <section>
            <h3 className="text-xs font-semibold tracking-wide text-emerald-700 uppercase mb-2">
              Explanation
            </h3>
            <p className="text-sm text-emerald-900 leading-relaxed">
              {holisticExplanation}
            </p>
          </section>
        )}

        {/* Holistic protocols - now simple bullet points */}
        {holisticProtocols?.length > 0 && (
          <section>
            <h3 className="text-xs font-semibold tracking-wide text-emerald-700 uppercase mb-2">
              Natural Approaches
            </h3>
            <ul className="space-y-2">
              {holisticProtocols.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed text-emerald-900">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Products shopping list */}
        {products && products.length > 0 && (
          <section id="shopping-list" className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/70 px-3 py-2.5">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-800 mb-2">
              <ShoppingCart className="h-3.5 w-3.5" />
              Shopping list (inspired by the holistic view)
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              {products
                .sort((a, b) => a.priority - b.priority)
                .map((product) => {
                  const href = resolveAffiliateUrl(product.amazonSearchQuery || product.name);
                  return (
                    <li key={product.id} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-emerald-800 hover:text-emerald-900 hover:underline underline-offset-2"
                        >
                          {product.name}
                        </a>
                        {product.recommendedFor && (
                          <span className={`
                            inline-flex items-center rounded-full px-2 py-0.5 text-[0.65rem] font-medium
                            ${product.recommendedFor === 'standard'
                              ? 'bg-slate-100 text-slate-700'
                              : product.recommendedFor === 'holistic'
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-teal-50 text-teal-700'}
                          `}>
                            {product.recommendedFor === 'standard'
                              ? 'Standard pick'
                              : product.recommendedFor === 'holistic'
                              ? 'Holistic pick'
                              : 'Works for both views'}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>
            <p className="mt-2 text-[10px] text-emerald-700/70">
              Some items use affiliate links. If you purchase through them, Remedy Clear
              may earn a small commission at no extra cost to you.
            </p>
          </section>
        )}

        {/* Little reminder at the bottom */}
        <p className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
          <Info className="h-3 w-3 text-slate-400" />
          Natural approaches usually work best alongside professional medical
          care, not instead of it.
        </p>
      </div>
    </article>
  );
};
