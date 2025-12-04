import React from 'react';
import { Toggle } from './Toggle';
import RemedyClearLogo from '../assets/remedy-clear-logo-light.png';

interface HeaderProps {
  isPro: boolean;
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isPro, onToggle }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* LEFT: Only the Remedy Clear logo */}
        <div
          className="cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={RemedyClearLogo}
            alt="Remedy Clear"
            className="h-16 w-auto md:h-20 lg:h-24 object-contain drop-shadow-sm"
          />
        </div>

        {/* RIGHT: Standard / Pro toggle */}
        <div className="flex items-center">
          <Toggle isPro={isPro} onToggle={onToggle} />
        </div>
      </div>
    </header>
  );
};