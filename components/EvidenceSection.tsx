import React from "react";
import { evidenceBySymptom } from "../services/evidence";

interface EvidenceSectionProps {
  symptom: string;
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({ symptom }) => {
  const key = symptom.toLowerCase().trim();
  const links = evidenceBySymptom[key];

  if (!links || links.length === 0) return null;

  return (
    <div className="mt-6 rounded-xl border border-teal-100 bg-teal-50/60 p-4">
      <h3 className="text-sm font-semibold text-teal-900 mb-2">
        Evidence &amp; further reading
      </h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-800 underline underline-offset-2 hover:text-teal-900"
            >
              {link.title}
            </a>
            <span className="ml-2 text-gray-600">— {link.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
