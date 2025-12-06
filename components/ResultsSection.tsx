import React from "react";
import type { HealthResponse } from "../types";
import { MedicalCard } from "./MedicalCard";
import { HolisticCard } from "./HolisticCard";
import { EvidenceSection } from "./EvidenceSection";

interface ResultsSectionProps {
  data: HealthResponse;
  isPro: boolean;
  resultsRef: React.RefObject<HTMLDivElement>;
  symptom: string;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ data, isPro, resultsRef, symptom }) => {
  return (
    <section
      ref={resultsRef}
      className="mx-auto mt-12 max-w-5xl px-4 pb-16 scroll-mt-24"
    >
      <h2 className="text-center text-2xl font-semibold text-slate-900">
        Your Comparison Results
      </h2>
      <p className="mt-2 text-xs text-slate-500 text-center max-w-2xl mx-auto mb-6 md:mb-8">
        This tool compares typical medical thinking with a natural wellness
        perspective. It is for educational purposes only and is not medical
        advice, diagnosis, or treatment. Always talk with a qualified clinician
        about your specific situation.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] items-start">
        {/* Standard medical view */}
        <MedicalCard data={data.standard} />

        {/* Holistic view with sticky helper on desktop */}
        <div className="relative">
          <div className="hidden md:block sticky top-24 z-20 mb-2 pl-1">
            <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-medium text-emerald-800 shadow-sm">
              ↓ More natural wellness insights on this side
            </span>
          </div>
          <HolisticCard data={data.holistic} isPro={isPro} />
        </div>
      </div>

      {/* Evidence section (PubMed / NIH links) */}
      <div className="mt-8">
        <EvidenceSection symptom={symptom} />
      </div>
    </section>
  );
};
