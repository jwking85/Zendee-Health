// src/pages/symptoms/SymptomPage.tsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlertTriangle, Leaf, Stethoscope } from 'lucide-react';
import { SYMPTOMS } from '../../data/symptoms';
import { AmazonLink } from '../../components/AmazonLink';

const SymptomPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const symptom = slug ? SYMPTOMS[slug] : undefined;

  useEffect(() => {
    if (!symptom) return;
    document.title = `${symptom.title} | Remedy Clear`;
  }, [symptom]);

  if (!symptom) {
    return (
      <main className="flex-grow w-full bg-gradient-to-b from-slate-50 via-white to-slate-50/30">
        <section className="py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h1 className="text-3xl font-semibold text-slate-900 mb-3">
              Symptom not found
            </h1>
            <p className="text-slate-600 mb-6">
              We couldn&apos;t find details for that symptom yet. Try using the search bar on the homepage to explore guides and comparisons.
            </p>
            <Link
              to="/"
              className="inline-flex items-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              Back to Remedy Clear
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-grow w-full bg-gradient-to-b from-slate-50 via-white to-slate-50/30">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-teal-700 mb-3">
            Symptom Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
            {symptom.title}
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            {symptom.heroTagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-14 space-y-10 md:space-y-12">
          {/* Overview */}
          <div className="rounded-2xl bg-emerald-50/60 border border-emerald-100 p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
              What this symptom can mean
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              {symptom.overview}
            </p>
            <p className="text-sm md:text-base text-slate-700">
              {symptom.whatItMightMean}
            </p>
          </div>

          {/* Common causes + red flags */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Common patterns doctors look for
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {symptom.commonCauses.map((cause) => (
                  <li key={cause} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-amber-900">
                  {symptom.redFlagHeading}
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-amber-900">
                {symptom.redFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-amber-900/90">
                If you notice any of these, seek urgent in-person care or call emergency services. Online tools can&apos;t rule out emergencies.
              </p>
            </div>
          </div>

          {/* Natural options */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="h-5 w-5 text-emerald-700" />
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Natural relief options
              </h2>
            </div>
            <p className="text-sm md:text-base text-slate-700 mb-4">
              {symptom.naturalIntro}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {symptom.naturalOptions.map((opt) => (
                <div
                  key={opt.name}
                  className="rounded-xl bg-white border border-emerald-100 p-4 shadow-sm"
                >
                  <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                    {opt.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-700">
                    {opt.description}
                  </p>
                  {opt.amazonFriendly && opt.amazonQuery && (
                    <AmazonLink
                      query={opt.amazonQuery}
                      guideSlug={`symptom-${symptom.slug}`}
                      productName={opt.name}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Medical options */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <Stethoscope className="h-5 w-5 text-slate-700" />
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                How doctors may evaluate this
              </h2>
            </div>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              {symptom.medicalIntro}
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {symptom.medicalOptions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related guides */}
          {symptom.relatedGuides.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                Related Remedy Clear guides
              </h2>
              <p className="text-sm text-slate-700 mb-3">
                Want a deeper breakdown of natural vs. medical options? These guides walk through specific conditions in more detail:
              </p>
              <div className="flex flex-wrap gap-2">
                {symptom.relatedGuides.map((g) => (
                  <Link
                    key={g.slug}
                    to={`/guides/${g.slug}`}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 hover:bg-teal-100 hover:text-teal-800"
                  >
                    {g.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Comparison tool CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-5 md:p-6 text-center text-emerald-50">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              See holistic and medical options side by side
            </h2>
            <p className="text-sm md:text-base mb-4 max-w-2xl mx-auto">
              Use the Remedy Clear comparison tool to see natural and standard treatments compared clearly for your exact symptom.
            </p>
            <a
              href="/#remedyclear-tool"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-teal-700 shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              Open the Comparison Tool
            </a>
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] md:text-xs text-slate-600">
              Remedy Clear is an educational tool and does not replace in-person care. Symptoms can change quickly, and only a qualified healthcare
              professional who knows your history can diagnose or treat medical conditions. Always seek urgent care if you&apos;re worried something
              serious is happening.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SymptomPage;
