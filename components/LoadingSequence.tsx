import React, { useEffect, useState } from 'react';
import { Search, Database, Scale, Sparkles } from 'lucide-react';

export const LoadingSequence: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 0s: Start, 0.8s: Researching, 2.0s: Comparing, 3.2s: Finalizing
    const times = [0, 800, 2000, 3200];
    const timeouts = times.map((t, i) => setTimeout(() => setStep(i), t));
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const steps = [
    { icon: Search, text: "🔍 Checking symptoms...", color: "text-gray-500", barColor: "bg-gray-300" },
    { icon: Database, text: "🧬 Looking for root causes...", color: "text-blue-500", barColor: "bg-blue-500" },
    { icon: Scale, text: "⚖️ Comparing paths...", color: "text-amber-500", barColor: "bg-amber-500" },
    { icon: Sparkles, text: "✨ Finishing up...", color: "text-teal-600", barColor: "bg-teal-600" }
  ];

  const CurrentIcon = steps[step]?.icon || Search;

  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in w-full">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-teal-50 rounded-full animate-ping opacity-30 duration-1000"></div>
        <div className="relative bg-white p-8 rounded-full shadow-2xl border border-gray-100">
          <CurrentIcon className={`w-12 h-12 ${steps[step]?.color} transition-all duration-500 animate-pulse`} />
        </div>
      </div>
      
      <div className="space-y-4 text-center max-w-xs mx-auto">
        <h3 className="text-xl font-bold text-gray-900 min-h-[28px] animate-fade-in tracking-tight">
          {steps[step]?.text}
        </h3>
        
        {/* Progress Bars */}
        <div className="flex gap-2 justify-center h-2">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`rounded-full transition-all duration-700 ease-out ${
                i <= step 
                  ? `w-8 ${steps[i].barColor}` 
                  : 'w-2 bg-gray-100'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};