import React from 'react';
import { ExternalLink, Leaf, Pill, Heart, BookOpen } from 'lucide-react';

interface Product {
  name: string;
  category: 'holistic' | 'conventional' | 'device' | 'education';
  badge: string;
  description: string;
  link: string;
}

const products: Product[] = [
  {
    name: 'Curcumin Complex with BioPerine',
    category: 'holistic',
    badge: 'Holistic support',
    description: 'High-absorption turmeric for joint inflammation and mobility support.',
    link: 'https://amzn.to/4rAqv09'
  },
  {
    name: 'Magnesium Glycinate 400mg',
    category: 'holistic',
    badge: 'Daily foundation',
    description: 'Gentle magnesium to support muscle relaxation and reduce tension.',
    link: 'https://amzn.to/3Tg6mTo'
  },
  {
    name: 'Omega-3 Fish Oil (Triple Strength)',
    category: 'holistic',
    badge: 'Anti-inflammatory',
    description: 'Premium EPA/DHA for joint health and systemic inflammation.',
    link: 'https://amzn.to/40ZEXzE'
  },
  {
    name: 'Glucosamine & Chondroitin Complex',
    category: 'conventional',
    badge: 'Conventional relief',
    description: 'Clinically studied joint support for cartilage health.',
    link: 'https://amzn.to/3TgoUfN'
  },
  {
    name: 'Compression Knee Sleeves (Pair)',
    category: 'device',
    badge: 'Physical support',
    description: 'Provides stability and warmth for joint pain during movement.',
    link: 'https://amzn.to/3Z2re3D'
  }
];

const categoryConfig = {
  holistic: { icon: Leaf, color: 'emerald', label: 'Holistic Support' },
  conventional: { icon: Pill, color: 'slate', label: 'Conventional Relief' },
  device: { icon: Heart, color: 'teal', label: 'Devices & Tools' },
  education: { icon: BookOpen, color: 'amber', label: 'Education' }
};

export const JointPainProducts: React.FC = () => {
  const groupedProducts = {
    holistic: products.filter(p => p.category === 'holistic'),
    conventional: products.filter(p => p.category === 'conventional'),
    device: products.filter(p => p.category === 'device'),
    education: products.filter(p => p.category === 'education')
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
          Recommended Products
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Curated tools and supplements to support your joint health journey
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedProducts).map(([categoryKey, categoryProducts]) => {
          if (categoryProducts.length === 0) return null;

          const category = categoryKey as keyof typeof categoryConfig;
          const config = categoryConfig[category];
          const Icon = config.icon;

          return (
            <div key={category}>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-700">
                <Icon className="h-4 w-4" />
                {config.label}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((product, idx) => (
                  <a
                    key={idx}
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative flex flex-col rounded-2xl border-2 bg-white p-5 shadow-md transition-all duration-200
                      hover:-translate-y-1 hover:shadow-xl
                      ${config.color === 'emerald' ? 'border-emerald-200 hover:border-emerald-300' : ''}
                      ${config.color === 'slate' ? 'border-slate-200 hover:border-slate-300' : ''}
                      ${config.color === 'teal' ? 'border-teal-200 hover:border-teal-300' : ''}
                      ${config.color === 'amber' ? 'border-amber-200 hover:border-amber-300' : ''}
                    `}
                  >
                    {/* Badge */}
                    <div className="mb-3">
                      <span className={`
                        inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide
                        ${config.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : ''}
                        ${config.color === 'slate' ? 'bg-slate-100 text-slate-700' : ''}
                        ${config.color === 'teal' ? 'bg-teal-100 text-teal-700' : ''}
                        ${config.color === 'amber' ? 'bg-amber-100 text-amber-700' : ''}
                      `}>
                        {product.badge}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h4 className="mb-2 text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {product.name}
                    </h4>

                    {/* Description */}
                    <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-600">
                      {product.description}
                    </p>

                    {/* View Link */}
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                      View on Amazon
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Amazon Associate Disclosure */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
        <p className="text-xs leading-relaxed text-slate-600">
          <strong>Affiliate Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases.
          This means if you click a link and make a purchase, we may receive a small commission at no extra cost to you.
          We only recommend products we believe may be helpful.
        </p>
      </div>
    </section>
  );
};
