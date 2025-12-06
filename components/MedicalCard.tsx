import React from "react";
import { Activity, AlertTriangle, HelpCircle } from "lucide-react";
import type { HealthResponse } from "../types";

type StandardData = HealthResponse["standard"];

interface MedicalCardProps {
  data: StandardData;
}

export const MedicalCard: React.FC<MedicalCardProps> = ({ data }) => {
  const {
    diagnosis = "",
    rationale = "",
    redFlags = [],
    whatToAskDoctor = [],
  } = data || {};

  return (
    <article className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 mb-6">
      <header className="flex items-start gap-3 mb-4">
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
      {diagnosis && (
        <section className="mb-4">
          <h3 className="text-xs font-semibold tracking-wide text-slate-700 uppercase mb-1.5">
            Typical Diagnosis
          </h3>
          <p className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-800">
            {diagnosis}
          </p>
        </section>
      )}

      {/* Rationale / explanation */}
      {rationale && (
        <section className="mb-4">
          <h3 className="text-xs font-semibold tracking-wide text-slate-700 uppercase mb-1.5">
            Explanation
          </h3>
          <p className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-800">
            {rationale}
          </p>
        </section>
      )}

      {/* Red flags */}
      {redFlags && redFlags.length > 0 && (
        <section className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <h3 className="text-xs font-semibold tracking-wide text-red-700 uppercase">
              Warning Signs
            </h3>
          </div>
          <ul className="rounded-2xl border border-red-100 bg-red-50/80 px-4 py-3 space-y-1.5 text-xs text-red-900">
            {redFlags.map((flag, idx) => (
              <li key={idx} className="flex gap-1.5">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-red-400" />
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Questions for doctor */}
      {whatToAskDoctor && whatToAskDoctor.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-1.5">
            <HelpCircle className="h-4 w-4 text-slate-600" />
            <h3 className="text-xs font-semibold tracking-wide text-slate-700 uppercase">
              Questions for Your Doctor
            </h3>
          </div>
          <ul className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 space-y-1.5 text-xs text-slate-800">
            {whatToAskDoctor.map((q, idx) => (
              <li key={idx} className="flex gap-1.5">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[11px] text-slate-500">
            *Always consult with a healthcare professional about your specific
            situation.
          </p>
        </section>
      )}
    </article>
  );
};
