/**
 * Google Analytics 4 Integration
 * Comprehensive GA4 setup with extensive debugging and realtime tracking
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let isInitialized = false;
const DEBUG = import.meta.env.DEV; // Automatically true in dev, false in production

/**
 * Log helper for analytics debugging
 */
const log = (message: string, data?: unknown) => {
  if (DEBUG) {
    if (data !== undefined) {
      console.log(`%c[GA4] ${message}`, 'color: #4285f4; font-weight: bold;', data);
    } else {
      console.log(`%c[GA4] ${message}`, 'color: #4285f4; font-weight: bold;');
    }
  }
};

/**
 * Initialize Google Analytics 4
 * Call this ONCE on app startup, before rendering React
 */
export const initAnalytics = (): void => {
  log('🚀 Attempting to initialize GA4...');

  // Prevent double initialization
  if (isInitialized) {
    log('⚠️ Already initialized, skipping');
    return;
  }

  // Get measurement ID from environment
  const GA_ID = import.meta.env.VITE_GA_ID;

  log('Environment check:', {
    VITE_GA_ID: GA_ID,
    allEnvVars: import.meta.env,
  });

  // Validate measurement ID
  if (!GA_ID) {
    console.error(
      '%c[GA4] ❌ CRITICAL: VITE_GA_ID not found in environment variables!',
      'color: red; font-weight: bold;'
    );
    console.error('[GA4] Make sure .env.local contains: VITE_GA_ID=G-C493RSS5ZE');
    console.error('[GA4] Restart dev server after adding environment variables');
    return;
  }

  if (!GA_ID.startsWith('G-')) {
    console.error(
      `%c[GA4] ❌ Invalid measurement ID format: ${GA_ID}`,
      'color: red; font-weight: bold;'
    );
    console.error('[GA4] Expected format: G-XXXXXXXXXX');
    return;
  }

  log('✅ Valid measurement ID found:', GA_ID);

  // Initialize dataLayer BEFORE loading script
  window.dataLayer = window.dataLayer || [];

  // Define gtag function
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };

  log('✅ dataLayer and gtag initialized');

  // Set initial timestamp
  window.gtag('js', new Date());

  // Create and inject GA4 script
  log('📥 Loading GA4 script from googletagmanager.com...');

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

  // Listen for script load
  script.onload = () => {
    log('✅ GA4 script loaded successfully');
    log('📡 Script URL:', script.src);
  };

  script.onerror = (error) => {
    console.error(
      '%c[GA4] ❌ Failed to load GA4 script',
      'color: red; font-weight: bold;',
      error
    );
  };

  // Inject script into <head>
  document.head.appendChild(script);
  log('✅ Script tag injected into <head>');

  // Configure GA4 with your measurement ID
  log('⚙️ Configuring GA4 with measurement ID:', GA_ID);

  window.gtag('config', GA_ID, {
    send_page_view: true,
    debug_mode: DEBUG,
  });

  log('✅ GA4 config sent');

  // Send test event to verify connection
  window.gtag('event', 'ga4_initialized', {
    event_category: 'system',
    event_label: 'GA4 successfully initialized',
    value: 1,
  });

  log('✅ Test event "ga4_initialized" sent');

  isInitialized = true;

  console.log(
    '%c[GA4] 🎉 INITIALIZATION COMPLETE',
    'color: #0f9d58; font-weight: bold; font-size: 14px;'
  );
  console.log(
    '%c[GA4] 👀 Check Realtime report: https://analytics.google.com/analytics/web/#/p471471820/realtime/overview',
    'color: #0f9d58; font-weight: bold;'
  );
};

/**
 * Track custom events in GA4
 *
 * @param eventName - Name of the event (e.g., "symptom_search")
 * @param eventParams - Optional parameters for the event
 *
 * @example
 * trackEvent("symptom_search", { symptom: "joint pain", has_profile: true });
 * trackEvent("button_click", { button_name: "share_results" });
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>): void => {
  if (!window.gtag) {
    console.warn(
      '%c[GA4] ⚠️ gtag not initialized. Event not tracked:',
      'color: orange;',
      eventName,
      eventParams
    );
    return;
  }

  window.gtag('event', eventName, eventParams);

  log('📊 Event tracked:', {
    event: eventName,
    params: eventParams,
  });
};

/**
 * Track page views manually
 * (Automatic page views are enabled by default)
 *
 * @param pagePath - Path of the page (e.g., "/results")
 * @param pageTitle - Optional title of the page
 */
export const trackPageView = (pagePath: string, pageTitle?: string): void => {
  if (!window.gtag) {
    console.warn('[GA4] ⚠️ gtag not initialized. Page view not tracked:', pagePath);
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  });

  log('📄 Page view tracked:', { path: pagePath, title: pageTitle });
};

/**
 * Set user properties in GA4
 *
 * @param properties - User properties to set
 *
 * @example
 * setUserProperties({ user_type: "pro", subscription_status: "active" });
 */
export const setUserProperties = (properties: Record<string, unknown>): void => {
  if (!window.gtag) {
    console.warn('[GA4] ⚠️ gtag not initialized. User properties not set');
    return;
  }

  window.gtag('set', 'user_properties', properties);

  log('👤 User properties set:', properties);
};

/**
 * Check if GA4 is initialized and ready
 */
export const isAnalyticsReady = (): boolean => {
  return isInitialized && !!window.gtag;
};

/**
 * Lightweight tracking helper for Remedy Clear events
 * Safe wrapper that no-ops if analytics isn't available
 *
 * @param eventName - Event name (e.g., "rc_search_submitted")
 * @param params - Optional event parameters
 */
export const track = (eventName: string, params?: Record<string, unknown>): void => {
  // Safe no-op if gtag not available
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  // Use existing trackEvent function
  trackEvent(eventName, params);
};
