import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initAnalytics } from './src/lib/analytics';

// ===================================================
// INITIALIZE GOOGLE ANALYTICS 4 BEFORE REACT RENDERS
// ===================================================
console.log('%c[APP] 🚀 Starting RemedyClear application...', 'color: #2AB3A5; font-weight: bold;');

// Initialize GA4 tracking
initAnalytics();

console.log('%c[APP] ✅ Analytics setup complete, mounting React app...', 'color: #2AB3A5; font-weight: bold;');

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('%c[APP] ✅ React app mounted successfully', 'color: #2AB3A5; font-weight: bold;');