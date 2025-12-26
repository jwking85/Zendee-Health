import React from 'react';

/**
 * Skeleton loader for Medical and Holistic cards
 * Shows while AI generates the health advice
 */
export const CardSkeleton: React.FC<{ variant?: 'medical' | 'holistic' }> = ({ variant = 'medical' }) => {
  const borderColor = variant === 'medical' ? 'border-slate-300' : 'border-emerald-300';
  const bgGradient = variant === 'medical'
    ? 'bg-gradient-to-br from-slate-50 to-white'
    : 'bg-gradient-to-br from-emerald-50 to-white';
  const accentColor = variant === 'medical'
    ? 'bg-gradient-to-r from-slate-400 via-gray-400 to-slate-500'
    : 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500';

  return (
    <article className={`relative rounded-3xl border-2 ${borderColor} ${bgGradient} shadow-lg overflow-hidden animate-pulse`}>
      {/* Top accent */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${accentColor}`} />

      <header className="flex items-start justify-between gap-3 px-6 pt-6 pb-4">
        <div className="flex gap-3">
          <div className="mt-1 h-10 w-10 rounded-2xl bg-gray-200" />
          <div className="flex-1">
            <div className="h-5 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-3 w-64 bg-gray-200 rounded" />
          </div>
        </div>
      </header>

      <div className="border-t border-gray-100" />

      <div className="px-6 pb-6 pt-4 space-y-6">
        {/* Section 1 */}
        <section>
          <div className="h-3 w-32 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </section>

        {/* Section 2 */}
        <section>
          <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-4/5 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
        </section>

        {/* Bullet points */}
        <section>
          <div className="h-3 w-28 bg-gray-200 rounded mb-2" />
          <ul className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-200" />
                <div className="h-4 flex-1 bg-gray-200 rounded" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};
