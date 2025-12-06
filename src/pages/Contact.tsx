import React, { useEffect, useState } from "react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  useEffect(() => {
    const title = "Contact RemedyClear";
    const description =
      "Contact RemedyClear with questions, feedback, or suggestions about our health comparison tools.";

    document.title = `${title} | RemedyClear`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Hook this up to your backend, email service, or form handler.
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-sm text-slate-500 mb-6">
        Have questions, feedback, or ideas for RemedyClear? Reach out below.
      </p>

      <section className="space-y-6 text-sm sm:text-base leading-relaxed mb-8">
        <p>
          We&apos;re always working to make RemedyClear clearer, calmer, and
          more helpful. If you notice something that doesn&apos;t seem right, or
          if you have ideas for new features or topics, we&apos;d be grateful to
          hear from you.
        </p>

        <p>
          You can contact us directly at{" "}
          <a
            href="mailto:support@remedyclear.com"
            className="text-teal-600 hover:underline"
          >
            support@remedyclear.com
          </a>{" "}
          or use the form below.
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="How can we help?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-teal-700 mt-2">
            Thanks for reaching out. This demo form was submitted successfully.
            {/* Reminder: hook this up to a real handler */}
          </p>
        )}
      </form>
    </main>
  );
};

export default Contact;
