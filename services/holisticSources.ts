// services/holisticSources.ts

export type HolisticInfluenceId =
  | "metabolic_biohacking"      // Brecka / 10X-style methylation, oxygen, light
  | "healthy_keto_if"           // Berg-style keto + intermittent fasting
  | "clinical_keto_protocols"   // Dr. Boz-style stepwise keto
  | "metabolic_insulin_rootcause" // Ben Bikman insulin focus
  | "functional_nutrition_gut"  // Josh Axe-style gut & functional medicine
  | "brain_imaging_psychiatry"  // Amen-style brain-first psychiatry
  | "neuro_behavioral_tools"    // Huberman-style light, sleep, stress tools
  | "medical_herbalism"         // Simon Mills-style herbal medicine
  | "oncology_immunotherapy";   // Soon-Shiong-style oncology lens

export interface HolisticInfluence {
  id: HolisticInfluenceId;
  internalLabel: string;      // internal only, never rendered in UI
  summary: string;
  coreThemes: string[];
  safePatterns: string[];
  cautionNotes: string[];
}

export const HOLISTIC_INFLUENCES: HolisticInfluence[] = [
  {
    id: "metabolic_biohacking",
    internalLabel: "Brekka / 10X-style methylation & performance",
    summary:
      "Focuses on methylation genetics, oxygen delivery, and light exposure to support energy and recovery, often using lab testing plus lifestyle changes.",
    coreThemes: [
      "support methylation with B vitamins, folate-rich foods, and minimizing alcohol and smoking",
      "optimize oxygen delivery with fitness, breathing, and cardiovascular conditioning",
      "use light exposure (morning sunlight, limiting bright light at night) to support circadian rhythm"
    ],
    safePatterns: [
      "emphasize blood work and working with qualified clinicians for advanced interventions",
      "prioritize sustainable lifestyle changes before gadgets",
      "focus on nutrient-dense foods rather than aggressive supplement stacks"
    ],
    cautionNotes: [
      "avoid strong claims that any protocol can hack aging or guarantee results",
      "avoid promoting expensive devices or tests as mandatory",
      "always remind users that genetics-guided protocols require professional oversight"
    ]
  },
  {
    id: "healthy_keto_if",
    internalLabel: "Berg-style Healthy Keto & intermittent fasting",
    summary:
      "Emphasizes low refined carbs, higher healthy fats, adequate protein, and time-restricted eating to improve metabolic markers.",
    coreThemes: [
      "limit sugar and refined carbs, focus on whole-food sources",
      "pair higher protein and healthy fats with plenty of non-starchy vegetables",
      "use gentle time-restricted eating if appropriate and tolerated"
    ],
    safePatterns: [
      "suggest gradual carb reduction instead of sudden extreme restriction",
      "encourage medical supervision for people with diabetes, pregnancy, or complex meds",
      "highlight electrolytes, hydration, and adequate salt when lowering carbs"
    ],
    cautionNotes: [
      "do not present keto as a cure-all for every condition",
      "flag higher-risk users (e.g. eating disorders, pregnancy) for in-person care",
      "avoid demonizing entire food groups like all fruit or all whole grains"
    ]
  },
  {
    id: "clinical_keto_protocols",
    internalLabel: "Dr. Boz-style clinical keto & fasting",
    summary:
      "Uses structured keto and periodic fasting to reverse insulin resistance and metabolic disease, often with metrics like glucose-ketone ratios.",
    coreThemes: [
      "prioritize stabilizing blood sugar and insulin through carb control",
      "use periodic fasting blocks only when medically appropriate",
      "track objective markers (labs, weight, waist, symptoms) over time"
    ],
    safePatterns: [
      "frame fasting as optional and best done with clinician guidance",
      "recommend gradual progression (12h → 14h fasts) instead of long fasts right away",
      "remind users to never stop prescribed medications without their prescriber"
    ],
    cautionNotes: [
      "avoid suggesting prolonged fasting for vulnerable users without supervision",
      "do not imply keto alone can replace cancer or psychiatric treatments",
      "encourage frequent check-ins with professionals for medication adjustments"
    ]
  },
  {
    id: "metabolic_insulin_rootcause",
    internalLabel: "Ben Bikman-style insulin resistance focus",
    summary:
      "Treats insulin resistance as a major root cause of many chronic diseases, targeted with diet, movement, sleep, and stress work.",
    coreThemes: [
      "limit refined carbs and sugars that spike insulin",
      "emphasize protein and healthy fats in meals",
      "prioritize sleep, stress reduction, and regular movement as metabolic levers"
    ],
    safePatterns: [
      "recommend lab testing (fasting glucose, insulin, A1c, lipids) with a clinician",
      "encourage sustainable eating patterns rather than crash diets",
      "support gradual weight loss instead of rapid extreme changes"
    ],
    cautionNotes: [
      "avoid claiming insulin resistance is the only cause of every disease",
      "avoid suggesting keto/high-fat diets for everyone regardless of history",
      "remind users that medication may still be necessary and helpful"
    ]
  },
  {
    id: "functional_nutrition_gut",
    internalLabel: "Josh Axe-style functional medicine & gut health",
    summary:
      "Highlights gut health, traditional foods, and targeted supplements to support digestion, immunity, and inflammation.",
    coreThemes: [
      "use whole, minimally processed foods as the foundation",
      "support gut health with fiber, fermented foods if tolerated, and diverse plants",
      "consider targeted supplements like collagen or probiotics where appropriate"
    ],
    safePatterns: [
      "encourage elimination of ultra-processed foods and added sugars",
      "suggest simple home-cooked meals over complicated protocols",
      "recommend working with a professional before high-dose supplements"
    ],
    cautionNotes: [
      "avoid implying any one food or supplement will cure complex diseases",
      "flag people with severe GI symptoms for in-person evaluation",
      "avoid telling users to stop prescribed GI meds without supervision"
    ]
  },
  {
    id: "brain_imaging_psychiatry",
    internalLabel: "Amen-style brain-imaging-informed psychiatry",
    summary:
      "Frames mental health issues as brain health issues, blending lifestyle, supplements, therapy, and sometimes imaging-guided care.",
    coreThemes: [
      "view mood and behavior through a brain-health lens",
      "combine therapy, lifestyle, and sometimes medication, not either/or",
      "use sleep, diet, and exercise as pillars for brain function"
    ],
    safePatterns: [
      "encourage users to work with licensed mental health professionals",
      "emphasize consistency with therapy and follow-ups",
      "mention imaging only as optional, clinician-led"
    ],
    cautionNotes: [
      "avoid suggesting imaging as a substitute for proper psychiatric evaluation",
      "do not encourage self-diagnosis based on online content",
      "never advise changing psychiatric meds without prescriber support"
    ]
  },
  {
    id: "neuro_behavioral_tools",
    internalLabel: "Huberman-style neuroscience & behavioral tools",
    summary:
      "Uses neuroscience-based tools (light timing, breathing, cold, focus) to support sleep, stress, and performance.",
    coreThemes: [
      "morning sunlight and dim lights at night to anchor circadian rhythm",
      "wind-down routines and temperature control for better sleep",
      "breathing tools and brief movement snacks to manage stress"
    ],
    safePatterns: [
      "prioritize low-risk, behavioral tools users can try at home",
      "present cold exposure and intense protocols as optional, with warnings",
      "remind users that severe insomnia or mental health issues need in-person care"
    ],
    cautionNotes: [
      "avoid extreme recommendations for cold or breath-holds in high-risk users",
      "avoid claiming specific protocols cure psychiatric or neurological diseases",
      "encourage medical clearance before intense protocols in heart/lung disease"
    ]
  },
  {
    id: "medical_herbalism",
    internalLabel: "Simon Mills-style evidence-aware herbal medicine",
    summary:
      "Combines traditional herbal knowledge with modern research, focusing on whole plants, gentle self-care, and collaboration with conventional care.",
    coreThemes: [
      "use herbs as supportive tools, not replacements for critical medical care",
      "prefer well-known herbs with clearer safety profiles",
      "emphasize self-care, stress reduction, and long-term balance"
    ],
    safePatterns: [
      "suggest low-dose teas and tinctures over aggressive regimens",
      "encourage checking drug–herb interactions with a practitioner",
      "highlight that children, pregnancy, and complex illness need extra caution"
    ],
    cautionNotes: [
      "avoid recommending obscure or risky herbs without strong evidence",
      "never suggest herbs alone in place of proven treatment for serious disease",
      "remind users to inform their doctors about herbal use"
    ]
  },
  {
    id: "oncology_immunotherapy",
    internalLabel: "Soon-Shiong-style oncology & immunotherapy lens",
    summary:
      "Recognizes that in cancer and serious disease, advanced therapies are often needed, with holistic care used to support resilience.",
    coreThemes: [
      "reinforce that serious conditions like cancer require specialist care",
      "use nutrition, movement, and stress work to support resilience",
      "view the immune system as a partner to, not replacement for, treatment"
    ],
    safePatterns: [
      "always encourage following oncology treatment plans",
      "offer holistic tools (sleep, gentle activity, support networks) as add-ons",
      "acknowledge side effects and the value of symptom management"
    ],
    cautionNotes: [
      "never suggest stopping or delaying evidence-based cancer treatment",
      "avoid describing any lifestyle protocol as a cure for cancer",
      "encourage second opinions within oncology if users feel unsure"
    ]
  }
];

/**
 * Plain-text philosophy that gets injected into AI prompts.
 * No names, just the "RemedyClear holistic brain".
 */
export function buildHolisticContext(symptom: string): string {
  const lines: string[] = [];
  const lowerSymptom = symptom.toLowerCase();

  // Categorize symptom type for tailored context
  const isMetabolic = /joint|pain|weight|fatigue|energy|fatty liver|diabetes|insulin|blood sugar|cholesterol|high blood pressure|hypertension|metabolic|inflammation/i.test(symptom);
  const isMoodSleep = /sleep|insomnia|anxiety|depression|mood|stress|panic|mental|brain fog|focus|adhd|psychiatric/i.test(symptom);
  const isDigestive = /heartburn|reflux|gerd|bloat|constipation|diarrhea|ibs|gut|stomach|digest|nausea/i.test(symptom);

  lines.push(
    `The holistic perspective used here is influenced by metabolic health, structured low-carb and ketogenic nutrition, functional medicine and gut health, evidence-aware herbal medicine, neuroscience-based behavior tools, brain-focused psychiatry, and oncology that respects conventional treatment while supporting the whole person.`
  );

  lines.push(
    `General rules: focus on root causes like blood sugar, inflammation, stress, sleep, gut health, and environment. Prefer gentle, sustainable changes over extreme quick fixes. Use food quality, movement, sleep, stress work, and simple supplements as first-line tools.`
  );

  // Add symptom-specific guidance
  if (isMetabolic) {
    lines.push(
      `For metabolic symptoms: Pay special attention to insulin resistance as a potential root cause. Consider the impact of refined carbohydrates and ultra-processed foods on blood sugar stability. Emphasize sustainable carb reduction, adequate protein, healthy fats, and regular movement. Support metabolic function through sleep quality, stress management, and periodic fasting if appropriate and supervised.`
    );
  }

  if (isMoodSleep) {
    lines.push(
      `For mood, sleep, and brain-related symptoms: Prioritize circadian rhythm support with morning sunlight exposure and evening light reduction. Consider the brain-health lens: view symptoms through the connection between lifestyle, neurotransmitters, and brain function. Emphasize sleep hygiene, stress-reduction tools like breathing exercises, gentle movement, and targeted nutrients that support nervous system function. Always encourage working with mental health professionals for comprehensive care.`
    );
  }

  if (isDigestive) {
    lines.push(
      `For digestive symptoms: Focus on gut health as a foundation. Consider food sensitivities, the impact of ultra-processed foods, and the role of gut microbiome. Emphasize whole foods, adequate fiber from vegetables, potential benefits of fermented foods if tolerated, and identifying trigger foods. Support digestive function through stress management and mindful eating practices.`
    );
  }

  lines.push(
    `Critical safety rule: holistic suggestions are meant to work alongside, not instead of, appropriate medical care. Do not recommend avoiding or delaying urgent evaluation for red-flag symptoms or stopping prescribed treatments.`
  );

  lines.push(
    `Emphasize: lower refined sugar and ultra-processed foods, better sleep and circadian rhythm habits, regular movement, stress-reduction practices, simple herbal and nutritional support, and collaboration with qualified clinicians.`
  );

  return lines.join("\n\n");
}
