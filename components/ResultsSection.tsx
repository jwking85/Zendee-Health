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
    <div ref={resultsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-20 items-stretch animate-slide-up">
      <MedicalCard data={data.standard} />
      <HolisticCard data={data.holistic} isPro={isPro} onUnlockAttempt={onUnlockAttempt} />
    </div>
  );
};
