import React, { useEffect } from "react";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    const title = "Privacy Policy | Remedy Clear";
    const description =
      "Learn how Remedy Clear collects, uses, and protects your information when you use our health comparison and education tools.";

    document.title = title;

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
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          This Privacy Policy describes how Remedy Clear (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your
          information when you visit our website, use our symptom checker, or
          interact with our holistic vs. conventional comparison tools
          (collectively, the &quot;Service&quot;).
        </p>

        <p>
          By using the Service, you agree to the collection and use of
          information in accordance with this Privacy Policy. If you do not
          agree, please discontinue use of the Service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Information We Collect
        </h2>

        <h3 className="font-semibold mt-4">1.1 Information you provide</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <span className="font-semibold">Symptom inputs:</span> health
            concerns, symptoms, and related free-text that you enter so we can
            generate educational comparisons between holistic and conventional
            approaches.
          </li>
          <li>
            <span className="font-semibold">Account / contact details:</span>{" "}
            if you join our email list, create an account, or contact us, we may
            collect your name, email address, and any information you choose to
            share.
          </li>
          <li>
            <span className="font-semibold">Feedback:</span> information you
            submit in surveys, forms, or support requests.
          </li>
        </ul>

        <h3 className="font-semibold mt-4">1.2 Automatically collected data</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <span className="font-semibold">Usage data:</span> pages viewed,
            features used, time on page, and click patterns to help us improve
            the Service.
          </li>
          <li>
            <span className="font-semibold">Device and log data:</span> IP
            address (which may be truncated or anonymized), browser type,
            operating system, referral URLs, and timestamps.
          </li>
          <li>
            <span className="font-semibold">Cookies and similar technologies:</span>{" "}
            small data files stored on your device to remember your preferences,
            help with analytics, and improve the user experience.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. How We Use Your Information
        </h2>

        <p>We may use the information we collect for purposes including:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Providing and improving the Service and its features.</li>
          <li>
            Generating educational comparisons and content about holistic and
            conventional approaches to health topics.
          </li>
          <li>
            Personalizing your experience, such as remembering recent queries or
            preferences.
          </li>
          <li>
            Monitoring performance, usage, and trends to improve stability and
            user experience.
          </li>
          <li>
            Communicating with you about updates, new features, or important
            notices (if you choose to receive such communications).
          </li>
          <li>
            Detecting, preventing, and addressing technical issues, misuse, or
            security concerns.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. Cookies and Tracking Technologies
        </h2>

        <p>
          We may use cookies, local storage, and similar technologies (including
          analytics tools such as Google Analytics or tag managers) to:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Understand how visitors use the Service.</li>
          <li>Remember your preferences and settings.</li>
          <li>Measure performance of content and features.</li>
        </ul>

        <p className="mt-3">
          You can usually adjust your browser settings to refuse cookies or
          notify you when cookies are being placed. However, some features of
          the Service may not function properly if cookies are disabled.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Third-Party Services and Affiliates
        </h2>

        <p>
          We may use third-party tools and services to help operate the Service,
          perform analytics, or display affiliate links and product
          recommendations (for example, Amazon Associates or similar
          programs). These third parties may collect information about your use
          of the Service over time and across different websites.
        </p>

        <p className="mt-3">
          If you click on an affiliate link, we may earn a commission at no
          extra cost to you. These links may take you to a third-party website
          with its own privacy policy and terms, which we encourage you to
          review.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          5. How We Share Your Information
        </h2>

        <p>We do not sell your personal information. We may share data:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            With trusted service providers who help us operate, analyze, or
            improve the Service and who are bound by confidentiality
            obligations.
          </li>
          <li>
            As required by law, regulation, legal process, or governmental
            request.
          </li>
          <li>
            To protect the rights, property, or safety of Remedy Clear, our
            users, or the public.
          </li>
          <li>
            In connection with a business transaction such as a merger,
            acquisition, or asset sale, where your information may be
            transferred as part of that transaction.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          6. Data Retention
        </h2>

        <p>
          We keep information for as long as reasonably necessary to provide the
          Service, comply with legal obligations, resolve disputes, and enforce
          our agreements. We may anonymize or aggregate data so that it no
          longer identifies you and use that data for analytics and improvement.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          7. Your Choices and Rights
        </h2>

        <p>You may have the right to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Access the personal information we hold about you.</li>
          <li>Request correction or deletion of your information.</li>
          <li>
            Opt out of non-essential emails or marketing communications by
            using unsubscribe links or contacting us.
          </li>
          <li>
            Limit certain types of processing as required by applicable law.
          </li>
        </ul>

        <p className="mt-3">
          To exercise these rights, please contact us using the details in the{" "}
          <span className="font-semibold">Contact Us</span> section below.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          8. Children&apos;s Privacy
        </h2>

        <p>
          The Service is not intended for use by children under 13, and we do
          not knowingly collect personal information from children under 13. If
          you believe a child has provided us with personal information, please
          contact us so we can take appropriate action.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          9. International Users
        </h2>

        <p>
          The Service is operated from the United States. If you access the
          Service from outside the U.S., you understand that your information
          may be transferred to, stored, and processed in the U.S. where data
          protection laws may differ from those in your jurisdiction.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          10. Changes to This Privacy Policy
        </h2>

        <p>
          We may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date at the top will reflect the most recent changes.
          Your continued use of the Service after changes are posted indicates
          your acceptance of the updated policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">11. Contact Us</h2>

        <p>
          If you have questions about this Privacy Policy or how we handle your
          information, you can contact us at:
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

export default PrivacyPolicy;
