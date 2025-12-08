import React from "react";
import {
  Leaf,
  ShoppingCart,
  HeartPulse,
  AlertTriangle,
  Info,
} from "lucide-react";
import type { HealthResponse } from "../types";
import { CollapsibleSection } from "./CollapsibleSection";
import { resolveAffiliateUrl } from "../src/lib/affiliate";

type HolisticData = HealthResponse["holistic"];

interface HolisticCardProps {
  data: HolisticData;
  isPro: boolean; // kept for future features, not gating anything now
}

export const HolisticCard: React.FC<HolisticCardProps> = ({ data }) => {
  const { protocols = [], lifestyle = [], supplements = [], cautions = [] } =
    data || {};

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

      <div className="px-6 pb-6 pt-4 space-y-5">
        {/* Tiny helper hint */}
        <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-emerald-700/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Keep scrolling for more natural wellness ideas, lifestyle changes and
          cautions.
        </p>

        {/* Holistic protocols */}
        {protocols?.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <HeartPulse className="h-4 w-4 text-emerald-600" />
              <h3 className="text-xs font-semibold tracking-wide text-emerald-800 uppercase">
                Holistic Protocols
              </h3>
            </div>

            <div className="space-y-3">
              {protocols.map((protocol, index) => (
                <CollapsibleSection
                  key={`${protocol.title}-${index}`}
                  label={protocol.title}
                  badge={protocol.focusArea}
                  defaultOpen={index < 2} // first two open by default
                >
                  <div className="space-y-3">
                    {protocol.approach && (
                      <p className="text-sm text-slate-700">
                        {protocol.approach}
                      </p>
                    )}

                    {protocol.details && (
                      <p className="text-xs leading-relaxed text-slate-700/90">
                        {protocol.details}
                      </p>
                    )}

                    {protocol.reasoning && (
                      <p className="text-xs leading-relaxed text-slate-600">
                        <span className="font-semibold text-emerald-800">
                          Why this might help:
                        </span>{" "}
                        {protocol.reasoning}
                      </p>
                    )}

                    {protocol.shoppingList && protocol.shoppingList.length > 0 && (
                      <div className="mt-2 rounded-xl border border-emerald-100 bg-emerald-50/70 px-3 py-2.5">
                        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-800">
                          <ShoppingCart className="h-3.5 w-3.5" />
                          Shopping List
                        </div>

                        <ul className="mt-1.5 space-y-1.5 text-xs text-slate-700">
                          {protocol.shoppingList.map((item, idx) => {
                            const name = String(item).trim();
                            const href = resolveAffiliateUrl(name);

                            return (
                              <li key={idx} className="flex gap-1.5">
                                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />

                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 text-emerald-800 hover:text-emerald-900 hover:underline underline-offset-2"
                                >
                                  {name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>

                        <p className="mt-1.5 text-[10px] text-emerald-700/70">
                          Some items use affiliate links. If you purchase through them, Remedy Clear
                          may earn a small commission at no extra cost to you.
                        </p>
                      </div>
                    )}
                  </div>
                </CollapsibleSection>
              ))}
            </div>
          </section>
        )}

        {/* Lifestyle changes */}
        {lifestyle && lifestyle.length > 0 && (
          <section className="space-y-2">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-emerald-600" />
              <h3 className="text-xs font-semibold tracking-wide text-emerald-800 uppercase">
                Lifestyle Changes
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {lifestyle.map((tip, idx) => (
                <li key={idx} className="flex gap-1.5">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Supplements */}
        {supplements && supplements.length > 0 && (
          <section className="space-y-2">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-emerald-600" />
              <h3 className="text-xs font-semibold tracking-wide text-emerald-800 uppercase">
                Supplements to Consider
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {supplements.map((tip, idx) => {
                const name = String(tip).trim();
                const href = resolveAffiliateUrl(name);

                return (
                  <li key={idx} className="flex gap-1.5">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-emerald-800 hover:text-emerald-900 hover:underline underline-offset-2"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Cautions */}
        {cautions && cautions.length > 0 && (
          <section className="mt-3 rounded-2xl border border-amber-200 bg-amber-50/80 px-3.5 py-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <h3 className="text-xs font-semibold tracking-wide text-amber-800 uppercase">
                Important Notes
              </h3>
            </div>
            <ul className="mt-1.5 space-y-1.5 text-xs text-amber-900/90">
              {cautions.map((tip, idx) => (
                <li key={idx} className="flex gap-1.5">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
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
