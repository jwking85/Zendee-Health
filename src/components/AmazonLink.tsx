import React from 'react';
import { trackAmazonClick } from '../utils/analytics';

interface AmazonLinkProps {
  query: string;
  guideSlug: string;
  productName: string;
}

export const AmazonLink: React.FC<AmazonLinkProps> = ({
  query,
  guideSlug,
  productName,
}) => {
  const handleClick = () => {
    trackAmazonClick({
      guideSlug,
      productName,
      amazonQuery: query,
    });
  };

  return (
    <a
      href={`https://www.amazon.com/s?k=${encodeURIComponent(
        query
      )}&tag=remedyclear-20`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-block mt-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
    >
      View on Amazon →
    </a>
  );
};
