import React from "react";
import { Activity } from "lucide-react";
import type { RecommendationResponse } from "../types";

interface MedicalCardProps {
  data: RecommendationResponse;
}

export const MedicalCard: React.FC<MedicalCardProps> = ({ data }) => {
  const {
    standardDiagnosis = "",
    standardExplanation = "",
    standardTreatments = [],
  } = data || {};

  return (
    <article className="rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-[0_10px_35px_rgba(59,130,246,0.15)] animate-[fadeInUp_0.4s_ease-out] overflow-hidden relative">
      {/* Left colored accent bar */}
      <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600" />

      <header className="flex items-start gap-3 px-6 pt-6 pb-4">
        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100">
          <Activity className="h-5 w-5 text-blue-700" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-label="Medical">🏥</span>
            <h2 className="text-lg font-semibold text-blue-900 border-l-4 border-blue-400 pl-3">
              Standard Medical View
            </h2>
          </div>
          <p className="text-xs text-blue-900/80 max-w-md leading-relaxed mt-1">
            Evidence-based treatments your doctor would typically recommend
          </p>
        </div>
      </header>

      <div className="border-t border-blue-100" />

      <div className="px-6 pb-6 pt-4 space-y-6">

      {/* TL;DR Box */}
      {standardDiagnosis && (
        <div className="bg-blue-100/50 border-l-4 border-blue-500 rounded-r-lg p-4 mb-6">
          <p className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">TL;DR - What doctors call this</p>
          <p className="text-sm font-semibold text-blue-900 leading-relaxed">
            {standardDiagnosis}
          </p>
        </div>
      )}

      {/* Diagnosis */}
      {standardDiagnosis && (
        <section className="mb-6">
          <h3 className="text-xs font-semibold tracking-wide text-blue-700 uppercase mb-2">
            Medical Diagnosis
          </h3>
          <p className="text-sm leading-relaxed text-blue-900">
            {standardDiagnosis}
          </p>
        </section>
      )}

      {/* Explanation */}
      {standardExplanation && (
        <section className="mb-6">
          <h3 className="text-xs font-semibold tracking-wide text-blue-700 uppercase mb-2">
            How standard medicine explains it
          </h3>
          <p className="text-sm leading-relaxed text-blue-900">
            {standardExplanation}
          </p>
        </section>
      )}

      {/* Standard Treatments */}
      {standardTreatments && standardTreatments.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold tracking-wide text-blue-700 uppercase mb-2">
            Typical Treatment Approaches
          </h3>
          <ul className="space-y-2">
            {standardTreatments.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-blue-900">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      </div>
    </article>
  );
};
