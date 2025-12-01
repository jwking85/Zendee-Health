import React from 'react';
import { Lock, CheckCircle2, Clock, ShoppingBag, FileText } from 'lucide-react';
import { HolisticProtocol } from '../types';

interface ProtocolItemProps {
  protocol: HolisticProtocol;
  index: number;
  isPro: boolean;
  onUnlock: () => void;
}

export const ProtocolItem: React.FC<ProtocolItemProps> = ({ protocol, index, isPro, onUnlock }) => {
  return (
    <div className="relative group">
      <div className="flex items-center gap-3 mb-3">
        <span className={`
          w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-500 shadow-sm flex-shrink-0
          ${isPro ? 'bg-amber-100 text-amber-700 ring-2 ring-amber-200' : 'bg-teal-100 text-teal-700'}
        `}>
          {index + 1}
        </span>
        <div>
           <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{protocol.focusArea}</div>
           <h5 className="font-bold text-gray-900 text-lg leading-tight">{protocol.title}</h5>
        </div>
      </div>
      
      <div className="pl-11 relative">
        <div className={`transition-all duration-500 ${!isPro ? 'blur-[4px] select-none opacity-60 grayscale-[0.5]' : 'opacity-100'}`}>
          <p className="text-gray-800 font-medium mb-3 leading-relaxed">{protocol.approach}</p>
          
          <div className="bg-amber-50/50 rounded-lg p-3 border border-amber-100/50 mb-4">
            <p className="text-sm text-gray-600 italic"><span className="font-bold text-amber-700 not-italic">Why:</span> {protocol.reasoning}</p>
          </div>

          {/* Pro Details */}
          <div className="mt-4 grid gap-3 border-t border-dashed border-gray-200 pt-4">
            {protocol.details && (
              <div className="flex items-start gap-2 text-sm text-gray-700">
                 <FileText className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                 <div>
                   <span className="font-bold text-gray-900 block mb-1">Details:</span>
                   {protocol.details}
                 </div>
              </div>
            )}
            
            {protocol.shoppingList && protocol.shoppingList.length > 0 && (
              <div className="flex items-start gap-2 text-sm text-gray-700 mt-2">
                 <ShoppingBag className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                 <div>
                   <span className="font-bold text-gray-900 block mb-1">Products:</span>
                   <div className="flex flex-wrap gap-1.5">
                     {protocol.shoppingList.map((p, i) => (
                       <span key={i} className="bg-white text-gray-700 px-2 py-1 rounded-md text-xs border border-gray-200 shadow-sm">{p}</span>
                     ))}
                   </div>
                 </div>
              </div>
            )}
          </div>
        </div>

        {/* Lock Overlay for Standard Mode */}
        {!isPro && (
          <div 
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center cursor-pointer group/overlay pt-10"
            onClick={onUnlock}
          >
             <div className="bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 px-6 py-3 rounded-full flex items-center gap-2.5 transition-transform duration-300 group-hover/overlay:scale-105 transform">
               <Lock className="w-4 h-4 text-amber-500 fill-amber-500/20" />
               <span className="text-sm font-bold text-gray-900 group-hover/overlay:text-amber-600 transition-colors">
                 Unlock Full Protocol
               </span>
             </div>
             <p className="mt-3 text-xs text-gray-500 font-medium bg-white/50 px-2 rounded">
               Includes amounts, timing and products
             </p>
          </div>
        )}
      </div>
    </div>
  );
};