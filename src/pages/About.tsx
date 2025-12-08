import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    const title = "About Remedy Clear";
    const description =
      "Learn what Remedy Clear is, why it was created, and how it helps you compare holistic and conventional options side by side.";

    document.title = `${title} | Remedy Clear`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Remedy Clear</h1>

      <p className="text-sm text-slate-500 mb-8">
        Helping you see the full picture: holistic and conventional, side by
        side.
      </p>

      <section className="space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          Remedy Clear was created to solve a simple but frustrating problem:
          most health information online either leans heavily toward
          conventional medicine or swings completely into holistic advice. Very
          few places put both perspectives next to each other in a clear,
          balanced way.
        </p>

        <p>
          Our goal is to give you a calm, evidence-aware space to explore
          options: what a conventional doctor might typically do, what holistic
          or lifestyle-based approaches might be considered, and how those
          perspectives can complement each other.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">What Remedy Clear Is</h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            A comparison tool that lays out{" "}
            <span className="font-semibold">
              holistic vs. conventional approaches
            </span>{" "}
            for common symptoms and concerns.
          </li>
          <li>
            A way to organize scattered information into{" "}
            <span className="font-semibold">simple, readable cards</span>{" "}
            instead of overwhelming walls of text.
          </li>
          <li>
            A platform that can surface{" "}
            <span className="font-semibold">practical lifestyle ideas</span> you
            can discuss with your healthcare provider.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          What Remedy Clear Is Not
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>A doctor or medical professional.</li>
          <li>A substitute for in-person medical care or diagnosis.</li>
          <li>
            A one-size-fits-all answer to complex health questions. Every body
            and every situation is different.
          </li>
        </ul>

        <p className="mt-3">
          Remedy Clear is here to{" "}
          <span className="font-semibold">support your thinking</span> before
          you talk with your provider, not replace that conversation.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          How We Keep Things Balanced
        </h2>

        <p>
          We aim to present both sides with respect. Conventional suggestions
          may reference common clinical guidelines, while holistic suggestions
          may highlight nutrition, movement, sleep, stress, environment, and
          other lifestyle factors. We try to avoid fear-based language or
          miracle-cure claims.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Our Vision</h2>

        <p>
          We believe that people make better decisions when they have:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Clear comparisons instead of confusion.</li>
          <li>
            Respectful, non-judgmental explanations from multiple perspectives.
          </li>
          <li>
            Simple summaries they can bring into conversations with their
            trusted providers.
          </li>
        </ul>

        <p className="mt-3">
          Remedy Clear is built to serve that vision: less noise, more clarity,
          and a stronger partnership between you and your own health team.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Get in Touch</h2>

        <p>
          Have feedback, spot an issue, or want to suggest a feature? We&apos;d
          love to hear from you.
        </p>
        <p className="mt-2">
          Email:{" "}
          <a
            href="mailto:support@remedyclear.com"
            className="text-teal-600 hover:underline"
          >
            support@remedyclear.com
          </a>
        </p>
      </section>
    </main>
  );
};

export default About;
