import React from 'react';
import { Link } from 'react-router-dom';
import { DISCLAIMER_TEXT } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto mb-6">
          {DISCLAIMER_TEXT}
        </p>
        <div className="flex items-center justify-center gap-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <Link
            to="/about"
            className="hover:text-teal-600 transition-colors"
          >
            About
          </Link>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <Link
            to="/contact"
            className="hover:text-teal-600 transition-colors"
          >
            Contact
          </Link>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <Link
            to="/privacy-policy"
            className="hover:text-teal-600 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <Link
            to="/terms-of-use"
            className="hover:text-teal-600 transition-colors"
          >
            Terms of Use
          </Link>
        </div>
        <div className="mt-8 space-y-2 text-xs text-gray-400">
          <p>
            Remedy Clear participates in the Amazon Services LLC Associates Program.
            As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
          </p>
          <p className="text-gray-300">
            © {new Date().getFullYear()} Remedy Clear
          </p>
        </div>
      </div>
    </footer>
  );
};