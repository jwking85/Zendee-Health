import React from 'react';
import { Sparkles } from 'lucide-react';

interface ToggleSwitchProps {
  isPro: boolean;
  onToggle: () => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isPro, onToggle }) => {
  return (
    <div 
      className={`flex items-center bg-white rounded-full p-1 shadow-md border cursor-pointer transition-all duration-300 ${isPro ? 'border-amber-400 ring-2 ring-amber-100' : 'border-gray-200'}`}
      onClick={onToggle}
    >
      <div className={`
        px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
        ${!isPro ? 'bg-teal-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}
      `}>
        Standard
      </div>
      <div className={`
        flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
        ${isPro ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}
      `}>
        <Sparkles className={`w-4 h-4 mr-1 ${isPro ? 'animate-pulse' : ''}`} />
        Pro Wellness
      </div>
    </div>
  );
};
