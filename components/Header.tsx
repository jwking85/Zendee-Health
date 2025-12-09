import React, { useState } from "react";
import { Toggle } from "./Toggle";
import RemedyClearLogo from "../assets/remedy-clear-logo-light.png";

interface HeaderProps {
  isPro: boolean;
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isPro, onToggle }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = () => {
    // close mobile menu after clicking a link
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo + brand */}
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={handleNavClick}
        >
          <img
            src={RemedyClearLogo}
            alt="Remedy Clear"
            className="h-9 w-auto sm:h-10"
          />
          <span className="hidden text-sm font-semibold tracking-tight text-slate-900 sm:inline">
            Remedy Clear
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 sm:flex">
          <a
            href="/#remedyclear-tool"
            className="border-b-2 border-transparent pb-1 transition hover:border-teal-500 hover:text-teal-700"
          >
            Compare Remedies
          </a>
          <a
            href="/joint-pain"
            className="border-b-2 border-transparent pb-1 transition hover:border-teal-500 hover:text-teal-700"
          >
            Guides
          </a>
        </nav>

        {/* Pro toggle + mobile menu button */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Free
            </span>
            <Toggle checked={isPro} onChange={onToggle} />
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Pro
            </span>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 p-1.5 text-slate-700 shadow-sm sm:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {isMobileOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isMobileOpen && (
        <div className="border-t border-slate-200 bg-white sm:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-800">
            <a
              href="/#remedyclear-tool"
              className="rounded-md px-2 py-2 hover:bg-teal-50 hover:text-teal-700"
              onClick={handleNavClick}
            >
              Compare Remedies
            </a>
            <a
              href="/joint-pain"
              className="rounded-md px-2 py-2 hover:bg-teal-50 hover:text-teal-700"
              onClick={handleNavClick}
            >
              Guides
            </a>

            {/* Mobile Pro toggle */}
            <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Free
              </span>
              <Toggle checked={isPro} onChange={onToggle} />
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Pro
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
