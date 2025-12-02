import React from 'react';
import { Stethoscope, AlertTriangle, Activity, Pill, Clock } from 'lucide-react';
import { MedicalPath } from '../types';

interface MedicalCardProps {
  data: MedicalPath;
}

export const MedicalCard: React.FC<MedicalCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
      {/* Clinical Header */}
      <div className="bg-slate-50 p-6 sm:p-8 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
            <Stethoscope className="w-6 h-6 text-slate-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Standard Medical</h3>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Conventional Approach</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8 flex-grow">
        {/* Diagnosis */}
        <div>
          <h4 className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            <Activity className="w-4 h-4 text-slate-500" />
            Typical Diagnosis
          </h4>
          <p className="text-gray-700 leading-relaxed text-lg font-medium">
            {data.diagnosis}
          </p>
        </div>

        {/* Rationale */}
        {data.rationale && (
          <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              <Pill className="w-4 h-4 text-slate-500" />
              Explanation
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.rationale}
            </p>
          </div>
        )}

        {/* Red Flags */}
        {data.redFlags && data.redFlags.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
              <AlertTriangle className="w-4 h-4" />
              Warning Signs
            </h4>
            <ul className="space-y-3">
              {data.redFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span className="text-red-800 font-medium">{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Questions to Ask Doctor */}
        {data.whatToAskDoctor && data.whatToAskDoctor.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              <Clock className="w-4 h-4 text-slate-500" />
              Questions for Your Doctor
            </h4>
            <ul className="space-y-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              {data.whatToAskDoctor.map((question, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
          *Always consult with a healthcare professional
        </p>
      </div>
    </div>
  );
};