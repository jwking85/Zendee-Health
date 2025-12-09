import React from "react";

const JointPainPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 lg:py-16">
        {/* HERO */}
        <section className="mb-10">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Symptom Guide
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm">
            <div className="border-b border-slate-100 bg-gradient-to-r from-teal-50 via-white to-emerald-50 px-6 py-6 sm:px-8 sm:py-8">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Joint Pain: Holistic &amp; Medical Approaches
              </h1>
              <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
                A natural-first, medically informed guide to understanding joint pain,
                what may be causing it, and how holistic and conventional options can
                work together.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="/#remedyclear-tool"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  Compare joint pain remedies
                  <span className="hidden text-xs font-normal opacity-80 sm:inline">
                    Holistic vs medical in seconds
                  </span>
                </a>
                <p className="text-xs text-slate-500 sm:text-sm">
                  Use the Remedy Clear search tool and type{" "}
                  <span className="font-semibold">"joint pain"</span> for a personalized
                  breakdown.
                </p>
              </div>
            </div>

            <div className="px-6 py-5 text-sm text-slate-600 sm:px-8 sm:py-6">
              <p>
                Joint pain is one of the most common discomforts people experience. It
                can show up as stiffness in the morning, soreness after physical
                activity, or an ongoing ache that makes everyday tasks harder. While
                conventional medicine often focuses on symptom relief and reducing
                inflammation, many people find that a more holistic, root-cause approach
                offers deeper and longer-lasting comfort.
              </p>
              <p className="mt-3">
                Remedy Clear doesn't choose sides. We show you{" "}
                <span className="font-semibold">both the medical and holistic view</span>{" "}
                while gently encouraging a natural-first mindset built on lifestyle,
                nutrition, and whole-body wellness.
              </p>
            </div>
          </div>
        </section>

        {/* GRID OF CONTENT CARDS */}
        <div className="space-y-6">
          {/* Causes */}
          <section id="causes" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Common Causes of Joint Pain
            </h2>

            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Medical perspective
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  From a standard medical point of view, joint pain is usually linked to
                  problems in or around the joint itself. Common causes include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  <li>Osteoarthritis (wear-and-tear of cartilage over time)</li>
                  <li>Inflammation of the joint lining (synovitis)</li>
                  <li>Tendon or ligament strain from overuse or injury</li>
                  <li>Repetitive stress from work, hobbies, or sports</li>
                  <li>
                    Autoimmune conditions such as rheumatoid arthritis (less common but
                    more serious)
                  </li>
                </ul>
                <p className="mt-2 text-sm text-slate-600">
                  In this view, treatment mainly focuses on calming inflammation,
                  protecting the joint, and managing pain so you can stay active.
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50/60 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                  Holistic perspective
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  Holistic practitioners zoom out and look at the entire system, not just
                  the painful joint. Joint pain may be seen as a signal of:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>
                    <span className="font-semibold">Chronic inflammation</span> driven by
                    diet, stress, and sleep
                  </li>
                  <li>
                    <span className="font-semibold">Nutrient gaps</span> in omega-3s,
                    magnesium, vitamin D, or antioxidants
                  </li>
                  <li>
                    <span className="font-semibold">Gut-health imbalances</span> that
                    influence immune function
                  </li>
                  <li>
                    <span className="font-semibold">Poor movement patterns</span> or
                    posture that overload certain joints
                  </li>
                  <li>
                    <span className="font-semibold">High stress and low recovery</span>{" "}
                    that keep the body in a tense, inflamed state
                  </li>
                </ul>
                <p className="mt-2 text-sm text-slate-700">
                  Instead of stopping at pain relief, a holistic approach aims to reduce
                  overall inflammatory load, support the tissues that make up your
                  joints, and improve how your body moves and recovers day to day.
                </p>
              </div>
            </div>
          </section>

          {/* Symptoms */}
          <section
            id="symptoms"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Symptoms of Joint Pain
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Joint pain can show up in different ways, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Aching, throbbing, or sharp pain in or around a joint</li>
              <li>Morning stiffness or feeling "rusty" after sitting</li>
              <li>Swelling, warmth, or tenderness when you press the area</li>
              <li>Decreased range of motion or difficulty bending/straightening</li>
              <li>Popping, grinding, or a feeling of "catching" with movement</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              Holistic practitioners will often ask about digestion, sleep, energy, and
              daily habits as well. These extra clues can point toward deeper causes of
              joint discomfort.
            </p>
          </section>

          {/* Medical options */}
          <section
            id="medical-options"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Conventional Medical Treatment Options
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Conventional care can be very helpful, especially when pain is severe or a
              serious condition needs to be ruled out. Common medical approaches
              include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>
                <span className="font-semibold">
                  Over-the-counter pain relievers
                </span>{" "}
                such as acetaminophen or NSAIDs like ibuprofen or naproxen
              </li>
              <li>
                <span className="font-semibold">Short-term rest</span> of the affected
                joint, followed by a gradual return to movement
              </li>
              <li>
                <span className="font-semibold">Physical therapy</span> to strengthen
                muscles, improve flexibility, and correct movement patterns
              </li>
              <li>
                <span className="font-semibold">Heat or cold therapy</span> to ease
                stiffness or swelling
              </li>
              <li>
                <span className="font-semibold">
                  Prescription medications or injections
                </span>{" "}
                for more serious or persistent joint issues
              </li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              These tools can bring important short-term relief. A natural-first mindset
              doesn't reject them—it simply asks,{" "}
              <span className="italic">
                "What can I do to help my body so that I may need less of this over
                time?"
              </span>
            </p>
          </section>

          {/* Holistic options */}
          <section
            id="holistic-options"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Holistic, Natural-First Approaches to Joint Pain
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              A holistic approach looks at how your lifestyle, nutrition, and daily
              habits may be feeding inflammation—or helping to cool it down. Many people
              combine these strategies with appropriate medical care.
            </p>

            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  1. Anti-inflammatory foods
                </h3>
                <p className="mt-1">
                  What you eat every day can quietly nudge inflammation up or down.
                  Foods commonly used in holistic joint support include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Fatty fish (salmon, sardines) or algae-based omega-3s</li>
                  <li>Turmeric with black pepper to support absorption</li>
                  <li>Ginger, garlic, and herbs with antioxidant properties</li>
                  <li>Leafy greens, berries, and colorful vegetables</li>
                  <li>Extra-virgin olive oil, nuts, and seeds</li>
                </ul>
                <p className="mt-2">
                  At the same time, many holistic practitioners suggest reducing
                  processed foods, sugary drinks, and highly refined oils, which may
                  contribute to inflammation in some people.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  2. Evidence-informed supplements
                </h3>
                <p className="mt-1">
                  Always talk with your healthcare provider before starting new
                  supplements, especially if you take medications or have chronic
                  conditions. Common options include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <span className="font-semibold">Turmeric / curcumin:</span> supports
                    a healthy inflammatory response.
                  </li>
                  <li>
                    <span className="font-semibold">Omega-3 fatty acids:</span> may help
                    support joint comfort and mobility.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Glucosamine and chondroitin:
                    </span>{" "}
                    often used together to support cartilage and long-term joint
                    function.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Magnesium (such as magnesium glycinate):
                    </span>{" "}
                    supports muscle relaxation and healthy nerve function, easing
                    tension around joints.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  3. Gentle movement as medicine
                </h3>
                <p className="mt-1">
                  Holistic care sees everyday movement as a powerful tool for joint
                  health. Helpful options include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Walking at a comfortable pace</li>
                  <li>Yoga or tai chi for flexibility and balance</li>
                  <li>Low-impact strength training with good form</li>
                  <li>Short, frequent stretch breaks if you sit most of the day</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  4. Stress and sleep support
                </h3>
                <p className="mt-1">
                  Stress hormones and poor sleep can both increase inflammation and
                  muscle tension. Simple habits can make a real difference:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Consistent bed and wake times when possible</li>
                  <li>Limiting screens 30–60 minutes before bed</li>
                  <li>Deep breathing, prayer, or relaxation in the evening</li>
                  <li>Light stretching before sleep to release tension</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  5. Natural topical support
                </h3>
                <p className="mt-1">
                  Some people find extra comfort from topical options such as arnica gel,
                  capsaicin cream, or essential-oil blends designed for sore muscles and
                  joints. These do not replace medical care but can be another supportive
                  layer.
                </p>
              </div>
            </div>
          </section>

          {/* When to see a doctor */}
          <section
            id="when-to-see-a-doctor"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              When to See a Doctor
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              While holistic and lifestyle approaches can be very helpful, some symptoms
              suggest you should seek prompt medical care. Contact a healthcare
              professional or urgent care if you notice:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Sudden, severe joint pain with no clear cause</li>
              <li>Inability to bear weight or use the joint</li>
              <li>Visible deformity after an injury</li>
              <li>Fever, chills, or feeling very unwell with joint swelling</li>
              <li>Redness, warmth, or rapid swelling in one joint</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              You do not have to choose between "natural" and "medical." Many people use
              holistic tools daily while also working with a trusted doctor when needed.
            </p>
          </section>

          {/* CTA card */}
          <section
            id="use-remedyclear"
            className="rounded-3xl border border-teal-100 bg-gradient-to-r from-teal-50 via-white to-emerald-50 p-6 shadow-sm sm:p-7"
          >
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              See Your Options Side-by-Side with Remedy Clear
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Reading about joint pain is helpful, but it can still leave you wondering,
              "What should I actually try first?"
            </p>
            <p className="mt-2 text-sm text-slate-700">
              The Remedy Clear tool gives you a{" "}
              <span className="font-semibold">custom side-by-side comparison</span> of
              standard medical options and holistic, natural-first approaches, plus product
              ideas you can explore, all in one place.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              To use it, go back to the main page and type{" "}
              <span className="font-semibold">"joint pain"</span> into the search bar.
            </p>
            <a
              href="/#remedyclear-tool"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Compare joint pain remedies with Remedy Clear
            </a>
          </section>

          {/* Disclaimer */}
          <section
            id="disclaimer"
            className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm sm:p-7"
          >
            <h2 className="text-base font-semibold text-slate-900">
              Important Disclaimer
            </h2>
            <p className="mt-2">
              The information on this page is for educational purposes only and is not a
              substitute for professional medical advice, diagnosis, or treatment. Always
              talk with your doctor or another qualified healthcare provider about any
              questions you have regarding a medical condition, new symptoms, or changes
              to your medications, supplements, or lifestyle habits.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default JointPainPage;
