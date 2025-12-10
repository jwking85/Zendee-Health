import React, { useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { GUIDES } from '../../data/guides';

const GuidesIndex: React.FC = () => {
  useEffect(() => {
    document.title = 'Health Guides | Remedy Clear';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Explore holistic and medical approaches to common health conditions. Compare natural remedies with standard treatments for joint pain, anxiety, digestive issues, and more.';

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  const guideCards = [
    {
      slug: 'joint-pain',
      icon: '🦴',
      preview: 'Natural anti-inflammatories, diet changes, and medical options for lasting relief',
      category: 'Pain & Inflammation'
    },
    {
      slug: 'acid-reflux',
      icon: '🔥',
      preview: 'Root-cause approaches to digestion, plus medical treatments when you need them',
      category: 'Digestive Health'
    },
    {
      slug: 'anxiety',
      icon: '🧠',
      preview: 'Nervous system support, magnesium, adaptogens, and medication options',
      category: 'Mental Health'
    },
    {
      slug: 'insomnia',
      icon: '😴',
      preview: 'Sleep hygiene, natural sleep aids, and medical treatments for better rest',
      category: 'Sleep & Energy'
    },
    {
      slug: 'constipation',
      icon: '🌿',
      preview: 'Fiber, hydration, gut health, and gentle relief options that actually work',
      category: 'Digestive Health'
    },
    {
      slug: 'bloating',
      icon: '💨',
      preview: 'Digestive enzymes, food triggers, and solutions for uncomfortable bloating',
      category: 'Digestive Health'
    },
    {
      slug: 'headaches',
      icon: '⚡',
      preview: 'Magnesium, trigger identification, and medical migraine treatments',
      category: 'Pain & Inflammation'
    },
    {
      slug: 'high-blood-pressure',
      icon: '❤️',
      preview: 'Diet, stress management, supplements, and medications for heart health',
      category: 'Heart & Metabolic'
    },
    {
      slug: 'fatty-liver',
      icon: '🫀',
      preview: 'Reverse fatty liver naturally with diet and lifestyle, plus medical monitoring',
      category: 'Heart & Metabolic'
    },
    {
      slug: 'hormone-imbalance',
      icon: '⚖️',
      preview: 'Balance hormones naturally with diet and stress management, or use HRT',
      category: 'Hormones & Endocrine'
    }
  ];

  return (
    <main className="flex-grow w-full bg-gradient-to-b from-slate-50 via-white to-slate-50/30">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
            <Leaf className="h-4 w-4" />
            Holistic + Medical
          </div>

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Explore Remedy Clear Guides
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Holistic-first, medically informed insights for common symptoms and conditions.
            Compare natural approaches with standard treatments to make informed decisions about your health.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">

          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">Browse by Condition</h2>
            <p className="text-sm text-slate-600">
              Each guide includes medical perspectives, holistic approaches, and natural relief options
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guideCards.map((card) => {
              const guide = GUIDES[card.slug];
              if (!guide) return null;

              return (
                <a
                  key={card.slug}
                  href={`/guides/${card.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal-200 hover:bg-gradient-to-br hover:from-teal-50/50 hover:to-emerald-50/30 hover:shadow-lg"
                >
                  {/* Category Badge */}
                  <div className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 transition-colors group-hover:bg-teal-100 group-hover:text-teal-700">
                    {card.category}
                  </div>

                  {/* Icon + Title */}
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-emerald-100 text-2xl shadow-sm transition-transform group-hover:scale-110">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-bold text-slate-900 group-hover:text-teal-900">
                        {guide.title.split(':')[0]}
                      </h3>
                    </div>
                  </div>

                  {/* Preview Description */}
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    {card.preview}
                  </p>

                  {/* Trust Badge */}
                  <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
                    <Leaf className="h-3.5 w-3.5 text-teal-600" />
                    <span className="font-medium">Natural relief options included</span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-teal-700 transition-colors group-hover:text-teal-800">
                      View Guide →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA - Comparison Tool */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-500 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Want Personalized Recommendations?
          </h2>
          <p className="mb-6 text-base leading-relaxed text-emerald-50 sm:text-lg">
            Use our comparison tool to see medical and holistic options side by side, tailored to your specific symptoms and health profile.
          </p>
          <a
            href="/#remedyclear-tool"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-teal-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Try the Comparison Tool
          </a>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-slate mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Why Choose Remedy Clear's Health Guides?
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Holistic-First Approach
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  We start by exploring root causes and natural remedies. Many health issues respond well to diet, lifestyle changes, and targeted supplements before medication is needed.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Medically Respectful
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  We're not anti-doctor. When natural approaches aren't enough, we clearly explain medical treatments and when they're appropriate. Your health is what matters most.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Evidence-Based Information
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Every guide is researched using peer-reviewed studies, clinical experience, and real-world results. We cite what works, not what's trendy.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Actionable Relief Options
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Each guide includes specific, practical steps you can take today. From supplements to lifestyle changes to knowing when to see a doctor.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                Remedy Clear is an educational tool that uses public research. We aren't connected to specific doctors or institutions.
                This isn't medical advice. Always talk with a qualified healthcare provider before making health decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default GuidesIndex;
