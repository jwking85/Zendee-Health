import React from 'react';
import { Activity } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Activity className="h-10 w-10 text-clarity-teal" />
      <span className="text-xl font-semibold tracking-tight">
        <span className="text-clarity-slate">REMEDY</span>{' '}
        <span className="text-teal-600">CLEAR</span>
      </span>
    </div>
  );
};
