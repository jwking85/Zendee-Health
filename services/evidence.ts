// services/evidence.ts
export interface EvidenceLink {
  title: string;
  description: string;
  url: string;
  type: "clinical" | "review" | "article" | "guide";
}

export const evidenceBySymptom: Record<string, EvidenceLink[]> = {
  "joint pain": [
    {
      title: "Omega-3 fatty acids and inflammation",
      description: "Overview of how omega-3 intake may support inflammatory conditions.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3649719/",
      type: "review",
    },
    {
      title: "Exercise and arthritis",
      description: "Practical guidance on using movement and activity for joint health.",
      url: "https://www.arthritis.org/health-wellness/healthy-living/physical-activity",
      type: "article",
    },
  ],
  "trouble sleeping": [
    {
      title: "Sleep hygiene basics",
      description: "Simple sleep hygiene steps that support circadian rhythm and deeper sleep.",
      url: "https://www.sleepfoundation.org/sleep-hygiene",
      type: "guide",
    },
    {
      title: "Light exposure and circadian rhythm",
      description: "How morning sunlight and evening darkness support natural sleep cycles.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6751071/",
      type: "clinical",
    },
  ],
  "insomnia": [
    {
      title: "Sleep hygiene basics",
      description: "Simple sleep hygiene steps that support circadian rhythm and deeper sleep.",
      url: "https://www.sleepfoundation.org/sleep-hygiene",
      type: "guide",
    },
  ],
  "heartburn": [
    {
      title: "Diet and GERD management",
      description: "Evidence-based dietary approaches for managing reflux and heartburn.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6140167/",
      type: "review",
    },
  ],
  "constant heartburn": [
    {
      title: "Diet and GERD management",
      description: "Evidence-based dietary approaches for managing reflux and heartburn.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6140167/",
      type: "review",
    },
  ],
  "fatty liver": [
    {
      title: "Lifestyle interventions for NAFLD",
      description: "Research on diet, exercise, and weight loss for non-alcoholic fatty liver disease.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6887652/",
      type: "clinical",
    },
    {
      title: "Low-carb diets and liver health",
      description: "Studies examining carbohydrate restriction effects on hepatic fat.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6472268/",
      type: "review",
    },
  ],
  "chronic headaches": [
    {
      title: "Migraine and dietary triggers",
      description: "Research on common food triggers and elimination approaches.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7353802/",
      type: "review",
    },
    {
      title: "Magnesium for headache prevention",
      description: "Evidence for magnesium supplementation in migraine prophylaxis.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5786912/",
      type: "clinical",
    },
  ],
  "headaches": [
    {
      title: "Migraine and dietary triggers",
      description: "Research on common food triggers and elimination approaches.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7353802/",
      type: "review",
    },
  ],
  "fatigue": [
    {
      title: "Iron deficiency and fatigue",
      description: "Clinical guidance on testing and addressing iron-related fatigue.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5986027/",
      type: "clinical",
    },
    {
      title: "Sleep quality and daytime energy",
      description: "Connection between sleep architecture and persistent fatigue.",
      url: "https://www.sleepfoundation.org/physical-health/sleep-and-energy",
      type: "article",
    },
  ],
  "anxiety": [
    {
      title: "Exercise and anxiety reduction",
      description: "Meta-analysis of physical activity effects on anxiety symptoms.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6294644/",
      type: "review",
    },
    {
      title: "Magnesium and mental health",
      description: "Research on magnesium's role in anxiety and stress response.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5452159/",
      type: "clinical",
    },
  ],
  "depression": [
    {
      title: "Omega-3 fatty acids and depression",
      description: "Clinical evidence for omega-3 supplementation in mood disorders.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6087749/",
      type: "clinical",
    },
    {
      title: "Exercise as treatment for depression",
      description: "Systematic review of exercise interventions for depressive symptoms.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7146365/",
      type: "review",
    },
  ],
  "brain fog": [
    {
      title: "Cognitive function and metabolic health",
      description: "Links between insulin resistance, inflammation, and mental clarity.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6356942/",
      type: "review",
    },
  ],
};
