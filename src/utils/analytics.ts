// src/utils/analytics.ts

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const trackAmazonClick = (params: {
  guideSlug: string;
  productName: string;
  amazonQuery: string;
}) => {
  if (typeof window === 'undefined') return;

  const { guideSlug, productName, amazonQuery } = params;

  // GA4 via gtag.js
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'amazon_product_click', {
      event_category: 'affiliate',
      event_label: `${guideSlug} | ${productName}`,
      guide_slug: guideSlug,
      product_name: productName,
      amazon_query: amazonQuery,
    });
  } else if (Array.isArray(window.dataLayer)) {
    // If you're using GTM instead of direct gtag
    window.dataLayer.push({
      event: 'amazon_product_click',
      guide_slug: guideSlug,
      product_name: productName,
      amazon_query: amazonQuery,
    });
  }
};
