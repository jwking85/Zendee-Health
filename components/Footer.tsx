import React from 'react';
import { DISCLAIMER_TEXT } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto mb-6">
          {DISCLAIMER_TEXT}
        </p>
        <div className="flex items-center justify-center gap-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <span className="cursor-pointer hover:text-gray-600">Privacy Policy</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="cursor-pointer hover:text-gray-600">Terms of Use</span>
        </div>
        <div className="mt-8 text-xs text-gray-300">
          © 2025 Zendee Health
        </div>
      </div>
    </footer>
  );
};