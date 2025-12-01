import React from 'react';
import { ClipboardList, Download, Sun, Moon, Coffee } from 'lucide-react';
import { HolisticProtocol } from '../types';

interface DailyChecklistProps {
  protocols: HolisticProtocol[];
}

export const DailyChecklist: React.FC<DailyChecklistProps> = ({ protocols }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group/list">
      <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
        <h5 className="font-bold text-gray-800 flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-teal-600" />
          Daily Checklist
        </h5>
        <button className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-teal-600 transition-colors">
          <Download className="w-3.5 h-3.5" /> PDF
        </button>
      </div>

      <div className="space-y-4">
        {/* Mocked Morning Section based on protocols */}
        <div className="space-y-2">
          <h6 className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
            <Sun className="w-3 h-3" /> Morning
          </h6>
          <div className="space-y-2 pl-2 border-l-2 border-amber-100">
            {protocols.slice(0, 1).map((p, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 border border-gray-300 rounded-sm mt-1"></div>
                <span>{p.title || p.focusArea}: {p.details?.split(',')[0] || 'Follow protocol'}</span>
              </div>
            ))}
             <div className="flex items-start gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 border border-gray-300 rounded-sm mt-1"></div>
                <span>Drink water and electrolytes</span>
              </div>
          </div>
        </div>

        {/* Mocked Evening Section */}
        <div className="space-y-2">
           <h6 className="text-xs font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-1.5">
            <Moon className="w-3 h-3" /> Evening
          </h6>
          <div className="space-y-2 pl-2 border-l-2 border-indigo-100">
             {protocols.slice(1, 2).map((p, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 border border-gray-300 rounded-sm mt-1"></div>
                <span>{p.title || p.focusArea}: {p.details?.split(',')[0] || 'Follow protocol'}</span>
              </div>
            ))}
             <div className="flex items-start gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 border border-gray-300 rounded-sm mt-1"></div>
                <span>No screens 1hr before bed</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};