import React, { useState } from 'react';
import { Leaf, Sparkles, Sprout, Target, Clock, Calculator, ArrowRight, BookOpen } from 'lucide-react';
import { HolisticPath } from '../types';
import { ProtocolItem } from './ProtocolItem';
import { StreamingText } from './StreamingText';
import { ShoppingList } from './ShoppingList';
import { DailyChecklist } from './DailyChecklist';

interface HolisticCardProps {
  data: HolisticPath;
  isPro: boolean;
  onUnlockAttempt: () => void;
}

export const HolisticCard: React.FC<HolisticCardProps> = ({ data, isPro, onUnlockAttempt }) => {
  const [weight, setWeight] = useState('');
  
  // Extract all products for the shopping list
  const allProducts = data.protocols.flatMap(p => p.shoppingList || []);

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
        {/* Philosophy - Streaming Text */}
        <div className="relative group/quote">
          <div className={`absolute -left-3 -top-3 text-6xl font-serif leading-none select-none transition-colors duration-500 opacity-20 ${isPro ? 'text-amber-300' : 'text-teal-300'}`}>"</div>
          <h4 className={`relative z-10 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${isPro ? 'text-amber-800' : 'text-teal-800'}`}>
            <Sprout className="w-4 h-4" />
            Perspective
          </h4>
          <p className="relative z-10 text-gray-800 leading-relaxed text-lg font-medium italic min-h-[60px]">
            <StreamingText text={data.philosophy} speed={25} />
          </p>
        </div>

        {/* Root Cause Analysis */}
        <div className={`rounded-2xl p-6 transition-colors duration-500 ${isPro ? 'bg-amber-50/50 border border-amber-100' : 'bg-teal-50/50 border border-teal-100'}`}>
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${isPro ? 'text-amber-800' : 'text-teal-800'}`}>
            <Target className="w-4 h-4" />
            Root Cause
          </h4>
          <p className="text-gray-900 leading-relaxed font-medium">
            {data.rootCause}
          </p>
          {data.researchNote && (
            <div className="mt-4 pt-4 border-t border-black/5 flex items-start gap-2 text-xs text-gray-500 font-medium">
               <BookOpen className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
               {data.researchNote}
            </div>
          )}
        </div>

        {/* Timeline */}
        <div>
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${isPro ? 'text-amber-800' : 'text-teal-800'}`}>
            <Clock className="w-4 h-4" />
            Timeline
          </h4>
          <p className={`text-sm leading-relaxed p-4 rounded-xl border font-medium ${isPro ? 'text-gray-700 bg-amber-50/30 border-amber-100' : 'text-gray-600 bg-teal-50/30 border-teal-100'}`}>
            {data.timeline}
          </p>
        </div>

        {/* Protocols List */}
        <div>
           <h4 className={`text-xs font-bold uppercase tracking-wider mb-6 ${isPro ? 'text-amber-800' : 'text-teal-800'}`}>
             Protocols
           </h4>
           
           <div className="space-y-8">
             {data.protocols.map((protocol, idx) => (
               <ProtocolItem 
                 key={idx} 
                 protocol={protocol} 
                 index={idx} 
                 isPro={isPro} 
                 onUnlock={onUnlockAttempt}
               />
             ))}
           </div>
        </div>

        {/* PRO UTILITIES SECTION */}
        <div className={`mt-10 border-t-2 border-dashed pt-8 ${isPro ? 'border-amber-200' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className={`w-5 h-5 ${isPro ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
            <h4 className={`font-bold uppercase tracking-wider ${isPro ? 'text-amber-900' : 'text-gray-400'}`}>Pro Tools</h4>
            {!isPro && <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full ml-2">LOCKED</span>}
          </div>

          <div className={`grid gap-4 ${!isPro ? 'opacity-40 pointer-events-none grayscale-[0.8]' : ''}`}>
            
            <ShoppingList products={allProducts} />

            {/* Dosage Calculator */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
               <h5 className="font-bold text-gray-800 flex items-center gap-2 mb-3">
                  <Calculator className="w-5 h-5 text-teal-600" /> Calculator
                </h5>
                <div className="flex gap-2">
                  <input 
                    type="number" 
                    placeholder="Weight (lbs)" 
                    className="w-28 px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:border-teal-500 transition-colors"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <div className="flex-grow flex items-center px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-600">
                    {weight ? (
                      <span className="text-teal-700 font-bold">Suggested: {Math.round(parseInt(weight) * 3.5)}mg daily</span>
                    ) : (
                      <span className="text-gray-400 italic">Enter weight...</span>
                    )}
                  </div>
                </div>
            </div>

            <DailyChecklist protocols={data.protocols} />
            
          </div>
          
          {!isPro && (
            <div className="mt-6 text-center">
               <button onClick={onUnlockAttempt} className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center justify-center gap-1 mx-auto transition-all hover:gap-2 px-6 py-3 bg-amber-50 rounded-full border border-amber-100 hover:bg-amber-100">
                 Unlock Pro Tools <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};