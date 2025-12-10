import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { AmazonLink } from './AmazonLink';

export interface GuideSection {
  title: string;
  content: string;
  items?: string[];
}

export interface GuideData {
  slug: string;
  title: string;
  metaDescription: string;
  heroIntro: string;
  medicalPerspective: GuideSection;
  holisticPerspective: GuideSection;
  naturalReliefOptions: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      amazonFriendly?: boolean;
      amazonQuery?: string;
    }>;
  };
  medicalOptions: GuideSection;
  ctaText?: string;
}

interface GuidePageTemplateProps {
  data: GuideData;
}

export const GuidePageTemplate: React.FC<GuidePageTemplateProps> = ({ data }) => {
  useEffect(() => {
    document.title = `${data.title} | Remedy Clear`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = data.metaDescription;
      document.head.appendChild(meta);
    }
  }, [data.title, data.metaDescription]);

  return (
    <main className="flex-grow w-full bg-gradient-to-b from-slate-50 via-white to-slate-50/30">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">

        {/* Hero Section */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-teal-50 via-white to-emerald-50 px-6 py-6 sm:px-8 sm:py-8">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              {data.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              {data.heroIntro}
            </p>
          </div>
        </div>

        {/* Medical vs Holistic Comparison */}
        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">

            {/* Medical Perspective */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Medical perspective
              </h3>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                {data.medicalPerspective.title}
              </h2>
              <p className="mb-4 leading-relaxed text-slate-600">
                {data.medicalPerspective.content}
              </p>
              {data.medicalPerspective.items && data.medicalPerspective.items.length > 0 && (
                <ul className="space-y-2 text-sm text-slate-600">
                  {data.medicalPerspective.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Holistic Perspective */}
            <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-5 sm:p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-700">
                Holistic perspective
              </h3>
              <h2 className="mb-3 text-xl font-bold text-teal-900 sm:text-2xl">
                {data.holisticPerspective.title}
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700">
                {data.holisticPerspective.content}
              </p>
              {data.holisticPerspective.items && data.holisticPerspective.items.length > 0 && (
                <ul className="space-y-2 text-sm text-slate-700">
                  {data.holisticPerspective.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Natural Relief Options */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm sm:p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {data.naturalReliefOptions.title}
          </h2>
          <p className="mb-6 text-sm text-slate-600">
            Natural approaches you can explore (always talk with your healthcare provider first):
          </p>

          <div className="space-y-5">
            {data.naturalReliefOptions.items.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur-sm"
              >
                <h3 className="mb-2 font-bold text-slate-900">
                  {item.name}
                  {item.amazonFriendly && (
                    <span className="ml-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                      Widely Available
                    </span>
                  )}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                {item.amazonQuery && (
                  <AmazonLink query={item.amazonQuery} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Medical Options */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {data.medicalOptions.title}
          </h2>
          <p className="mb-4 leading-relaxed text-slate-600">
            {data.medicalOptions.content}
          </p>
          {data.medicalOptions.items && data.medicalOptions.items.length > 0 && (
            <ul className="space-y-3 text-slate-600">
              {data.medicalOptions.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-slate-400" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA - Compare Approaches */}
        <div className="mt-10 rounded-2xl border-2 border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 p-6 text-center sm:p-8">
          <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
            {data.ctaText || "Want to compare these approaches for your specific situation?"}
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            Use our comparison tool to see medical and holistic options side by side, tailored to your health profile.
          </p>
          <a
            href="/#remedyclear-tool"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/30 transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl hover:shadow-emerald-500/40"
          >
            Try the Comparison Tool
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            Remedy Clear is an educational tool that uses public research. We aren't connected to specific doctors or institutions.
            This isn't medical advice. Always talk with a qualified healthcare provider before making health decisions.
          </p>
        </div>
      </div>
    </main>
  );
};
