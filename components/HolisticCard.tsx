import React from 'react';
import { Leaf, Sparkles, Sprout, Target, Pill, AlertTriangle, ShoppingCart } from 'lucide-react';
import type { HealthResponse } from '../types';
import { affiliateLinks } from '../constants/affiliateLinks';

// Helper function to create shop URL slugs
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Helper function to create affiliate URLs
const makeAffiliateUrl = (item: string): string => {
  return affiliateLinks[item] ?? `/shop?item=${encodeURIComponent(item)}`;
};

interface HolisticCardProps {
  data?: HealthResponse["holistic"];
  isPro: boolean;
  onUnlockAttempt?: () => void;
}

export const HolisticCard: React.FC<HolisticCardProps> = ({ data, isPro, onUnlockAttempt }) => {
  if (!data) return null;

  const { protocols, lifestyle, supplements, cautions } = data;

  // Safe click handler that never crashes
  const handleUnlockClick = () => {
    if (onUnlockAttempt) {
      onUnlockAttempt();
    }
  };

  return (
    <div className={`
      group relative h-full flex flex-col overflow-hidden rounded-[1.75rem] border-2 bg-emerald-50/60 shadow-2xl transition-all duration-300
      ${isPro ? 'border-emerald-300 shadow-emerald-200/60 hover:shadow-3xl hover:shadow-emerald-300/70' : 'border-emerald-200 shadow-emerald-200/50 hover:shadow-3xl hover:shadow-emerald-300/60'}
      hover:-translate-y-1
    `}>
      {/* Premium Gradient Header */}
      <div className={`
        flex items-center justify-between gap-3 border-b-2 p-5 transition-all duration-300 md:p-6
        ${isPro ? 'border-emerald-300 bg-gradient-to-br from-emerald-100 via-teal-100 to-emerald-50' : 'border-emerald-200 bg-gradient-to-br from-emerald-100 to-teal-50'}
      `}>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl shadow-sm bg-white text-emerald-600 ring-1 ring-emerald-200">
            <Leaf className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-clarity-slate tracking-tight">Natural Wellness</h3>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Root Cause Approach
            </span>
          </div>
        </div>
        {isPro && (
          <span className="bg-white/90 backdrop-blur border border-emerald-300 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm animate-fade-in hidden sm:flex">
            <Sparkles className="w-3.5 h-3.5 fill-emerald-400 text-emerald-600" />
            PRO ACTIVE
          </span>
        )}
      </div>

      <div className="relative flex-grow space-y-6 bg-white p-5 md:p-6">
        {/* Preview for Non-Pro Users */}
        {!isPro && (
          <div className="space-y-6">
            <div className="relative">
              <div className="space-y-4 text-sm text-emerald-900/90">
                <p className="leading-relaxed">
                  Natural wellness looks at root causes instead of just symptoms – things like
                  inflammation, gut health, nutrients, hormones, sleep, and stress.
                </p>
                <ul className="space-y-2 list-disc pl-5 leading-relaxed">
                  <li>Connects your symptom to deeper patterns in your lifestyle and labs.</li>
                  <li>Focuses on nutrition, detox pathways, movement, and nervous system support.</li>
                  <li>Builds a step-by-step plan instead of a one-time quick fix.</li>
                </ul>
              </div>
              {/* Soft fade overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-emerald-50/40 to-transparent" />
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleUnlockClick}
              className="flex w-full h-[52px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 text-base font-bold text-white shadow-xl shadow-emerald-500/40 transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-2xl hover:shadow-emerald-500/50 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
            >
              <Sparkles className="h-5 w-5" />
              Unlock Full Natural Wellness Plan
            </button>
          </div>
        )}

        {/* Protocols - Only show when Pro */}
        {isPro && protocols?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-emerald-700">
              <Target className="w-4 h-4" />
              Holistic Protocols
            </h3>
            <ul className="space-y-4">
              {protocols.map((protocol, idx) => (
                <li
                  key={idx}
                  className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wide mb-1 text-emerald-700">
                    {protocol.focusArea}
                  </div>
                  <div className="text-[15px] font-semibold text-clarity-slate mb-2 md:text-base">
                    {protocol.title}
                  </div>
                  <p className="text-[15px] text-slate-700 mb-2 leading-relaxed">
                    {protocol.approach}
                  </p>

                  {protocol.details && (
                    <p className="text-sm text-slate-600 mb-2 leading-relaxed">
                      {protocol.details}
                    </p>
                  )}

                  {protocol.reasoning && (
                    <p className="text-sm text-slate-600 mb-2 leading-relaxed">
                      <span className="font-semibold">Why this might help: </span>
                      {protocol.reasoning}
                    </p>
                  )}

                  {protocol.shoppingList && protocol.shoppingList.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-emerald-200 bg-emerald-50/30 -mx-4 px-4 pb-1">
                      <p className="text-xs font-bold mb-3 flex items-center gap-1.5 text-emerald-700 uppercase tracking-wider">
                        <ShoppingCart className="w-4 h-4" />
                        Shopping List
                      </p>
                      <ul className="space-y-2">
                        {protocol.shoppingList.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                            <a
                              href={makeAffiliateUrl(item)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-emerald-700 underline decoration-emerald-300 decoration-2 underline-offset-2 transition hover:text-emerald-800 hover:decoration-emerald-500"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lifestyle - Only show when Pro */}
        {isPro && lifestyle && lifestyle.length > 0 && (
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

        {/* Supplements - Only show when Pro */}
        {isPro && supplements && supplements.length > 0 && (
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

        {/* Cautions - Only show when Pro */}
        {isPro && cautions && cautions.length > 0 && (
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