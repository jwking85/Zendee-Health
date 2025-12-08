/**
 * Maps item names to their real Amazon affiliate URLs.
 * Any item missing from this list will fall back to an Amazon search link.
 */

export const affiliateLinks: Record<string, string> = {
  "High-potency fish oil (high EPA/DHA)": "https://amzn.to/49YjJL7",
  "Curcumin with piperine supplement": "https://amzn.to/4rFnJGN",
  "Magnesium glycinate supplement": "https://amzn.to/48C8sOj",
  "Vitamin D3 supplement": "https://amzn.to/48zRAI5",
  "Hydrolyzed collagen peptides": "", // Add your affiliate link when ready

  // Legacy entries (kept for backward compatibility)
  "Magnesium glycinate": "https://amzn.to/48C8sOj",
  "Vitamin D3/K2 supplement": "https://amzn.to/48zRAI5",
  "High-quality fish oil": "https://amzn.to/49YjJL7",
  "Curcumin supplement": "https://amzn.to/4rFnJGN",
  "Organic Turmeric Root": "https://amzn.to/4rFnJGN"
};
