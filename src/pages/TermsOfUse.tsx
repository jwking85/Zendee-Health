import React, { useEffect } from "react";

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    const title = "Terms of Use | Remedy Clear";
    const description =
      "Read the Terms of Use for Remedy Clear, including important disclaimers, user responsibilities, and limitations of liability.";

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
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms of Use</h1>
      <p className="text-sm text-slate-500 mb-8">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use
          of the Remedy Clear website, tools, and services (collectively, the
          &quot;Service&quot;). By accessing or using the Service, you agree to
          be bound by these Terms. If you do not agree, do not use the Service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. About Remedy Clear</h2>

        <p>
          Remedy Clear is an informational and educational platform that compares
          conventional medical approaches with holistic, lifestyle, and natural
          options for various symptoms and concerns. The Service is designed to
          help you explore different perspectives on health, not to replace
          professional medical advice, diagnosis, or treatment.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. Not Medical Advice
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            The content, comparisons, and suggestions provided by Remedy Clear
            are for informational and educational purposes only.
          </li>
          <li>
            The Service does not provide medical, nursing, or other professional
            healthcare services or advice.
          </li>
          <li>
            Nothing on the Service should be interpreted as a diagnosis,
            treatment plan, prescription, or specific recommendation for you or
            any individual.
          </li>
          <li>
            Always seek the advice of a physician or other qualified healthcare
            provider with any questions you may have regarding a medical
            condition. Never disregard professional medical advice or delay
            seeking it because of something you read or see on the Service.
          </li>
        </ul>

        <p className="mt-3 font-semibold">
          If you think you may have a medical emergency, call your doctor or
          emergency services immediately.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. Eligibility and User Responsibilities
        </h2>

        <p>
          By using the Service, you represent and warrant that you are at least
          18 years old or have the consent of a parent or legal guardian. You
          agree to:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Use the Service only for lawful purposes.</li>
          <li>
            Provide accurate and honest information if and when you choose to
            share data with us.
          </li>
          <li>
            Not use the Service in any manner that could harm, disable,
            overburden, or impair the Service or interfere with others&apos; use
            of it.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Prohibited Uses</h2>

        <p>You agree not to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Use the Service for any unlawful, fraudulent, or malicious purpose.
          </li>
          <li>
            Attempt to gain unauthorized access to any part of the Service or
            its related systems.
          </li>
          <li>
            Reverse engineer, decompile, or attempt to extract the source code
            of the Service.
          </li>
          <li>
            Use automated tools (such as bots or scrapers) in a way that
            imposes an unreasonable load on our infrastructure.
          </li>
          <li>
            Post or transmit any content that is defamatory, obscene,
            threatening, harassing, or otherwise objectionable.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          5. Intellectual Property
        </h2>

        <p>
          The Service, including its content, design, and underlying technology,
          is owned or licensed by Remedy Clear and is protected by copyright,
          trademark, and other intellectual property laws. You are granted a
          limited, non-exclusive, non-transferable license to access and use the
          Service for personal, non-commercial purposes.
        </p>

        <p className="mt-3">
          You may not reproduce, distribute, modify, create derivative works of,
          publicly display, or exploit any portion of the Service without our
          prior written permission, except as allowed by applicable law or as
          clearly enabled by sharing features provided within the Service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          6. Third-Party Links and Affiliate Relationships
        </h2>

        <p>
          The Service may contain links to third-party websites, products, or
          services, including affiliate links. We may earn a commission if you
          purchase products or services through these links, at no additional
          cost to you.
        </p>

        <p className="mt-3">
          We do not control and are not responsible for the content, privacy
          policies, or practices of third-party sites. Accessing any third-party
          website is at your own risk, and you should review the applicable
          terms and policies of those sites.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          7. Disclaimers and No Warranties
        </h2>

        <p>
          THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
          AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER
          EXPRESS, IMPLIED, OR STATUTORY. WITHOUT LIMITING THE FOREGOING, WE
          DISCLAIM ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>

        <p className="mt-3">
          We do not warrant that the Service will be uninterrupted, secure, or
          error-free, that defects will be corrected, or that the Service or the
          servers that make it available are free of viruses or harmful
          components. Any reliance you place on the Service is strictly at your
          own risk.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          8. Limitation of Liability
        </h2>

        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL REMEDYCLEAR
          OR ITS OWNERS, OFFICERS, EMPLOYEES, OR PARTNERS BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
          INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR OTHER
          INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF OR
          INABILITY TO USE THE SERVICE.
        </p>

        <p className="mt-3">
          OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE
          SERVICE SHALL NOT EXCEED, IN THE AGGREGATE, THE AMOUNT YOU PAID (IF
          ANY) TO USE THE SERVICE IN THE 3 MONTHS PRECEDING THE CLAIM.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">9. Indemnification</h2>

        <p>
          You agree to indemnify, defend, and hold harmless Remedy Clear and its
          owners, officers, employees, and partners from and against any claims,
          liabilities, damages, losses, and expenses (including reasonable
          attorneys&apos; fees) arising out of or in any way connected with:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Your access to or use of the Service.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of any third-party rights.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          10. Changes to the Service and Terms
        </h2>

        <p>
          We may modify, suspend, or discontinue any part of the Service at any
          time, with or without notice. We may also update these Terms from time
          to time. The &quot;Last updated&quot; date at the top will reflect the
          most recent changes.
        </p>

        <p className="mt-3">
          By continuing to use the Service after changes become effective, you
          agree to be bound by the revised Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">11. Governing Law</h2>

        <p>
          These Terms are governed by and construed in accordance with the laws
          of the State of Tennessee, United States, without regard to its
          conflict of law principles. Any disputes arising out of or relating to
          these Terms or the Service shall be brought exclusively in the state
          or federal courts located in Tennessee, and you consent to the
          jurisdiction of such courts.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">12. Contact Us</h2>

        <p>
          If you have any questions about these Terms, you can contact us at:
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

export default TermsOfUse;
