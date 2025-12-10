import React, { useState } from "react";
import RemedyClearLogo from "../assets/remedy-clear-logo-light.png";

interface HeaderProps {
  isPro: boolean;
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 py-3 sm:py-4">

        {/* LEFT: Logo */}
        <a href="/" className="absolute left-4 top-1/2 -translate-y-1/2">
          <img
            src={RemedyClearLogo}
            alt="Remedy Clear"
            className="h-16 w-auto sm:h-20 drop-shadow-sm"
          />
        </a>

        {/* CENTER: Navigation */}
        <nav className="hidden gap-10 text-sm font-medium text-slate-800 sm:flex">
          <a
            href="/#remedyclear-tool"
            className="border-b-2 border-transparent pb-1 transition hover:border-teal-500 hover:text-teal-700"
          >
            Compare Remedies
          </a>
          <a
            href="/guides"
            className="border-b-2 border-transparent pb-1 transition hover:border-teal-500 hover:text-teal-700"
          >
            Guides
          </a>
        </nav>

        {/* RIGHT: Mobile Menu Button */}
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md border border-slate-200 p-1.5 text-slate-700 shadow-sm sm:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
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

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="border-t border-slate-200 bg-white sm:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-800">
            <a
              href="/#remedyclear-tool"
              className="rounded-md px-2 py-2 hover:bg-teal-50 hover:text-teal-700"
              onClick={() => setIsMobileOpen(false)}
            >
              Compare Remedies
            </a>
            <a
              href="/guides"
              className="rounded-md px-2 py-2 hover:bg-teal-50 hover:text-teal-700"
              onClick={() => setIsMobileOpen(false)}
            >
              Guides
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
