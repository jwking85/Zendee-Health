/**
 * Affiliate link resolution utility
 * Handles mapping product names to Amazon affiliate URLs with fallback search
 */

import { affiliateLinks } from "../../constants/affiliateLinks";

/**
 * Resolves a product name to an Amazon URL
 * - First checks for direct affiliate link match
 * - Falls back to Amazon search if no match found
 * - Includes Amazon Associates tag in fallback URLs
 *
 * @param productName - The product name from AI output
 * @returns Amazon URL (either affiliate link or search URL)
 */
export function resolveAffiliateUrl(productName: string): string {
  const name = String(productName).trim();

  // Check for direct affiliate link match
  const affiliateUrl = affiliateLinks[name];

  // If we have a direct affiliate link and it's not empty, use it
  if (affiliateUrl && affiliateUrl.length > 0) {
    return affiliateUrl;
  }

  // Fallback: Generate Amazon search URL with Associates tag
  // Note: Replace 'YOUR_ASSOCIATE_TAG' with your actual Amazon Associates tag
  const encodedQuery = encodeURIComponent(name);
  return `https://www.amazon.com/s?k=${encodedQuery}&tag=YOUR_ASSOCIATE_TAG`;
}
