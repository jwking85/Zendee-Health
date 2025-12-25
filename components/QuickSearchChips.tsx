import React from 'react';
import { X } from 'lucide-react';

interface QuickSearchChipsProps {
  suggestions: string[];
  history: string[];
  onSelect: (query: string) => void;
  onClearHistory: () => void;
}

export const QuickSearchChips: React.FC<QuickSearchChipsProps> = ({ suggestions, history, onSelect, onClearHistory }) => {
  const hasHistory = history.length > 0;
  
  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      {hasHistory && (
        <div className="flex flex-wrap justify-center gap-2 animate-fade-in mb-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-1.5">Recent:</span>
          {history.map((q) => (
            <button
              key={q}
              onClick={() => onSelect(q)}
              className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors shadow-sm"
            >
              {q}
            </button>
          ))}
          <button onClick={onClearHistory} className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-red-500 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      
      <div className="flex flex-wrap justify-center gap-2">
        {!hasHistory && <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-1.5">Try:</span>}
        {suggestions.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};