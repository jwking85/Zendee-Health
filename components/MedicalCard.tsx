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
    <article className="rounded-2xl border border-slate-200 bg-slate-50 shadow-sm p-6 md:p-8">
      <header className="flex items-start gap-3 mb-6">
        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100">
          <Activity className="h-5 w-5 text-slate-700" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Standard Medical View
          </h2>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Conventional Approach
          </p>
        </div>
      </header>

      {/* Diagnosis */}
      {standardDiagnosis && (
        <section className="mb-6">
          <h3 className="text-xs font-semibold tracking-wide text-slate-500 uppercase mb-2">
            Typical Diagnosis
          </h3>
          <p className="text-sm leading-relaxed text-slate-800">
            {standardDiagnosis}
          </p>
        </section>
      )}

      {/* Explanation */}
      {standardExplanation && (
        <section className="mb-6">
          <h3 className="text-xs font-semibold tracking-wide text-slate-500 uppercase mb-2">
            Explanation
          </h3>
          <p className="text-sm leading-relaxed text-slate-800">
            {standardExplanation}
          </p>
        </section>
      )}

      {/* Standard Treatments */}
      {standardTreatments && standardTreatments.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold tracking-wide text-slate-500 uppercase mb-2">
            Standard Treatments
          </h3>
          <ul className="space-y-2">
            {standardTreatments.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};
