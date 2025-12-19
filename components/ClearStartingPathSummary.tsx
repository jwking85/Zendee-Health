import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ClearStartingPathSummaryProps {
  symptom: string;
  keyDifference?: string;
}

export const ClearStartingPathSummary: React.FC<ClearStartingPathSummaryProps> = ({
  symptom,
  keyDifference,
}) => {
  const scrollToSection = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-3xl mb-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
        Clear Starting Path
      </h2>

      {/* Disclaimer */}
      <p className="text-sm text-slate-600 mb-8 pb-6 border-b border-slate-100">
        This is educational and not medical advice. If symptoms are severe or worsening, consider medical care.
      </p>

      {/* What this page helps you do */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          What this page helps you do
        </h3>
        <p className="text-base text-slate-700 leading-relaxed">
          This comparison shows you what standard medicine looks at and what holistic practitioners consider for {symptom}. You can review both perspectives side by side and decide on a reasonable next step.
        </p>
      </div>

      {/* A reasonable next step */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          A reasonable next step
        </h3>
        <div className="space-y-3 text-base text-slate-700 leading-relaxed">
          <p>
            Start by watching for red flags listed below. If you notice any, seek medical care promptly.
          </p>
          <p>
            If symptoms are mild and stable, you might try low-risk adjustments first, such as lifestyle changes or natural approaches discussed in the holistic view.
          </p>
          <p>
            Consider professional care if symptoms persist, worsen, or interfere with daily life.
          </p>
        </div>
      </div>

      {/* When to get medical help sooner */}
      <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h3 className="text-lg font-semibold text-amber-900">
            When to get medical help sooner
          </h3>
        </div>
        <p className="text-sm text-amber-900 mb-3">
          Seek medical care if you experience:
        </p>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
            <span>Severe or rapidly worsening pain</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
            <span>Trouble breathing or chest pain</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
            <span>Fainting or loss of consciousness</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
            <span>Blood in vomit or stool</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
            <span>Unexplained weight loss or high fever</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
            <span>Symptoms that significantly interfere with daily activities</span>
          </li>
        </ul>
      </div>

      {/* Quick navigation */}
      <div>
        <p className="text-sm font-semibold text-slate-700 mb-3">
          Jump to a section:
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => scrollToSection('medical-view')}
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            Medical view
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('holistic-view')}
            className="inline-flex items-center rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
          >
            Holistic view
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('shopping-list')}
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            Shopping list
          </button>
        </div>
      </div>
    </div>
  );
};
