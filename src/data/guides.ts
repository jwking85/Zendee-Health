import { GuideData } from '../components/GuidePageTemplate';

export const GUIDES: Record<string, GuideData> = {
  'joint-pain': {
    slug: 'joint-pain',
    title: 'Joint Pain: Holistic & Medical Approaches',
    metaDescription: 'Compare medical and natural approaches to joint pain relief. Learn about inflammation causes, holistic protocols, and evidence-based options.',
    heroIntro: 'Joint pain is common and often results from inflammation, overuse, or wear and tear. Standard medicine typically focuses on symptom relief. Holistic approaches look deeper, asking what\'s causing the inflammation in the first place.',
    medicalPerspective: {
      title: 'Standard Medical View',
      content: 'Doctors usually treat joint pain by reducing inflammation and managing discomfort. This might include over-the-counter pain relievers, prescription anti-inflammatories, or physical therapy.',
      items: [
        'NSAIDs like ibuprofen or naproxen',
        'Prescription painkillers for severe cases',
        'Corticosteroid injections',
        'Physical therapy to strengthen muscles around the joint',
        'In advanced cases, surgery (joint replacement)'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners view joint pain as a sign of deeper imbalances. Chronic inflammation often points to issues like poor gut health, food sensitivities, nutrient deficiencies, or oxidative stress.',
      items: [
        'Anti-inflammatory diet (less sugar, processed foods)',
        'Omega-3 fatty acids to reduce inflammation',
        'Turmeric, ginger, and other natural anti-inflammatories',
        'Gut healing protocols (inflammation often starts in the digestive system)',
        'Movement therapies like yoga or tai chi',
        'Stress management (cortisol can worsen inflammation)'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Relief Options',
      items: [
        {
          name: 'Turmeric (Curcumin)',
          description: 'A powerful anti-inflammatory compound. Many people take turmeric supplements with black pepper (which helps absorption) to reduce joint pain naturally.',
          amazonFriendly: true,
          amazonQuery: 'turmeric curcumin black pepper supplement',
          isTopPick: true
        },
        {
          name: 'Omega-3 Fatty Acids',
          description: 'Found in fish oil or algae oil. Omega-3s help lower inflammation throughout the body, including in joints.',
          amazonFriendly: true,
          amazonQuery: 'omega 3 fish oil high EPA DHA'
        },
        {
          name: 'Bone Broth',
          description: 'Rich in collagen and amino acids like glycine and proline, which support joint health and reduce inflammation.',
          amazonFriendly: true,
          amazonQuery: 'bone broth powder grass fed'
        },
        {
          name: 'Magnesium',
          description: 'Supports muscle relaxation and can ease tension around painful joints. Found in leafy greens, nuts, and supplements.',
          amazonFriendly: true,
          amazonQuery: 'magnesium glycinate supplement'
        },
        {
          name: 'Anti-Inflammatory Diet',
          description: 'Reducing processed foods, sugar, and refined oils while adding more vegetables, healthy fats, and whole foods can significantly reduce joint inflammation.'
        },
        {
          name: 'Movement & Stretching',
          description: 'Gentle yoga, swimming, or walking keeps joints mobile without adding stress. Lack of movement can actually worsen stiffness.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Options',
      content: 'If natural approaches aren\'t enough, or if your joint pain is severe, medical treatments can offer relief:',
      items: [
        'NSAIDs (ibuprofen, naproxen) for pain and inflammation',
        'Corticosteroid injections for targeted relief',
        'Physical therapy to strengthen supporting muscles',
        'Prescription medications for chronic conditions like rheumatoid arthritis',
        'Surgery (joint replacement or repair) in advanced cases'
      ]
    },
    ctaText: 'Want to see medical and holistic options side by side for your joint pain?'
  },

  'acid-reflux': {
    slug: 'acid-reflux',
    title: 'Acid Reflux & GERD: Medical vs. Holistic Relief',
    metaDescription: 'Compare medical treatments and natural approaches for acid reflux and GERD. Learn about root causes, diet changes, and effective relief strategies.',
    heroIntro: 'Acid reflux happens when stomach acid backs up into your esophagus, causing heartburn and discomfort. Standard care typically focuses on reducing acid production. Holistic approaches ask why your digestion isn\'t working properly in the first place.',
    medicalPerspective: {
      title: 'Standard Medical Treatment',
      content: 'Doctors usually prescribe medications to reduce stomach acid or protect the esophagus lining. These can provide quick relief but don\'t address underlying digestive issues.',
      items: [
        'Antacids (Tums, Rolaids) for immediate relief',
        'H2 blockers (famotidine) to reduce acid production',
        'Proton pump inhibitors (PPIs like omeprazole) for severe cases',
        'In rare cases, surgery to strengthen the lower esophageal sphincter'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners often find that acid reflux is caused by too little stomach acid, not too much. Low stomach acid can lead to poor digestion, allowing food to sit too long and create pressure that pushes acid upward.',
      items: [
        'Testing and addressing low stomach acid (hypochlorhydria)',
        'Improving gut microbiome balance',
        'Identifying food triggers (dairy, gluten, spicy foods)',
        'Supporting digestive enzymes',
        'Addressing stress (which affects digestion)',
        'Eating smaller, slower meals'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Relief Options',
      items: [
        {
          name: 'Apple Cider Vinegar',
          description: 'A tablespoon diluted in water before meals can help increase stomach acid and improve digestion for some people.',
          amazonFriendly: true,
          amazonQuery: 'organic apple cider vinegar with mother'
        },
        {
          name: 'Digestive Enzymes',
          description: 'Supplements containing enzymes like pepsin and betaine HCl can support proper breakdown of food and reduce reflux.',
          amazonFriendly: true,
          amazonQuery: 'digestive enzymes supplement acid reflux'
        },
        {
          name: 'Probiotics',
          description: 'Healthy gut bacteria support digestion and can reduce symptoms of reflux by improving overall gut function.',
          amazonFriendly: true,
          amazonQuery: 'probiotic for gut health acid reflux'
        },
        {
          name: 'Ginger',
          description: 'A natural digestive aid that can soothe the stomach and reduce inflammation in the esophagus.',
          amazonFriendly: true,
          amazonQuery: 'ginger capsules digestion nausea'
        },
        {
          name: 'Dietary Changes',
          description: 'Avoiding trigger foods (spicy, acidic, fried), eating smaller meals, and not lying down right after eating can significantly reduce symptoms.'
        },
        {
          name: 'Elevate Your Head',
          description: 'Sleeping with your head elevated 6-8 inches helps prevent acid from traveling up the esophagus at night.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Options',
      content: 'If natural approaches aren\'t providing relief, medical treatments can help manage symptoms:',
      items: [
        'Antacids for quick, short-term relief',
        'H2 blockers to reduce acid production',
        'PPIs (proton pump inhibitors) for chronic or severe GERD',
        'Medications to strengthen the lower esophageal sphincter',
        'Surgery (fundoplication) in severe, medication-resistant cases'
      ]
    },
    ctaText: 'Want personalized recommendations for managing your acid reflux?'
  },

  'anxiety': {
    slug: 'anxiety',
    title: 'Anxiety: Medical Treatments & Natural Approaches',
    metaDescription: 'Compare medication-based treatments and holistic approaches for anxiety. Learn about root causes, natural remedies, and effective coping strategies.',
    heroIntro: 'Anxiety is your body\'s response to stress or perceived threats. Standard medicine often treats it with medications that calm the nervous system. Holistic approaches look at underlying imbalances like blood sugar, nutrient deficiencies, and nervous system dysregulation.',
    medicalPerspective: {
      title: 'Standard Medical Treatment',
      content: 'Doctors typically prescribe medications to manage anxiety symptoms, often combined with therapy. These can be effective for severe cases but may come with side effects.',
      items: [
        'SSRIs (selective serotonin reuptake inhibitors) like sertraline or escitalopram',
        'Benzodiazepines (Xanax, Ativan) for short-term relief',
        'Beta-blockers to manage physical symptoms (rapid heartbeat)',
        'Cognitive behavioral therapy (CBT)',
        'In some cases, buspirone or other anti-anxiety medications'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners view anxiety as a sign of nervous system imbalance. Common root causes include blood sugar swings, nutrient deficiencies (especially magnesium and B vitamins), gut dysbiosis, and chronic stress.',
      items: [
        'Balancing blood sugar (protein with every meal, reducing refined carbs)',
        'Supporting magnesium levels (calms the nervous system)',
        'Gut health optimization (gut-brain axis connection)',
        'Adaptogenic herbs to regulate stress response',
        'Breathwork and vagus nerve exercises',
        'Regular movement (exercise reduces anxiety hormones)'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Relief Options',
      items: [
        {
          name: 'Magnesium',
          description: 'Known as the "relaxation mineral." Many people with anxiety are deficient. Magnesium glycinate is a well-absorbed form.',
          amazonFriendly: true,
          amazonQuery: 'magnesium glycinate supplement relaxation',
          isTopPick: true
        },
        {
          name: 'Ashwagandha',
          description: 'An adaptogenic herb that helps the body manage stress and has been shown to reduce anxiety in studies.',
          amazonFriendly: true,
          amazonQuery: 'ashwagandha root extract stress relief'
        },
        {
          name: 'L-Theanine',
          description: 'An amino acid found in green tea that promotes relaxation without drowsiness. Often taken as a supplement.',
          amazonFriendly: true,
          amazonQuery: 'l theanine capsules calm focus'
        },
        {
          name: 'B-Complex Vitamins',
          description: 'Essential for nervous system health and neurotransmitter production. Deficiencies can worsen anxiety.',
          amazonFriendly: true,
          amazonQuery: 'vitamin b complex stress support'
        },
        {
          name: 'Breathwork & Meditation',
          description: 'Simple breathing exercises (like box breathing) activate the parasympathetic nervous system and calm anxiety in real time.'
        },
        {
          name: 'Blood Sugar Balance',
          description: 'Eating protein and fat with meals, avoiding sugar spikes, and not skipping meals can dramatically reduce anxiety symptoms.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Options',
      content: 'When natural approaches aren\'t enough, medical treatments can provide relief:',
      items: [
        'SSRIs or SNRIs for long-term management',
        'Benzodiazepines for acute anxiety (short-term use)',
        'Beta-blockers for physical symptoms',
        'Cognitive behavioral therapy (CBT) or other talk therapy',
        'Combination of medication and therapy for severe cases'
      ]
    },
    ctaText: 'Want to explore both medical and natural options for managing your anxiety?'
  },

  'insomnia': {
    slug: 'insomnia',
    title: 'Sleep Problems & Insomnia: Medical vs. Natural Solutions',
    metaDescription: 'Compare medical treatments and holistic approaches for insomnia and sleep problems. Learn about root causes, sleep hygiene, and effective remedies.',
    heroIntro: 'Insomnia and poor sleep are incredibly common. Standard medicine often turns to sedatives or sleep aids. Holistic approaches look at factors like stress, blood sugar, light exposure, and hormonal balance that affect your natural sleep-wake cycle.',
    medicalPerspective: {
      title: 'Standard Medical Treatment',
      content: 'Doctors may prescribe sleep medications to help you fall asleep or stay asleep. These can be helpful short-term but often don\'t address the underlying causes.',
      items: [
        'Prescription sleep aids (Ambien, Lunesta)',
        'Benzodiazepines for anxiety-related insomnia',
        'Over-the-counter options like diphenhydramine (Benadryl)',
        'Melatonin supplements (also used in natural approaches)',
        'Cognitive behavioral therapy for insomnia (CBT-I)'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners investigate why your body isn\'t producing natural sleep hormones or winding down properly. Common issues include circadian rhythm disruption, blood sugar crashes at night, magnesium deficiency, and stress hormone imbalances.',
      items: [
        'Supporting natural melatonin production (reducing blue light at night)',
        'Balancing blood sugar to prevent nighttime waking',
        'Magnesium supplementation (relaxes muscles and nervous system)',
        'Addressing cortisol dysregulation',
        'Optimizing sleep environment (dark, cool, quiet)',
        'Regular sleep-wake schedule to reset circadian rhythm'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Relief Options',
      items: [
        {
          name: 'Magnesium Glycinate',
          description: 'Taken before bed, magnesium helps relax the nervous system and muscles, promoting deeper sleep.',
          amazonFriendly: true,
          amazonQuery: 'magnesium glycinate sleep supplement',
          isTopPick: true
        },
        {
          name: 'Melatonin',
          description: 'A natural sleep hormone. Low doses (0.5-3mg) can help reset your circadian rhythm without grogginess.',
          amazonFriendly: true,
          amazonQuery: 'melatonin 1mg 3mg sleep aid'
        },
        {
          name: 'L-Theanine',
          description: 'Promotes relaxation and can improve sleep quality by calming the mind without sedation.',
          amazonFriendly: true,
          amazonQuery: 'l theanine sleep support capsules'
        },
        {
          name: 'Chamomile or Passionflower Tea',
          description: 'Gentle herbs that support relaxation and have been used for centuries to promote sleep.',
          amazonFriendly: true,
          amazonQuery: 'chamomile passionflower bedtime tea'
        },
        {
          name: 'Sleep Hygiene',
          description: 'Consistent bedtime, dark room, cool temperature, no screens 1-2 hours before bed. These basics are often overlooked but critical.'
        },
        {
          name: 'Blood Sugar Balance',
          description: 'Eating a small protein and fat snack before bed can prevent nighttime blood sugar crashes that wake you up.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Options',
      content: 'If natural approaches aren\'t enough, medical treatments can help:',
      items: [
        'Prescription sleep medications (short-term use recommended)',
        'Low-dose antidepressants for sleep maintenance',
        'Melatonin receptor agonists (like ramelteon)',
        'Cognitive behavioral therapy for insomnia (CBT-I)',
        'Treatment of underlying conditions (sleep apnea, restless leg syndrome)'
      ]
    },
    ctaText: 'Want personalized sleep recommendations based on your specific situation?'
  },

  'constipation': {
    slug: 'constipation',
    title: 'Constipation: Medical Treatments & Holistic Solutions',
    metaDescription: 'Compare medical laxatives and natural approaches for constipation relief. Learn about root causes, gut health, and long-term solutions.',
    heroIntro: 'Constipation is usually treated with laxatives or stool softeners in standard medicine. Holistic approaches ask why your digestive system isn\'t moving properly, looking at hydration, fiber, gut bacteria, and thyroid function.',
    medicalPerspective: {
      title: 'Standard Medical Treatment',
      content: 'Doctors typically recommend over-the-counter laxatives or stool softeners. In chronic cases, prescription medications may be used.',
      items: [
        'Bulk-forming laxatives (fiber supplements like psyllium)',
        'Stool softeners (docusate)',
        'Osmotic laxatives (MiraLAX, magnesium citrate)',
        'Stimulant laxatives (senna, bisacodyl) for severe cases',
        'Prescription medications for chronic constipation'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners view constipation as a sign of sluggish digestion. Common causes include dehydration, low fiber, poor gut bacteria balance, magnesium deficiency, and underactive thyroid.',
      items: [
        'Increasing water intake (dehydration is a major cause)',
        'Adding fiber-rich whole foods (vegetables, fruits, seeds)',
        'Supporting healthy gut bacteria with probiotics',
        'Magnesium supplementation (relaxes intestinal muscles)',
        'Addressing thyroid function (hypothyroidism slows digestion)',
        'Regular movement (exercise stimulates bowel motility)'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Relief Options',
      items: [
        {
          name: 'Magnesium Citrate',
          description: 'A natural osmotic laxative that draws water into the intestines and promotes bowel movements. Gentler than stimulant laxatives.',
          amazonFriendly: true,
          amazonQuery: 'magnesium citrate gentle laxative'
        },
        {
          name: 'Psyllium Husk',
          description: 'A soluble fiber that adds bulk to stool and helps it move through the digestive tract. Mix with plenty of water.',
          amazonFriendly: true,
          amazonQuery: 'psyllium husk fiber powder'
        },
        {
          name: 'Probiotics',
          description: 'Healthy gut bacteria support regular bowel movements. Look for strains like Bifidobacterium and Lactobacillus.',
          amazonFriendly: true,
          amazonQuery: 'probiotic for constipation relief'
        },
        {
          name: 'Chia Seeds or Flaxseeds',
          description: 'High in fiber and omega-3s. Soak in water before consuming to create a gel that helps move waste through.',
          amazonFriendly: true,
          amazonQuery: 'organic ground flaxseed chia mix'
        },
        {
          name: 'Hydration',
          description: 'Drinking enough water throughout the day is one of the simplest and most effective constipation remedies.'
        },
        {
          name: 'Movement',
          description: 'Walking, yoga, or simple stretching can stimulate bowel motility and help relieve constipation naturally.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Options',
      content: 'When natural approaches aren\'t providing relief, medical treatments can help:',
      items: [
        'Osmotic laxatives (MiraLAX, milk of magnesia)',
        'Stool softeners for occasional use',
        'Stimulant laxatives (senna) for short-term relief',
        'Prescription medications (lubiprostone, linaclotide) for chronic cases',
        'Investigation of underlying conditions (thyroid, IBS, structural issues)'
      ]
    },
    ctaText: 'Want to explore natural and medical options for relieving your constipation?'
  },

  'bloating': {
    slug: 'bloating',
    title: 'Bloating: Medical vs. Holistic Approaches',
    metaDescription: 'Compare medical treatments and natural solutions for bloating and gas. Learn about digestive health, food triggers, and effective relief strategies.',
    heroIntro: 'Bloating is that uncomfortable feeling of fullness, tightness, or swelling in your abdomen. Standard medicine often treats it with antacids or anti-gas medications. Holistic approaches investigate what\'s causing poor digestion, like low stomach acid, food sensitivities, or gut bacteria imbalances.',
    medicalPerspective: {
      title: 'Standard Medical Treatment',
      content: 'Doctors usually recommend over-the-counter medications to relieve gas or improve digestion. If bloating persists, they may test for conditions like IBS or SIBO.',
      items: [
        'Simethicone (Gas-X) to break up gas bubbles',
        'Antacids for bloating related to acid reflux',
        'Prescription medications for IBS (irritable bowel syndrome)',
        'Testing for SIBO (small intestinal bacterial overgrowth)',
        'Elimination diets to identify food triggers'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners see bloating as a sign of digestive dysfunction. Common causes include low stomach acid, food sensitivities (dairy, gluten), imbalanced gut bacteria, and eating too quickly.',
      items: [
        'Supporting stomach acid production (better digestion)',
        'Identifying food sensitivities (dairy, gluten, FODMAPs)',
        'Rebalancing gut bacteria with probiotics and prebiotics',
        'Improving eating habits (chew thoroughly, eat slowly)',
        'Addressing stress (affects digestion)',
        'Supporting liver function (helps process fats)'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Relief Options',
      items: [
        {
          name: 'Digestive Enzymes',
          description: 'Supplements with enzymes like amylase, lipase, and protease help break down food properly and reduce bloating.',
          amazonFriendly: true,
          amazonQuery: 'digestive enzymes bloating gas relief',
          isTopPick: true
        },
        {
          name: 'Ginger',
          description: 'A natural digestive aid that reduces inflammation and helps move food through the digestive tract.',
          amazonFriendly: true,
          amazonQuery: 'ginger root capsules digestion bloating'
        },
        {
          name: 'Peppermint Oil',
          description: 'Relaxes the muscles of the GI tract and can reduce bloating and gas. Often taken in enteric-coated capsules.',
          amazonFriendly: true,
          amazonQuery: 'peppermint oil enteric coated capsules'
        },
        {
          name: 'Probiotics',
          description: 'Healthy gut bacteria help break down food and reduce fermentation that causes gas and bloating.',
          amazonFriendly: true,
          amazonQuery: 'probiotic for bloating gas relief'
        },
        {
          name: 'Food Elimination',
          description: 'Identifying and removing trigger foods (dairy, gluten, beans, carbonated drinks) can dramatically reduce bloating.'
        },
        {
          name: 'Eating Habits',
          description: 'Chewing food thoroughly, eating slowly, and avoiding large meals helps prevent bloating at its source.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Options',
      content: 'If bloating is severe or persistent, medical treatments can help:',
      items: [
        'Simethicone or other anti-gas medications',
        'Prescription medications for IBS or SIBO',
        'Testing for underlying conditions (celiac, Crohn\'s, etc.)',
        'Low-FODMAP diet under medical supervision',
        'Antibiotics for SIBO (if diagnosed)'
      ]
    },
    ctaText: 'Want personalized recommendations to address your bloating?'
  },

  'headaches': {
    slug: 'headaches',
    title: 'Headaches & Migraines: Medical Treatments vs. Natural Relief',
    metaDescription: 'Compare medication-based treatments and holistic approaches for headaches and migraines. Learn about triggers, prevention, and effective remedies.',
    heroIntro: 'Headaches and migraines are often treated with pain relievers in standard medicine. Holistic approaches look for triggers like dehydration, blood sugar swings, food sensitivities, hormonal changes, or nutrient deficiencies.',
    medicalPerspective: {
      title: 'Standard Medical Treatment',
      content: 'Doctors typically prescribe pain medications for headaches and specialized migraine treatments. Preventive medications may be used for chronic cases.',
      items: [
        'Over-the-counter pain relievers (ibuprofen, acetaminophen)',
        'Triptans (sumatriptan) for migraines',
        'Preventive medications (beta-blockers, antidepressants)',
        'Botox injections for chronic migraines',
        'CGRP inhibitors (newer migraine-specific drugs)'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners investigate what\'s triggering headaches. Common causes include dehydration, magnesium deficiency, blood sugar imbalance, food sensitivities (especially gluten and dairy), hormonal fluctuations, and poor sleep.',
      items: [
        'Identifying food triggers (gluten, dairy, caffeine, MSG)',
        'Magnesium supplementation (many migraine sufferers are deficient)',
        'Balancing blood sugar (skipping meals often triggers headaches)',
        'Hydration (dehydration is a top headache cause)',
        'Addressing hormonal imbalances (especially in women)',
        'Stress management and sleep optimization'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Relief Options',
      items: [
        {
          name: 'Magnesium',
          description: 'Studies show magnesium deficiency is common in migraine sufferers. Magnesium glycinate or threonate are well-absorbed forms.',
          amazonFriendly: true,
          amazonQuery: 'magnesium glycinate migraine headache'
        },
        {
          name: 'Riboflavin (Vitamin B2)',
          description: 'High doses (400mg daily) have been shown to reduce migraine frequency in studies.',
          amazonFriendly: true,
          amazonQuery: 'riboflavin vitamin b2 400mg migraine'
        },
        {
          name: 'Feverfew',
          description: 'An herb traditionally used for migraines. Some studies show it can reduce frequency and severity.',
          amazonFriendly: true,
          amazonQuery: 'feverfew extract migraine prevention'
        },
        {
          name: 'Peppermint or Lavender Oil',
          description: 'Applied topically to temples or inhaled. Both have calming, pain-relieving properties.',
          amazonFriendly: true,
          amazonQuery: 'peppermint lavender essential oil headache'
        },
        {
          name: 'Hydration',
          description: 'Drinking water consistently throughout the day prevents dehydration headaches, one of the most common triggers.'
        },
        {
          name: 'Food Trigger Elimination',
          description: 'Removing common triggers (gluten, dairy, artificial sweeteners, MSG) and tracking responses can identify your specific triggers.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Options',
      content: 'When natural approaches aren\'t enough, medical treatments can provide relief:',
      items: [
        'Triptans for acute migraine treatment',
        'Preventive medications (beta-blockers, antidepressants, anticonvulsants)',
        'CGRP inhibitors for chronic migraines',
        'Botox injections (FDA-approved for chronic migraines)',
        'Emergency room treatment for severe, intractable migraines'
      ]
    },
    ctaText: 'Want to explore both medical and natural headache relief options?'
  },

  'high-blood-pressure': {
    slug: 'high-blood-pressure',
    title: 'High Blood Pressure: Medical vs. Holistic Management',
    metaDescription: 'Compare medication-based treatments and lifestyle approaches for high blood pressure. Learn about diet, stress management, and effective strategies.',
    heroIntro: 'High blood pressure (hypertension) is typically managed with medications in standard medicine. Holistic approaches focus on diet, stress reduction, weight management, and addressing insulin resistance, which often underlies high blood pressure.',
    medicalPerspective: {
      title: 'Standard Medical Treatment',
      content: 'Doctors usually prescribe medications to lower blood pressure and reduce risk of heart attack or stroke. Lifestyle changes are recommended but medications are the primary treatment.',
      items: [
        'ACE inhibitors or ARBs to relax blood vessels',
        'Diuretics (water pills) to reduce fluid volume',
        'Beta-blockers to slow heart rate',
        'Calcium channel blockers to relax blood vessels',
        'Combination medications for better control'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners view high blood pressure as a symptom of metabolic dysfunction. Common root causes include insulin resistance, chronic inflammation, magnesium deficiency, stress, and poor diet.',
      items: [
        'Low-carb or Mediterranean diet to improve insulin sensitivity',
        'Weight loss (even 5-10 pounds can lower blood pressure)',
        'Magnesium and potassium supplementation',
        'Stress management (meditation, breathwork)',
        'Regular exercise (especially strength training)',
        'Reducing sodium and processed foods'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Management Options',
      items: [
        {
          name: 'Magnesium',
          description: 'Relaxes blood vessels and helps regulate blood pressure. Many people with hypertension are deficient.',
          amazonFriendly: true,
          amazonQuery: 'magnesium supplement blood pressure support',
          isTopPick: true
        },
        {
          name: 'Potassium',
          description: 'Balances sodium and supports healthy blood pressure. Found in leafy greens, avocados, and supplements.',
          amazonFriendly: true,
          amazonQuery: 'potassium citrate supplement 99mg'
        },
        {
          name: 'Omega-3 Fatty Acids',
          description: 'Reduce inflammation and have been shown to lower blood pressure in studies.',
          amazonFriendly: true,
          amazonQuery: 'omega 3 fish oil blood pressure heart'
        },
        {
          name: 'CoQ10',
          description: 'An antioxidant that supports heart health and may help lower blood pressure naturally.',
          amazonFriendly: true,
          amazonQuery: 'coq10 ubiquinol heart health 200mg'
        },
        {
          name: 'Diet Changes',
          description: 'Reducing processed foods, sugar, and refined carbs while adding vegetables, healthy fats, and lean protein can significantly improve blood pressure.'
        },
        {
          name: 'Exercise',
          description: 'Regular physical activity (even walking 30 minutes daily) strengthens the heart and lowers blood pressure over time.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Options',
      content: 'When lifestyle changes aren\'t enough, medical treatments are important to prevent complications:',
      items: [
        'ACE inhibitors or ARBs (first-line medications)',
        'Diuretics to reduce fluid retention',
        'Beta-blockers (especially if you have heart disease)',
        'Calcium channel blockers',
        'Regular monitoring and medication adjustments',
        'Treatment of underlying conditions (sleep apnea, kidney disease)'
      ]
    },
    ctaText: 'Want personalized recommendations for managing your blood pressure?'
  },

  'fatty-liver': {
    slug: 'fatty-liver',
    title: 'Fatty Liver: Medical Monitoring vs. Natural Reversal',
    metaDescription: 'Compare medical monitoring and lifestyle approaches for fatty liver disease. Learn about insulin resistance, diet changes, and effective strategies.',
    heroIntro: 'Fatty liver disease (often non-alcoholic fatty liver or NAFLD) happens when fat builds up in the liver. Standard medicine typically monitors it and treats complications. Holistic approaches focus on reversing the condition through diet, insulin sensitivity, and lifestyle changes.',
    medicalPerspective: {
      title: 'Standard Medical Approach',
      content: 'Doctors usually monitor fatty liver with regular blood tests and imaging. There are no FDA-approved medications specifically for NAFLD, so treatment focuses on managing related conditions.',
      items: [
        'Regular monitoring with blood tests and ultrasounds',
        'Medications for related conditions (diabetes, high cholesterol)',
        'Weight loss recommendations',
        'Liver biopsy in advanced cases',
        'Treatment of complications (cirrhosis, liver failure)'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners see fatty liver as a metabolic problem, often driven by insulin resistance and high sugar intake. The liver stores excess sugar as fat, so reversing fatty liver means addressing blood sugar and insulin.',
      items: [
        'Low-carb or ketogenic diet (reduces liver fat quickly)',
        'Improving insulin sensitivity through diet and exercise',
        'Addressing gut health (SIBO and dysbiosis contribute to fatty liver)',
        'Supporting liver detoxification pathways',
        'Reducing fructose intake (especially from processed foods)',
        'Intermittent fasting to give the liver a break'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Reversal Strategies',
      items: [
        {
          name: 'Milk Thistle',
          description: 'An herb that supports liver health and has been used for centuries to protect liver cells.',
          amazonFriendly: true,
          amazonQuery: 'milk thistle extract silymarin liver support',
          isTopPick: true
        },
        {
          name: 'Berberine',
          description: 'A compound that improves insulin sensitivity and has been shown to reduce liver fat in studies.',
          amazonFriendly: true,
          amazonQuery: 'berberine supplement 500mg blood sugar'
        },
        {
          name: 'N-Acetyl Cysteine (NAC)',
          description: 'A powerful antioxidant that supports liver detoxification and may help reduce liver inflammation.',
          amazonFriendly: true,
          amazonQuery: 'nac n acetyl cysteine 600mg liver'
        },
        {
          name: 'Omega-3 Fatty Acids',
          description: 'Reduce liver inflammation and have been shown to decrease liver fat content.',
          amazonFriendly: true,
          amazonQuery: 'omega 3 fish oil liver health inflammation'
        },
        {
          name: 'Low-Carb Diet',
          description: 'Reducing sugar and refined carbs is the most effective way to reverse fatty liver. Even moderate carb reduction shows results.'
        },
        {
          name: 'Weight Loss',
          description: 'Losing just 5-10% of body weight can significantly reduce liver fat and improve liver function tests.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Monitoring & Treatment',
      content: 'While there are no specific medications for fatty liver, medical care is important:',
      items: [
        'Regular monitoring with ultrasound and liver function tests',
        'Medications to manage related conditions (diabetes, cholesterol)',
        'Vitamin E supplementation (in some cases)',
        'Liver biopsy to assess severity',
        'Treatment of advanced liver disease or cirrhosis if it develops'
      ]
    },
    ctaText: 'Want to see medical monitoring and natural reversal strategies side by side?'
  },

  'hormone-imbalance': {
    slug: 'hormone-imbalance',
    title: 'Hormone Imbalance: Medical Treatments vs. Natural Balancing',
    metaDescription: 'Compare hormone replacement therapy and lifestyle approaches for hormone imbalance. Learn about root causes, diet, stress, and effective strategies.',
    heroIntro: 'Hormone imbalances (estrogen, progesterone, testosterone, thyroid, cortisol) can cause fatigue, mood swings, weight changes, and more. Standard medicine often uses hormone replacement. Holistic approaches look at why hormones are out of balance in the first place.',
    medicalPerspective: {
      title: 'Standard Medical Treatment',
      content: 'Doctors typically test hormone levels and prescribe replacement therapy to bring them back to normal ranges.',
      items: [
        'Hormone replacement therapy (HRT) for menopause',
        'Thyroid medication for hypothyroidism',
        'Testosterone replacement for low T',
        'Birth control pills to regulate hormones',
        'Medications for specific conditions (PCOS, endometriosis)'
      ]
    },
    holisticPerspective: {
      title: 'Root-Cause Approach',
      content: 'Holistic practitioners investigate what\'s disrupting hormone production and metabolism. Common causes include chronic stress (cortisol imbalance), poor diet, insulin resistance, gut issues, and environmental toxins.',
      items: [
        'Supporting adrenal health (cortisol affects all other hormones)',
        'Balancing blood sugar (insulin impacts sex hormones)',
        'Improving liver function (liver metabolizes hormones)',
        'Optimizing gut health (gut bacteria affect estrogen levels)',
        'Reducing exposure to endocrine disruptors (plastics, pesticides)',
        'Ensuring adequate healthy fats (building blocks of hormones)'
      ]
    },
    naturalReliefOptions: {
      title: 'Natural Balancing Options',
      items: [
        {
          name: 'Maca Root',
          description: 'An adaptogenic herb that supports hormone balance and energy, especially during menopause or perimenopause.',
          amazonFriendly: true,
          amazonQuery: 'maca root powder organic hormone balance'
        },
        {
          name: 'DIM (Diindolylmethane)',
          description: 'Helps metabolize estrogen properly, supporting healthy estrogen balance. Found in cruciferous vegetables or supplements.',
          amazonFriendly: true,
          amazonQuery: 'dim supplement estrogen metabolism 200mg'
        },
        {
          name: 'Magnesium',
          description: 'Supports progesterone production and helps balance cortisol, especially important for stress-related hormone issues.',
          amazonFriendly: true,
          amazonQuery: 'magnesium glycinate hormone balance stress'
        },
        {
          name: 'Omega-3 Fatty Acids',
          description: 'Reduce inflammation and provide building blocks for hormone production.',
          amazonFriendly: true,
          amazonQuery: 'omega 3 fish oil hormone support women'
        },
        {
          name: 'Blood Sugar Balance',
          description: 'Eating protein and healthy fats with meals, reducing sugar, and avoiding insulin spikes helps regulate sex hormones.'
        },
        {
          name: 'Stress Management',
          description: 'High cortisol from chronic stress disrupts all other hormones. Meditation, breathwork, and rest are essential.'
        }
      ]
    },
    medicalOptions: {
      title: 'Medical Options',
      content: 'When natural approaches aren\'t enough, medical treatments can help:',
      items: [
        'Hormone replacement therapy (bioidentical or synthetic)',
        'Thyroid medication (levothyroxine, Armour Thyroid)',
        'Testosterone replacement',
        'Medications for PCOS (metformin, spironolactone)',
        'Treatment of underlying conditions affecting hormones'
      ]
    },
    ctaText: 'Want personalized recommendations for balancing your hormones?'
  }
};

export const GUIDE_SLUGS = Object.keys(GUIDES);
