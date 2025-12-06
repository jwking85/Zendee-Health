import React from 'react';
import { HealthResponse } from '../types';
import { MedicalCard } from './MedicalCard';
import { HolisticCard } from './HolisticCard';
import { EvidenceSection } from './EvidenceSection';

interface ResultsSectionProps {
  data: HealthResponse;
  isPro: boolean;
  resultsRef: React.RefObject<HTMLDivElement>;
  symptom: string;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ data, isPro, resultsRef, symptom }) => {
  return (
    <div ref={resultsRef} className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <h2 className="mb-2 text-center text-2xl font-bold text-slate-800 md:text-3xl">
        Your Comparison Results
      </h2>
      <p className="mt-2 text-xs text-slate-500 text-center max-w-2xl mx-auto mb-6 md:mb-8">
        This tool compares typical medical thinking with a natural wellness perspective.
        It is for educational purposes only and is not medical advice, diagnosis, or treatment.
        Always talk with a qualified clinician about your specific situation.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2 items-start">
        <MedicalCard data={data.standard} />
        <HolisticCard data={data.holistic} isPro={isPro} />
      </div>
      <EvidenceSection symptom={symptom} />
    </div>
  );
};
