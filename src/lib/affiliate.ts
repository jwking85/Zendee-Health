// src/lib/affiliate.ts
// Unified Amazon affiliate resolver with hardcoded fallback to remedyclear-20

import { affiliateLinks } from "./affiliateLinks";

// CRITICAL: Always fallback to "remedyclear-20" if env var is missing or empty
const ASSOC_TAG =
  import.meta.env.VITE_AMAZON_ASSOC_TAG && import.meta.env.VITE_AMAZON_ASSOC_TAG.trim().length > 0
    ? import.meta.env.VITE_AMAZON_ASSOC_TAG.trim()
    : "remedyclear-20";

/**
 * Builds an Amazon search URL with our associate tag.
 * @param query - The search term
 * @returns Full Amazon search URL with tag parameter
 */
export const buildAmazonSearchUrl = (query: string): string => {
  const trimmed = (query || "").trim();
  const params = new URLSearchParams({
    k: trimmed || "health supplement"
  });

  // Always include the associate tag
  if (ASSOC_TAG) {
    params.set("tag", ASSOC_TAG);
  }

  return `https://www.amazon.com/s?${params.toString()}`;
};

/**
 * Resolves an item name to either:
 * 1) A direct amzn.to affiliate link (if we have one), OR
 * 2) An Amazon search URL with our associate tag
 *
 * @param itemName - The product/supplement name
 * @returns A fully qualified Amazon URL with affiliate tracking
 */
export const resolveAffiliateUrl = (itemName: string): string => {
  if (!itemName) return buildAmazonSearchUrl("");

  const key = String(itemName).trim();
  const directLink = affiliateLinks[key];

  // If we have a direct amzn.to link, use it
  if (directLink && directLink.trim().length > 0) {
    return directLink.trim();
  }

  // Otherwise, fall back to a tagged Amazon search
  return buildAmazonSearchUrl(key);
};
