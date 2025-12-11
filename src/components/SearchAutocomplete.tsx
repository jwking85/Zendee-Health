// src/components/SearchAutocomplete.tsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { SEARCH_SUGGESTIONS } from '../data/searchSuggestions';
import type { SearchSuggestion } from '../data/searchSuggestions';

interface SearchAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}

export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'e.g., chronic headaches, acid reflux, joint pain',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filtered: SearchSuggestion[] = useMemo(() => {
    const query = value.trim().toLowerCase();

    if (query.length < 2) return [];

    return SEARCH_SUGGESTIONS
      .filter((s) => s.label.toLowerCase().includes(query))
      .slice(0, 8);
  }, [value]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (suggestion: SearchSuggestion) => {
    onChange(suggestion.label);
    setIsOpen(false);
    setActiveIndex(-1);
    // you can auto-submit if you want:
    // onSubmit();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = prev + 1;
        return next >= filtered.length ? 0 : next;
      });
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = prev - 1;
        return next < 0 ? filtered.length - 1 : next;
      });
    }

    if (e.key === 'Enter') {
      if (isOpen && activeIndex >= 0 && activeIndex < filtered.length) {
        e.preventDefault();
        handleSelect(filtered[activeIndex]);
      } else {
        onSubmit();
      }
    }

    if (e.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  const showDropdown = isOpen && filtered.length > 0;

  const highlightMatch = (label: string) => {
    const query = value.trim();
    if (query.length < 2) return label;

    const lower = label.toLowerCase();
    const index = lower.indexOf(query.toLowerCase());
    if (index === -1) return label;

    const before = label.slice(0, index);
    const match = label.slice(index, index + query.length);
    const after = label.slice(index + query.length);

    return (
      <>
        {before}
        <span className="font-semibold text-emerald-700">{match}</span>
        {after}
      </>
    );
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(true);
          setActiveIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (filtered.length > 0) setIsOpen(true);
        }}
        className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none ring-0 transition focus:border-emerald-400 focus:shadow-md"
        placeholder={placeholder}
        autoComplete="off"
      />

      {showDropdown && (
        <div className="absolute left-0 right-0 z-20 mt-1 max-h-64 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg">
          {filtered.map((s, idx) => (
            <button
              key={s.label}
              type="button"
              onClick={() => handleSelect(s)}
              className={[
                'flex w-full items-start gap-2 px-4 py-2 text-left text-sm transition',
                idx === activeIndex
                  ? 'bg-emerald-50 text-slate-900'
                  : 'bg-white text-slate-800 hover:bg-slate-50',
              ].join(' ')}
            >
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>{highlightMatch(s.label)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
