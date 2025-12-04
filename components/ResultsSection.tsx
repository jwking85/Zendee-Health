import React from 'react';
import { HealthResponse } from '../types';
import { MedicalCard } from './MedicalCard';
import { HolisticCard } from './HolisticCard';

interface ResultsSectionProps {
  data: HealthResponse;
  isPro: boolean;
  onUnlockAttempt: () => void;
  resultsRef: React.RefObject<HTMLDivElement>;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ data, isPro, onUnlockAttempt, resultsRef }) => {
  return (
    <div ref={resultsRef} className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <h2 className="mb-6 text-center text-2xl font-bold text-slate-800 md:mb-8 md:text-3xl">
        Your Comparison Results
      </h2>
      <div className="grid grid-cols-1 gap-6 animate-slide-up lg:grid-cols-2 lg:gap-8 items-start">
        <MedicalCard data={data.standard} />
        <HolisticCard data={data.holistic} isPro={isPro} onUnlockAttempt={onUnlockAttempt} />
      </div>
    </div>
  );
};
