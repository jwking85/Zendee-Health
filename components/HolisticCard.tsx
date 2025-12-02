import React from 'react';
import { Leaf, Sparkles, Sprout, Target, Pill, AlertTriangle, ShoppingCart } from 'lucide-react';
import type { HealthResponse } from '../types';

interface HolisticCardProps {
  data?: HealthResponse["holistic"];
  isPro: boolean;
  onUnlockAttempt: () => void;
}

export const HolisticCard: React.FC<HolisticCardProps> = ({ data, isPro }) => {
  if (!data) return null;

  const { protocols, lifestyle, supplements, cautions } = data;

  return (
    <div className={`
      relative bg-white rounded-[2rem] shadow-xl overflow-hidden border h-full flex flex-col transition-all duration-500 group
      ${isPro ? 'border-amber-200 shadow-amber-100/50' : 'border-teal-100 shadow-gray-200/50'}
    `}>
      {/* Premium Gradient Header */}
      <div className={`
        p-6 sm:p-8 border-b flex items-center justify-between gap-3 transition-all duration-500
        ${isPro ? 'bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-amber-100' : 'bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-100'}
      `}>
        <div className="flex items-center gap-4">
          <div className={`
            p-3 rounded-2xl shadow-sm transition-colors duration-500
            ${isPro ? 'bg-white text-amber-600 ring-1 ring-amber-100' : 'bg-white text-teal-600 ring-1 ring-teal-100'}
          `}>
            <Leaf className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Natural Wellness</h3>
            <span className={`text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${isPro ? 'text-amber-700' : 'text-teal-700'}`}>
              Root Cause Approach
            </span>
          </div>
        </div>
        {isPro && (
          <span className="bg-white/90 backdrop-blur border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm animate-fade-in hidden sm:flex">
            <Sparkles className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            PRO ACTIVE
          </span>
        )}
      </div>

      <div className="p-6 sm:p-8 space-y-8 flex-grow">
        {/* Protocols */}
        {protocols?.length > 0 && (
          <div className="mb-6">
            <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${isPro ? 'text-amber-800' : 'text-teal-800'}`}>
              <Target className="w-4 h-4" />
              Holistic Protocols
            </h3>
            <ul className="space-y-4">
              {protocols.map((protocol, idx) => (
                <li
                  key={idx}
                  className={`rounded-xl border p-4 transition-colors duration-500 ${isPro ? 'border-amber-100 bg-amber-50/70' : 'border-teal-100 bg-teal-50/70'}`}
                >
                  <div className={`text-[11px] font-semibold uppercase tracking-wide mb-1 ${isPro ? 'text-amber-700' : 'text-teal-700'}`}>
                    {protocol.focusArea}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mb-2">
                    {protocol.title}
                  </div>
                  <p className="text-sm text-slate-700 mb-2">
                    {protocol.approach}
                  </p>

                  {protocol.details && (
                    <p className="text-xs text-slate-600 mb-2">
                      {protocol.details}
                    </p>
                  )}

                  {protocol.reasoning && (
                    <p className="text-xs text-slate-600 mb-2">
                      <span className="font-semibold">Why this might help: </span>
                      {protocol.reasoning}
                    </p>
                  )}

                  {protocol.shoppingList && protocol.shoppingList.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <p className={`text-[11px] font-semibold mb-2 flex items-center gap-1 ${isPro ? 'text-amber-800' : 'text-teal-800'}`}>
                        <ShoppingCart className="w-3 h-3" />
                        Shopping List
                      </p>
                      <ul className="list-disc list-inside text-[11px] text-slate-700 space-y-1">
                        {protocol.shoppingList.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lifestyle */}
        {lifestyle && lifestyle.length > 0 && (
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${isPro ? 'text-amber-800' : 'text-teal-800'}`}>
              <Sprout className="w-4 h-4" />
              Lifestyle Changes
            </h4>
            <ul className="space-y-3">
              {lifestyle.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Supplements */}
        {supplements && supplements.length > 0 && (
          <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              <Pill className="w-4 h-4 text-slate-500" />
              Supplements to Consider
            </h4>
            <ul className="space-y-3">
              {supplements.map((supplement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                  <span>{supplement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cautions */}
        {cautions && cautions.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
              <AlertTriangle className="w-4 h-4" />
              Important Notes
            </h4>
            <ul className="space-y-3">
              {cautions.map((caution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
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