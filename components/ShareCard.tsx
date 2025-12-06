import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface ShareCardProps {
  onClose: () => void;
  symptom: string;
  rootCause: string;
}

export const ShareCard: React.FC<ShareCardProps> = ({ onClose, symptom, rootCause }) => {
  const [copied, setCopied] = useState(false);

  const baseUrl = 'https://www.remedyclear.com';
  const shareUrl = `${baseUrl}/?utm_source=social_share&utm_medium=card&utm_campaign=user_referral`;

  const formattedSymptom = symptom
    ? symptom.charAt(0).toUpperCase() + symptom.slice(1)
    : 'my symptoms';

  const cleanedRootCause = rootCause.trim().replace(/^"|"$/g, '');
  const shortRootCause =
    cleanedRootCause.length > 130
      ? `${cleanedRootCause.substring(0, 127).trim()}...`
      : cleanedRootCause;

  const shareText = [
    `I just used this health tool for "${formattedSymptom}".`,
    `It showed medical and natural paths side by side and explained the likely root causes in plain language.`,
    `Worth a look if you've been feeling off:`,
  ].join(' ');

  const combinedShare = `${shareText} ${shareUrl}`;

  const twitterText = `Found this tool that compares medical and natural approaches for health issues. Shows both perspectives side by side. ${shareUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(combinedShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-[2rem] shadow-2xl max-w-sm w-full overflow-hidden relative border border-gray-100 transform transition-all scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur hover:bg-white/40 rounded-full transition-colors text-gray-500 hover:text-gray-800 z-20"
          aria-label="Close share card"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Card content */}
        <div className="relative p-8 bg-gradient-to-br from-teal-50 to-amber-50">
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-8 border border-white/50 relative overflow-hidden aspect-[4/5] flex flex-col">
            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl" />

            <div className="relative z-10 flex-grow flex flex-col">
              {/* Brand */}
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 leading-none tracking-[0.16em]">
                    REMEDY
                  </span>
                  <span className="block text-sm font-black text-gray-900 leading-none tracking-tight">
                    CLEAR
                  </span>
                </div>
              </div>

              {/* Main content */}
              <div className="space-y-6 my-auto">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                    I CHECKED
                  </p>
                  <h3 className="text-3xl font-black text-gray-900 leading-tight tracking-tight break-words">
                    {formattedSymptom}
                  </h3>
                </div>

                <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full" />

                {shortRootCause && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-2">
                      POSSIBLE ROOT CAUSE
                    </p>
                    <p className="text-lg text-gray-600 font-serif italic leading-relaxed">
                      "{shortRootCause}"
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-end">
                <div className="text-xs font-medium text-gray-400 max-w-[70%]">
                  Shows medical and natural options side by side,
                  <br />
                  so you can ask better questions.
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-semibold text-gray-400">
                    Try it for yourself
                  </span>
                  <span className="text-xs font-bold text-gray-900">
                    remedyclear.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 bg-white space-y-3">
          {copied && (
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 flex items-center gap-2 animate-fade-in">
              <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span className="text-sm text-teal-800 font-medium">
                Copied! Paste it into a text, group chat, or post.
              </span>
            </div>
          )}

          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Share what you found
          </p>
          <p className="text-[11px] text-gray-500 text-center mb-1 leading-relaxed">
            Copy a short message to send to friends, or post directly to X or Facebook.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-2 text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy message to share
                </>
              )}
            </button>
            <button
              onClick={handleShareTwitter}
              className="p-3 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-100 transition-colors"
              aria-label="Share on X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              onClick={handleShareFacebook}
              className="p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors"
              aria-label="Share on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-2">
            X shares with a short message. Facebook shares the link only.
          </p>
        </div>
      </div>
    </div>
  );
};
