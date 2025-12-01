import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Minus } from 'lucide-react';

interface FeedbackPromptProps {
  onFeedback: (response: string) => void;
}

export const FeedbackPrompt: React.FC<FeedbackPromptProps> = ({ onFeedback }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (response: string) => {
    setSelected(response);
    setTimeout(() => onFeedback(response), 800);
  };

  if (selected) {
    return (
      <div className="mt-8 p-6 bg-teal-50 rounded-2xl border border-teal-100 text-center animate-fade-in">
        <p className="text-teal-800 font-bold mb-1">Thanks for the feedback.</p>
        <p className="text-teal-600 text-sm">We use this to improve our results.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
      <h4 className="text-gray-900 font-bold mb-4">Did this help?</h4>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => handleSelect('yes')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all group"
        >
          <ThumbsUp className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
          <span className="text-sm font-medium">Yes</span>
        </button>
        <button
          onClick={() => handleSelect('somewhat')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700 transition-all group"
        >
          <Minus className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
          <span className="text-sm font-medium">Somewhat</span>
        </button>
        <button
          onClick={() => handleSelect('no')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:border-red-500 hover:bg-red-50 hover:text-red-700 transition-all group"
        >
          <ThumbsDown className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
          <span className="text-sm font-medium">No</span>
        </button>
      </div>
    </div>
  );
};