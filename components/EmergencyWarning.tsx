import React from 'react';
import { AlertTriangle, Phone, XCircle } from 'lucide-react';

interface EmergencyWarningProps {
  onDismiss: () => void;
  keywordDetected: string;
}

export const EmergencyWarning: React.FC<EmergencyWarningProps> = ({ onDismiss, keywordDetected }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-900/90 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border-t-8 border-red-600">
        <div className="p-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 mb-6 animate-pulse-slow">
            <AlertTriangle className="h-10 w-10 text-red-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Emergency Detected</h2>
          <p className="text-gray-600 mb-6">
            We detected keywords related to a medical emergency ("{keywordDetected}"). 
            This tool cannot replace emergency care.
          </p>

          <div className="space-y-4">
            <a 
              href="tel:911" 
              className="flex items-center justify-center w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg font-bold shadow-lg transition-transform active:scale-95"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call 911 Now
            </a>
            
            <button
              onClick={onDismiss}
              className="flex items-center justify-center w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors"
            >
              <XCircle className="mr-2 h-5 w-5" />
              I'm Safe / Mistake
            </button>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 text-xs text-center text-gray-500 border-t border-gray-100">
          If you aren't sure, get medical help now.
        </div>
      </div>
    </div>
  );
};