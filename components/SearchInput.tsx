import React from 'react';
import { Search, Loader2, ArrowRight } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <form onSubmit={onSubmit} className="relative max-w-2xl mx-auto group">
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
        <Search className="h-6 w-6 text-gray-400 group-focus-within:text-teal-600 transition-colors duration-300" />
      </div>
      <input
        type="text"
        className="w-full pl-14 pr-16 py-5 bg-white border border-gray-200 rounded-2xl text-lg outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 shadow-xl shadow-gray-200/50 transition-all placeholder:text-gray-400 text-gray-800"
        placeholder="How are you feeling? (e.g. constant heartburn)"
        value={value}
        onChange={onChange}
        disabled={isLoading}
      />
      <div className="absolute inset-y-2 right-2 flex items-center">
        <button 
          type="submit"
          disabled={isLoading || !value.trim()}
          className="h-full aspect-square flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-all disabled:opacity-50 disabled:hover:bg-teal-600 shadow-md hover:shadow-lg active:scale-95"
        >
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
        </button>
      </div>
    </form>
  );
};