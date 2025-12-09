import { RecommendationResponse } from './types';

/**
 * Pre-formatted response examples for common health queries.
 *
 * These serve as:
 * - Fallback responses when AI is unavailable
 * - Testing data for UI development
 * - Examples to show the AI the desired format
 * - Quick responses for frequently searched symptoms
 */
export const RESPONSE_PRESETS: RecommendationResponse[] = [
  {
    symptom: "joint pain",

    summary:
      "Joint pain is common and often results from inflammation, overuse, stiffness, aging, or mild injury. Many people find relief by reducing inflammation, supporting joint mobility, and adjusting daily habits that strain the joints.",

    keyDifference:
      "Standard care focuses on reducing inflammation and pain, while holistic care emphasizes lowering total body inflammation, supporting joint tissues, and improving movement quality over time.",

    disclaimer:
      "This information is for educational purposes only and not medical advice. Seek medical care for severe swelling, fever, inability to bear weight, sudden weakness, or pain after major injury.",

    // -------------------------------
    // STANDARD MEDICAL VIEW
    // -------------------------------
    standardDiagnosis:
      "Common causes include osteoarthritis, tendon strain, ligament sprain, overuse injury, or mild inflammatory flare-ups.",

    standardExplanation:
      "From a medical standpoint, joint pain often occurs when the tissues around a joint become irritated or inflamed. This may come from repeated stress, cartilage wear, excess weight, or age-related changes. Standard treatment aims to decrease inflammation so the joint can move more comfortably and recover.",

    standardTreatments: [
      "Over-the-counter pain relievers such as acetaminophen or ibuprofen (used as directed)",
      "Heat or cold therapy depending on stiffness or swelling",
      "Resting the joint for short periods while keeping it gently mobile",
      "Physical therapy to improve strength, mobility, and joint mechanics",
      "Weight management and low-impact exercise routines",
    ],

    // -------------------------------
    // HOLISTIC VIEW
    // -------------------------------
    holisticRootCause:
      "Holistic practitioners often view joint pain as a sign of chronic inflammation, poor movement patterns, or nutrient gaps that affect joint tissues.",

    holisticExplanation:
      "The holistic perspective focuses on reducing inflammation throughout the body rather than only calming the painful joint. This often includes supporting gut health, improving circulation, adjusting dietary triggers, and using herbs or nutrients shown to help joint tissues. Movement quality and stress levels are also emphasized, as both can influence inflammation and muscle tension.",

    holisticProtocols: [
      "Adopting anti-inflammatory eating patterns (berries, leafy greens, turmeric, omega-3s)",
      "Gentle daily mobility exercises or yoga to improve joint lubrication",
      "Taking turmeric/curcumin or omega-3 supplements for inflammation support",
      "Focusing on sleep quality and stress-reduction habits to lower inflammatory load",
      "Using Epsom salt warm baths to soothe supporting tissues",
    ],

    // -------------------------------
    // PRODUCTS (matches your Product type)
    // -------------------------------
    products: [
      {
        id: "joint-turmeric-curcumin",
        name: "Turmeric Curcumin Supplement",
        category: "Holistic anti-inflammatory",
        inspiredBy: ["turmeric", "curcumin", "natural joint support"],
        benefitSummary:
          "Curcumin, the active compound in turmeric, may help support a healthy inflammatory response and reduce everyday joint stiffness.",
        usageNotes:
          "Look for a supplement with black pepper (piperine) for better absorption. Take with food. Avoid before surgery or if on blood thinners unless cleared by a doctor.",
        amazonSearchQuery:
          "turmeric curcumin with black pepper capsules joint inflammation",
        priority: 1,
        recommendedFor: "holistic",
      },
      {
        id: "joint-glucosamine-chondroitin",
        name: "Glucosamine & Chondroitin Complex",
        category: "Joint support supplement",
        inspiredBy: ["cartilage support", "joint comfort"],
        benefitSummary:
          "A common combination used to support cartilage and promote long-term joint comfort and flexibility.",
        usageNotes:
          "Often taken daily for several weeks before benefits appear. Avoid if you have shellfish allergies. Speak to a provider if diabetic or pregnant.",
        amazonSearchQuery:
          "glucosamine chondroitin msm complex for joint pain",
        priority: 2,
        recommendedFor: "both",
      },
      {
        id: "joint-topical-pain-cream",
        name: "Topical Pain Relief Cream or Gel",
        category: "Standard topical relief",
        inspiredBy: ["menthol cream", "topical NSAID", "fast relief"],
        benefitSummary:
          "Topical creams or gels can give quick, targeted relief by calming irritation around a sore joint.",
        usageNotes:
          "Apply to intact skin only. Wash hands after use. Do not stack multiple medicated creams unless advised by a clinician.",
        amazonSearchQuery:
          "topical pain relief cream gel arthritis joint",
        priority: 3,
        recommendedFor: "standard",
      },
      {
        id: "joint-hot-cold-pack",
        name: "Reusable Hot/Cold Gel Pack",
        category: "Supportive care tool",
        inspiredBy: ["heat therapy", "cold therapy"],
        benefitSummary:
          "Warmth can reduce stiffness, while cold can calm swelling—alternating can help some people find balance.",
        usageNotes:
          "Use a thin cloth barrier, limit sessions to around 15–20 minutes, and avoid falling asleep while using heat or cold.",
        amazonSearchQuery:
          "reusable hot cold gel pack for joint pain wrap",
        priority: 4,
        recommendedFor: "both",
      },
    ],
  },
];

/**
 * Helper function to find a preset response by symptom
 */
export function findPreset(symptom: string): RecommendationResponse | undefined {
  const normalized = symptom.toLowerCase().trim();
  return RESPONSE_PRESETS.find(preset =>
    preset.symptom.toLowerCase() === normalized
  );
}
