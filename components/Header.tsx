import React from 'react';
import { Toggle } from './Toggle';
import RemedyClearLogo from '../assets/remedy-clear-logo-light.png';

interface HeaderProps {
  isPro: boolean;
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isPro, onToggle }) => {
  return (
    <header className="w-full border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="cursor-pointer transition-all duration-200 hover:scale-105" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={RemedyClearLogo}
              alt="Remedy Clear"
              className="h-8 w-auto object-contain sm:h-10"
            />
            <span className="text-lg font-semibold tracking-tight sm:text-xl">
              REMEDY <span className="text-brand-teal">CLEAR</span>
            </span>
          </div>
        </div>
        <Toggle isPro={isPro} onToggle={onToggle} />
      </div>
    </header>
  );
};