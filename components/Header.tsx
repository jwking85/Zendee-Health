import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Toggle } from './Toggle';

interface HeaderProps {
  isPro: boolean;
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isPro, onToggle }) => {
  const [count, setCount] = useState(2847);

  useEffect(() => {
    // Randomize start count slightly
    setCount(Math.floor(Math.random() * (3500 - 2000 + 1) + 2000));
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex items-center gap-2.5">
            <div className="bg-teal-600 p-1.5 rounded-lg shadow-lg shadow-teal-600/20 group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-4 h-4 text-white fill-current" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-teal-700 transition-colors">
              Zendee<span className="text-teal-600">Health</span>
            </h1>
          </div>
          <span className="hidden sm:inline-block w-px h-4 bg-gray-200"></span>
          <span className="text-[10px] sm:text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
            {count.toLocaleString()} searches today
          </span>
        </div>
        <Toggle isPro={isPro} onToggle={onToggle} />
      </div>
    </header>
  );
};