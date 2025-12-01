import React, { useState } from 'react';
import { User, Check, X } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfilePromptProps {
  onSave: (profile: UserProfile) => void;
  onSkip: () => void;
}

export const ProfilePrompt: React.FC<ProfilePromptProps> = ({ onSave, onSkip }) => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>({
    ageRange: '',
    conditions: [],
    diet: ''
  });

  const ageRanges = ['20s', '30s', '40s', '50s', '60s+'];
  const conditionsList = ['None', 'Diabetes', 'Thyroid', 'Autoimmune', 'Heart Health', 'Pregnancy', 'PCOS'];
  const diets = ['Standard', 'Keto/Low Carb', 'Vegetarian/Vegan', 'Paleo', 'Gluten Free'];

  const toggleCondition = (c: string) => {
    if (c === 'None') {
      setProfile({ ...profile, conditions: ['None'] });
      return;
    }
    const newConditions = profile.conditions.includes(c)
      ? profile.conditions.filter(i => i !== c)
      : [...profile.conditions.filter(i => i !== 'None'), c];
    setProfile({ ...profile, conditions: newConditions });
  };

  const handleSave = () => {
    onSave(profile);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-slide-up">
        <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-500 text-white flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <User className="w-5 h-5" /> Personalize Results
            </h3>
            <p className="text-teal-100 text-sm mt-1">Get safety checks and custom protocols.</p>
          </div>
          <button onClick={onSkip} className="text-teal-200 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Age Section */}
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Age</label>
            <div className="flex flex-wrap gap-2">
              {ageRanges.map(age => (
                <button
                  key={age}
                  onClick={() => setProfile({ ...profile, ageRange: age })}
                  className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                    profile.ageRange === age 
                      ? 'bg-teal-50 border-teal-500 text-teal-700 ring-1 ring-teal-500' 
                      : 'bg-white border-gray-200 text-gray-600 hover:border-teal-200'
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>

          {/* Conditions Section */}
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Conditions</label>
            <div className="flex flex-wrap gap-2">
              {conditionsList.map(c => (
                <button
                  key={c}
                  onClick={() => toggleCondition(c)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all ${
                    profile.conditions.includes(c)
                      ? 'bg-amber-50 border-amber-500 text-amber-700 ring-1 ring-amber-500'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-amber-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Diet Section */}
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Diet</label>
            <div className="flex flex-wrap gap-2">
              {diets.map(d => (
                <button
                  key={d}
                  onClick={() => setProfile({ ...profile, diet: d })}
                  className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all ${
                    profile.diet === d
                      ? 'bg-teal-50 border-teal-500 text-teal-700 ring-1 ring-teal-500'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-teal-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={!profile.ageRange || !profile.diet || profile.conditions.length === 0}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Save Profile <Check className="w-4 h-4" />
          </button>
          
          <button onClick={onSkip} className="w-full text-center text-sm text-gray-400 hover:text-gray-600">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};