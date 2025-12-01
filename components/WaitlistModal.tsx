import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, Check } from 'lucide-react';

interface WaitlistModalProps {
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Store in local storage for persistence across reloads (mocking backend)
      const existing = JSON.parse(localStorage.getItem('waitlist_emails') || '[]');
      localStorage.setItem('waitlist_emails', JSON.stringify([...existing, email]));
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden relative border border-gray-100">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 text-center">
          <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-600">
            <Sparkles className="w-6 h-6" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Mode is Coming Soon</h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Get access to detailed protocols, specific amounts and product picks.
          </p>

          {status === 'success' ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center justify-center gap-2 animate-fade-in font-medium">
              <Check className="w-5 h-5" />
              You're on the list.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'submitting'}
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-200"
              >
                {status === 'submitting' ? 'Joining...' : 'Join List'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};