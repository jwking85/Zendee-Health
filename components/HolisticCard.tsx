import React from 'react';
import { Sprout, Pill, AlertTriangle, ShoppingCart } from 'lucide-react';
import type { HealthResponse } from '../types';
import { affiliateLinks } from '../constants/affiliateLinks';
import { CollapsibleSection } from './CollapsibleSection';

// Helper function to create shop URL slugs
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Helper function to create affiliate URLs (returns null if no affiliate link exists)
const makeAffiliateUrl = (item: string): string | null => {
  return affiliateLinks[item] ?? null;
};

interface HolisticCardProps {
  data?: HealthResponse["holistic"];
  isPro: boolean;
}

export const HolisticCard: React.FC<HolisticCardProps> = ({ data, isPro }) => {
  if (!data) return null;

  const { protocols, lifestyle, supplements, cautions } = data;

  return (
    <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50/80 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 p-6 border-b-2 border-emerald-200 bg-gradient-to-br from-emerald-100 to-teal-50">
        <div>
          <h2 className="text-lg font-semibold text-emerald-900 mb-1">
            Natural Wellness View
          </h2>
          <p className="text-xs text-emerald-900/80 max-w-md leading-relaxed">
            Lifestyle-focused ideas around sleep, nutrition, blood sugar, stress,
            and gut health so you can support your body from the root.
          </p>
        </div>
        {isPro && (
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 whitespace-nowrap">
            PRO ACTIVE
          </span>
        )}
      </div>

      <div className="relative flex-grow space-y-6 bg-white p-5 md:p-6">
        {/* Protocols - Always visible */}
        {protocols?.length > 0 && (
          <section className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
              Holistic Protocols
            </h3>
            <p className="flex items-center gap-1 text-[11px] text-emerald-700/80">
              <span className="inline-block h-1 w-1 rounded-full bg-emerald-500" />
              Keep scrolling for more natural wellness ideas, lifestyle changes, and cautions.
            </p>

            {protocols.map((protocol, index) => (
              <CollapsibleSection
                key={`${protocol.title}-${index}`}
                label={protocol.title}
                badge={protocol.focusArea}
                defaultOpen={index === 0}
              >
                <div className="space-y-2">
                  <p className="text-[13px] leading-relaxed">
                    {protocol.approach}
                  </p>
                  {protocol.details && (
                    <p className="text-[13px] leading-relaxed">
                      {protocol.details}
                    </p>
                  )}
                  {protocol.reasoning && (
                    <p className="text-[13px] leading-relaxed text-emerald-900/90">
                      <span className="font-semibold">Why this might help: </span>
                      {protocol.reasoning}
                    </p>
                  )}

                  {protocol.shoppingList && protocol.shoppingList.length > 0 && (
                    <div className="mt-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 flex items-center gap-1.5">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Shopping list
                      </p>
                      <ul className="mt-1 space-y-1">
                        {protocol.shoppingList.map((item, i) => {
                          const affiliateUrl = makeAffiliateUrl(item);
                          return (
                            <li key={i} className="flex items-start gap-2 text-[13px]">
                              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                              {affiliateUrl ? (
                                <a
                                  href={affiliateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-medium text-emerald-700 underline decoration-emerald-300 underline-offset-2 transition hover:text-emerald-800 hover:decoration-emerald-500"
                                >
                                  {item}
                                </a>
                              ) : (
                                <span className="font-medium text-emerald-800">{item}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </CollapsibleSection>
            ))}
          </section>
        )}

        {/* Lifestyle - Always visible */}
        {lifestyle && lifestyle.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 text-emerald-700">
              <Sprout className="w-4 h-4" />
              Lifestyle Changes
            </h4>
            <ul className="space-y-3">
              {lifestyle.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-[15px] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Supplements - Always visible */}
        {supplements && supplements.length > 0 && (
          <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-200">
            <h4 className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
              <Pill className="w-4 h-4" />
              Supplements to Consider
            </h4>
            <ul className="space-y-3">
              {supplements.map((supplement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-[15px] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>{supplement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cautions - Always visible */}
        {cautions && cautions.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
              <AlertTriangle className="w-4 h-4" />
              Important Notes
            </h4>
            <ul className="space-y-3">
              {cautions.map((caution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[15px] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span className="text-amber-800 font-medium">{caution}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
          *Natural approaches work best alongside professional medical care
        </p>
      </div>
    </div>
  );
};