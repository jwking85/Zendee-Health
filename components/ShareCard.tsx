import React from 'react';
import { Share2, X, Copy, Twitter, Facebook } from 'lucide-react';

interface ShareCardProps {
  onClose: () => void;
  symptom: string;
  rootCause: string;
}

export const ShareCard: React.FC<ShareCardProps> = ({ onClose, symptom, rootCause }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-[2rem] shadow-2xl max-w-sm w-full overflow-hidden relative border border-gray-100 transform transition-all scale-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur hover:bg-white/40 rounded-full transition-colors text-gray-500 hover:text-gray-800 z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative p-8 bg-gradient-to-br from-teal-50 to-amber-50">
          {/* Card Visual */}
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-8 border border-white/50 relative overflow-hidden aspect-[4/5] flex flex-col">
             {/* Decorative Blobs */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-200/30 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 -left-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl"></div>

             <div className="relative z-10 flex-grow flex flex-col">
               <div className="inline-flex items-center gap-2 mb-8">
                 <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                   <div className="w-3 h-3 bg-white rounded-full"></div>
                 </div>
                 <div>
                   <span className="block text-xs font-bold text-gray-400 leading-none">ZENDEE</span>
                   <span className="block text-sm font-black text-gray-900 leading-none">HEALTH</span>
                 </div>
               </div>
               
               <div className="space-y-6 my-auto">
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">I SEARCHED</p>
                    <h3 className="text-3xl font-black text-gray-900 leading-tight tracking-tight">
                      {symptom.charAt(0).toUpperCase() + symptom.slice(1)}
                    </h3>
                 </div>

                 <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full"></div>

                 <div>
                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-2">ROOT CAUSE</p>
                   <p className="text-lg text-gray-600 font-serif italic leading-relaxed">
                     "{rootCause.substring(0, 110)}{rootCause.length > 110 ? '...' : ''}"
                   </p>
                 </div>
               </div>

               <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-end">
                  <div className="text-xs font-medium text-gray-400">
                    Compare Medical and<br/>Natural paths.
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-900">zendeehealth.com</span>
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 bg-white space-y-3">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Share this</p>
          <div className="flex gap-2">
            <button className="flex-1 py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
              <Copy className="w-4 h-4" /> Copy Image
            </button>
             <button className="p-3 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-100 transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
             <button className="p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};