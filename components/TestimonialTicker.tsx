import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  "\"Finally understood my brain fog.\" — Anonymous",
  "\"My doctor never explained the root cause.\" — J.D.",
  "\"The protocols helped my energy.\" — Sarah M.",
  "\"Helped me ask better questions.\" — Michael R.",
  "\"I feel in control of my health.\" — Anonymous"
];

export const TestimonialTicker: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 mt-6 flex justify-center items-center">
      <p 
        className={`text-sm text-gray-400 font-medium italic transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        {TESTIMONIALS[index]}
      </p>
    </div>
  );
};