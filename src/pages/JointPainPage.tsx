import React from "react";

const JointPainPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-10 lg:py-16">
        {/* Header */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">
            Symptom Guide
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Joint Pain: Holistic &amp; Medical Approaches
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            A natural-first, medically informed guide to understanding joint pain, what
            may be causing it, and how holistic and conventional options fit together.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/#remedyclear-tool"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Compare joint pain remedies
              <span className="text-xs opacity-80">Holistic vs medical in seconds</span>
            </a>
            <p className="text-xs text-slate-500">
              Use the RemedyClear search tool to see a personalized side-by-side plan.
            </p>
          </div>
        </header>

        {/* Main content */}
        <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline">
          {/* Overview */}
          <section id="overview">
            <h2>Overview</h2>
            <p>
              Joint pain is one of the most common discomforts people experience. It can
              show up as stiffness in the morning, soreness after physical activity, or
              an ongoing ache that makes everyday tasks harder. While conventional
              medicine often focuses on symptom relief and reducing inflammation, many
              people find that a more holistic, root-cause approach offers deeper and
              longer-lasting comfort.
            </p>
            <p>
              At RemedyClear, the goal is not to choose sides but to help you{" "}
              <strong>see both views clearly</strong>. We present the standard medical
              perspective alongside the holistic perspective, while gently encouraging a
              natural-first mindset built on lifestyle, nutrition, and whole-body
              wellness.
            </p>
          </section>

          {/* Causes */}
          <section id="causes">
            <h2>Common Causes of Joint Pain</h2>

            <h3>Medical perspective</h3>
            <p>
              From a standard medical point of view, joint pain is usually linked to
              problems in or around the joint itself. Common causes include:
            </p>
            <ul>
              <li>Osteoarthritis (wear-and-tear of cartilage over time)</li>
              <li>Inflammation of the joint lining (synovitis)</li>
              <li>Tendon or ligament strain from overuse or injury</li>
              <li>Repetitive stress on a joint from work or sports</li>
              <li>
                Autoimmune conditions such as rheumatoid arthritis (less common but more
                serious)
              </li>
            </ul>

            <p>
              In this view, treatment is mainly about calming inflammation, protecting
              the joint, and managing pain so you can stay active.
            </p>

            <h3>Holistic perspective</h3>
            <p>
              Holistic practitioners zoom out and look at the entire system, not just the
              painful joint. Joint pain may be seen as a signal of:
            </p>
            <ul>
              <li>
                <strong>Chronic inflammation</strong> driven by diet, stress, and sleep
              </li>
              <li>
                <strong>Nutrient gaps</strong> in omega-3s, magnesium, vitamin D, or
                antioxidants
              </li>
              <li>
                <strong>Gut health imbalances</strong> that influence inflammation and
                immune function
              </li>
              <li>
                <strong>Poor movement patterns or posture</strong> that overload certain
                joints
              </li>
              <li>
                <strong>High stress and low recovery</strong> that keep the body in a
                tense, inflamed state
              </li>
            </ul>
            <p>
              Instead of focusing only on pain relief, a holistic approach aims to reduce
              overall inflammatory load, support the tissues that make up your joints,
              and improve how your body moves and recovers day to day.
            </p>
          </section>

          {/* Symptoms */}
          <section id="symptoms">
            <h2>Symptoms of Joint Pain</h2>
            <p>Joint pain can show up in different ways, including:</p>
            <ul>
              <li>Aching, throbbing, or sharp pain in or around a joint</li>
              <li>Stiffness, especially in the morning or after sitting</li>
              <li>Swelling, warmth, or tenderness</li>
              <li>Decreased range of motion</li>
              <li>Popping, grinding, or a feeling of "catching" with movement</li>
            </ul>
            <p>
              Holistic practitioners will often ask additional questions about digestion,
              sleep, stress levels, energy, and daily habits. These clues can point
              toward deeper contributors to joint discomfort.
            </p>
          </section>

          {/* Medical treatments */}
          <section id="medical-options">
            <h2>Conventional Medical Treatment Options</h2>
            <p>
              Conventional care can be very helpful, especially when pain is severe or a
              serious condition needs to be ruled out. Common medical approaches
              include:
            </p>
            <ul>
              <li>
                <strong>Over-the-counter pain relievers</strong> such as acetaminophen or
                non-steroidal anti-inflammatory drugs (NSAIDs) like ibuprofen or
                naproxen
              </li>
              <li>
                <strong>Short-term rest</strong> of the affected joint, followed by a
                gradual return to movement
              </li>
              <li>
                <strong>Physical therapy</strong> to strengthen muscles, improve
                flexibility, and correct movement patterns
              </li>
              <li>
                <strong>Heat or cold therapy</strong> to ease stiffness or swelling
              </li>
              <li>
                <strong>Prescription medications or injections</strong> for more serious
                or persistent joint issues
              </li>
            </ul>
            <p>
              These tools can bring important short-term relief. A natural-first mindset
              doesn't reject them—it simply asks, "What can I do to help my body so that
              I may need less of this over time?"
            </p>
          </section>

          {/* Holistic approaches */}
          <section id="holistic-options">
            <h2>Holistic, Natural-First Approaches to Joint Pain</h2>
            <p>
              A holistic approach looks at how your lifestyle, nutrition, and daily
              habits may be feeding inflammation—or helping to cool it down. Many people
              combine these strategies with appropriate medical care.
            </p>

            <h3>1. Anti-inflammatory foods</h3>
            <p>
              What you eat every day can quietly nudge inflammation up or down. Foods
              commonly used in holistic joint support include:
            </p>
            <ul>
              <li>Fatty fish (salmon, sardines) or algae-based omega-3 supplements</li>
              <li>Turmeric with black pepper to support absorption</li>
              <li>Ginger, garlic, and herbs with antioxidant properties</li>
              <li>Leafy greens, berries, and colorful vegetables</li>
              <li>Extra virgin olive oil, nuts, and seeds</li>
            </ul>
            <p>
              At the same time, many holistic practitioners suggest reducing processed
              foods, sugary drinks, and highly refined oils, which can contribute to
              inflammation in some people.
            </p>

            <h3>2. Evidence-informed supplements</h3>
            <p>
              Always talk with your healthcare provider before starting new supplements,
              especially if you take medications or have chronic conditions. Some
              commonly used options for joint support include:
            </p>
            <ul>
              <li>
                <strong>Turmeric / curcumin:</strong> Supports a healthy inflammatory
                response.
              </li>
              <li>
                <strong>Omega-3 fatty acids:</strong> May help support joint comfort and
                mobility.
              </li>
              <li>
                <strong>Glucosamine and chondroitin:</strong> Often used together to
                support cartilage and long-term joint function.
              </li>
              <li>
                <strong>Magnesium (such as magnesium glycinate):</strong> Supports muscle
                relaxation and healthy nerve function, which can ease tension around
                joints.
              </li>
            </ul>

            <h3>3. Gentle movement as medicine</h3>
            <p>
              Holistic care sees everyday movement as a powerful tool for joint health.
              Gentle, consistent motion helps lubricate joints and maintain strength.
              Helpful options include:
            </p>
            <ul>
              <li>Walking at a comfortable pace</li>
              <li>Yoga or tai chi focused on flexibility and balance</li>
              <li>Low-impact strength training with good form</li>
              <li>Short, frequent stretch breaks if you sit most of the day</li>
            </ul>

            <h3>4. Stress and sleep support</h3>
            <p>
              Stress hormones and poor sleep can both increase inflammation and muscle
              tension. Simple habits can make a real difference:
            </p>
            <ul>
              <li>Consistent bed and wake times when possible</li>
              <li>Limiting screens 30–60 minutes before bed</li>
              <li>Deep breathing, prayer, or relaxation routines in the evening</li>
              <li>Light stretching to release tension before sleep</li>
            </ul>

            <h3>5. Natural topical support</h3>
            <p>
              Some people find extra comfort from topical options such as arnica gel,
              capsaicin cream, or essential oil blends designed for sore muscles and
              joints. These do not replace medical care but can be one more supportive
              layer.
            </p>
          </section>

          {/* When to see a doctor */}
          <section id="when-to-see-a-doctor">
            <h2>When to See a Doctor</h2>
            <p>
              While holistic and lifestyle approaches can be very helpful, some symptoms
              suggest you should seek prompt medical care. Contact a healthcare
              professional or urgent care if you notice:
            </p>
            <ul>
              <li>Sudden, severe joint pain with no clear cause</li>
              <li>Inability to bear weight or use the joint</li>
              <li>Visible deformity after an injury</li>
              <li>Fever, chills, or feeling very unwell along with joint swelling</li>
              <li>Redness, warmth, or rapid swelling in one joint</li>
            </ul>
            <p>
              You do not have to choose between "natural" and "medical." Many people use
              holistic tools daily while also working with a trusted doctor when needed.
            </p>
          </section>

          {/* CTA to tool */}
          <section id="use-remedyclear">
            <h2>See Your Options Side-by-Side with RemedyClear</h2>
            <p>
              Reading about joint pain is helpful, but it can still leave you wondering,
              "What should I actually try first?"
            </p>
            <p>
              The RemedyClear tool gives you a{" "}
              <strong>custom side-by-side comparison</strong> of standard medical options
              and holistic, natural-first approaches—plus product ideas you can explore,
              all in one place.
            </p>
            <p>
              To use it, go back to the main page and type{" "}
              <strong>"joint pain"</strong> into the search bar.
            </p>
            <p>
              <a href="/#remedyclear-tool">
                Compare joint pain remedies with RemedyClear →
              </a>
            </p>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer">
            <h2>Important Disclaimer</h2>
            <p>
              The information on this page is for educational purposes only and is not a
              substitute for professional medical advice, diagnosis, or treatment. Always
              talk with your doctor or another qualified healthcare provider about any
              questions you have regarding a medical condition, new symptoms, or changes
              to your medications, supplements, or lifestyle habits.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default JointPainPage;
