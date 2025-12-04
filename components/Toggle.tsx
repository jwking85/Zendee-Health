import React from 'react';
import { Sparkles } from 'lucide-react';

interface ToggleProps {
  isPro: boolean;
  onToggle: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({ isPro, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        relative flex items-center p-1 rounded-full h-10 transition-all duration-300 ease-in-out cursor-pointer border-2
        ${isPro ? 'bg-amber-50 border-amber-200' : 'bg-gray-100 border-gray-200'}
      `}
    >
      <div className="flex relative z-10">
        <div className={`
          px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center
          ${!isPro ? 'text-white' : 'text-gray-500 hover:text-gray-700'}
        `}>
          Standard
        </div>
        <div className={`
          px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5
          ${isPro ? 'text-white' : 'text-gray-500 hover:text-gray-700'}
        `}>
          <Sparkles className={`w-3.5 h-3.5 ${isPro ? 'animate-pulse' : ''}`} />
          Pro Wellness
        </div>
      </div>
      
      {/* Sliding Background */}
      <div
        className={`
          absolute top-1 bottom-1 rounded-full shadow-md transition-all duration-300 ease-in-out
          ${isPro ? 'left-[calc(50%+2px)] right-1 bg-gradient-to-r from-amber-400 to-amber-500' : 'left-1 right-[calc(50%+2px)] bg-teal-600'}
        `}
      />
    </button>
  );
};
