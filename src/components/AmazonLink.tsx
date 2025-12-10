import React from 'react';

interface AmazonLinkProps {
  query: string;
  tag?: string;
}

export const AmazonLink: React.FC<AmazonLinkProps> = ({ query, tag = 'remedyclear-20' }) => (
  <a
    href={`https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${tag}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
  >
    View on Amazon →
  </a>
);
