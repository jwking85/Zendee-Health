// src/data/symptoms.ts

export interface SymptomProduct {
  name: string;
  description: string;
  amazonFriendly?: boolean;
  amazonQuery?: string;
}

export interface SymptomConfig {
  slug: string;
  title: string;
  heroTagline: string;
  overview: string;
  whatItMightMean: string;
  commonCauses: string[];
  redFlagHeading: string;
  redFlags: string[];
  naturalIntro: string;
  naturalOptions: SymptomProduct[];
  medicalIntro: string;
  medicalOptions: string[];
  relatedGuides: { slug: string; label: string }[];
}

export const SYMPTOMS: Record<string, SymptomConfig> = {
  'sharp-left-side-stomach-pain': {
    slug: 'sharp-left-side-stomach-pain',
    title: 'Sharp Pain in the Left Side of Your Stomach',
    heroTagline: 'When a sudden, sharp pain on one side means gas, muscle strain — or something more serious.',
    overview:
      'Left-sided abdominal pain can come from gas, constipation, muscle strain, or sometimes more serious issues like diverticulitis or problems with the spleen. The type of pain, when it started, and what makes it worse all matter.',
    whatItMightMean:
      'Milder, short-lived pain is often from gas, constipation, or muscle strain. Sudden, severe, or spreading pain — especially with fever, vomiting, or dizziness — needs urgent medical care.',
    commonCauses: [
      'Trapped gas or bloating after eating quickly or eating gas-forming foods',
      'Constipation and straining with bowel movements',
      'Pulled or strained abdominal muscles from lifting, coughing, or exercise',
      'Diverticulitis (inflamed pouches in the colon), usually with fever and tenderness',
      'Less common but serious causes like spleen problems or kidney stones',
    ],
    redFlagHeading: 'When to get urgent help',
    redFlags: [
      'Sharp pain that is severe, constant, or getting worse over hours',
      'Pain with fever, chills, or feeling very unwell',
      'Pain with chest pain, trouble breathing, or pain spreading to the chest or shoulder',
      'Blood in stool or black, tarry stool',
      'Severe pain during pregnancy',
    ],
    naturalIntro:
      'For mild, short-lived pain that feels clearly related to gas or bloating, some people use these natural options alongside gentle movement and hydration.',
    naturalOptions: [
      {
        name: 'Simethicone gas relief',
        description:
          'Helps break up gas bubbles in the gut so they can pass more easily. Often used for bloating and sharp gas pain.',
        amazonFriendly: true,
        amazonQuery: 'simethicone gas relief softgels',
      },
      {
        name: 'Ginger capsules or tea',
        description:
          'Supports digestion and may help ease nausea and mild cramping after meals.',
        amazonFriendly: true,
        amazonQuery: 'ginger capsules for digestion and nausea',
      },
      {
        name: 'Peppermint oil softgels',
        description:
          'Sometimes used for IBS-type cramping and gas. Can relax smooth muscle in the gut for some people.',
        amazonFriendly: true,
        amazonQuery: 'peppermint oil softgels ibs',
      },
      {
        name: 'Heat pack for abdominal muscles',
        description:
          'Gentle warmth over a sore muscle or crampy area can ease tension and discomfort.',
        amazonFriendly: true,
        amazonQuery: 'reusable microwave heating pad for stomach',
      },
    ],
    medicalIntro:
      'If pain keeps returning, is unexplained, or you have any red-flag symptoms, a medical evaluation is essential. Abdominal pain can change quickly.',
    medicalOptions: [
      'Physical exam and history to check where the pain is and what triggers it',
      'Blood work and imaging, such as ultrasound or CT, if your provider suspects diverticulitis or other serious causes',
      'Short-term pain relief or anti-spasm medications when appropriate',
      'Antibiotics or other targeted treatment if an infection or diverticulitis is found',
    ],
    relatedGuides: [
      { slug: 'bloating', label: 'Bloating & Gas' },
      { slug: 'constipation', label: 'Constipation' },
      { slug: 'acid-reflux', label: 'Acid Reflux & GERD' },
    ],
  },

  'constant-head-pressure-no-pain': {
    slug: 'constant-head-pressure-no-pain',
    title: 'Constant Head Pressure (With Little or No Pain)',
    heroTagline: 'A "heavy head" feeling can come from tension, sinus issues, anxiety, or something more serious.',
    overview:
      'Many people describe a tight band, fullness, or "helmet" feeling around the head rather than sharp pain. This can be from tension, sinus congestion, eye strain, or less commonly serious neurological problems.',
    whatItMightMean:
      'If you have a long history of tension, stress, or sinus problems, head pressure often relates to those triggers. Sudden new pressure with neurologic symptoms needs urgent evaluation.',
    commonCauses: [
      'Tension-type headache: tight neck and scalp muscles from stress or posture',
      'Sinus congestion from allergies or infection',
      'Eye strain from screens or uncorrected vision problems',
      'Anxiety, hyperventilation, and muscle tightness around the scalp',
      'Rarely, increased pressure in the skull or other neurological causes',
    ],
    redFlagHeading: 'Red flags for head pressure',
    redFlags: [
      'Sudden, "worst headache of your life" or pressure that explodes out of nowhere',
      'Head pressure with trouble speaking, weakness, confusion, or trouble walking',
      'Head pressure after a serious head injury or fall',
      'Headache with fever, stiff neck, or rash',
    ],
    naturalIntro:
      'For long-standing, mild head pressure tied to stress or sinus congestion, many people combine lifestyle changes with gentle natural supports.',
    naturalOptions: [
      {
        name: 'Magnesium glycinate',
        description:
          'Often used for tension headaches and muscle tightness when guided by a healthcare provider.',
        amazonFriendly: true,
        amazonQuery: 'magnesium glycinate tension headache',
      },
      {
        name: 'Nasal saline rinse',
        description:
          'Rinsing the nasal passages can relieve sinus congestion and pressure for some people.',
        amazonFriendly: true,
        amazonQuery: 'saline sinus rinse kit neti',
      },
      {
        name: 'Blue-light blocking or computer glasses',
        description:
          'Can ease eye strain from long screen time and reduce associated head pressure.',
        amazonFriendly: true,
        amazonQuery: 'blue light blocking computer glasses',
      },
      {
        name: 'Neck and posture support pillow',
        description:
          'Helps keep the neck in a neutral position during sleep to reduce muscle strain.',
        amazonFriendly: true,
        amazonQuery: 'cervical neck support pillow side sleeper',
      },
    ],
    medicalIntro:
      'If your head pressure is new, changing, or interfering with life, it deserves a medical evaluation.',
    medicalOptions: [
      'Exam of your eyes, neck, and neurologic function',
      'Sinus evaluation and possible imaging if sinus disease is suspected',
      'Medication options for tension headaches, migraines, or sinus inflammation',
      'Further neurological testing or imaging when red flags are present',
    ],
    relatedGuides: [
      { slug: 'headaches', label: 'Headaches & Migraines' },
      { slug: 'anxiety', label: 'Anxiety' },
      { slug: 'insomnia', label: 'Sleep Problems' },
    ],
  },

  'tired-all-the-time': {
    slug: 'tired-all-the-time',
    title: 'Why Am I Tired All the Time?',
    heroTagline: 'Constant fatigue can involve sleep, stress, hormones, nutrition, or underlying illness.',
    overview:
      'Feeling tired once in a while is normal. But ongoing fatigue, even after decent sleep, can signal sleep issues, low iron, thyroid problems, blood sugar issues, depression, or burnout.',
    whatItMightMean:
      'If your tiredness has been slowly building for weeks or months, it often connects to lifestyle, sleep, mood, or chronic conditions like anemia or thyroid imbalance.',
    commonCauses: [
      'Poor sleep quality, sleep apnea, or irregular sleep schedules',
      'Chronic stress, anxiety, or depression draining mental energy',
      'Low iron, B-vitamin deficiencies, or low thyroid function',
      'Blood sugar swings, poorly controlled diabetes, or insulin resistance',
      'Chronic infections, inflammatory conditions, or medication side effects',
    ],
    redFlagHeading: 'When fatigue needs urgent attention',
    redFlags: [
      'Sudden, extreme tiredness with chest pain, shortness of breath, or palpitations',
      'Fatigue with unexplained weight loss, fever, night sweats, or swollen lymph nodes',
      'Tiredness so profound you fall asleep during conversations, driving, or work',
    ],
    naturalIntro:
      'Natural strategies focus on stabilizing sleep, nutrition, and stress while you and your provider look for root causes.',
    naturalOptions: [
      {
        name: 'High-quality multivitamin or B-complex',
        description:
          'Can fill common nutrient gaps while you work with a provider to rule out deficiencies.',
        amazonFriendly: true,
        amazonQuery: 'b complex vitamin energy support',
      },
      {
        name: 'Magnesium glycinate in the evening',
        description:
          'Supports relaxation and sleep quality for many people when used appropriately.',
        amazonFriendly: true,
        amazonQuery: 'magnesium glycinate sleep quality',
      },
      {
        name: 'Light therapy lamp (for dark mornings)',
        description:
          'Helps reset circadian rhythm and improve morning alertness in some people.',
        amazonFriendly: true,
        amazonQuery: 'light therapy lamp 10000 lux',
      },
      {
        name: 'Adaptogen blend (ashwagandha, rhodiola, etc.)',
        description:
          'Sometimes used to support stress resilience and energy; best used under professional guidance.',
        amazonFriendly: true,
        amazonQuery: 'adaptogen supplement ashwagandha rhodiola energy',
      },
    ],
    medicalIntro:
      'Persistent fatigue always deserves a medical workup to rule out anemia, thyroid disease, sleep apnea, and other conditions.',
    medicalOptions: [
      'Detailed history, physical, and review of medications',
      'Basic blood work: CBC, thyroid tests, iron studies, metabolic panel',
      'Sleep study if sleep apnea or restless sleep is suspected',
      'Screening for depression, anxiety, and other mental health concerns',
    ],
    relatedGuides: [
      { slug: 'insomnia', label: 'Sleep Problems & Insomnia' },
      { slug: 'anxiety', label: 'Anxiety' },
      { slug: 'hormone-imbalance', label: 'Hormone Imbalance' },
    ],
  },

  'chest-burning-after-eating': {
    slug: 'chest-burning-after-eating',
    title: 'Chest Burning After Eating',
    heroTagline: 'That burning feeling after meals is often reflux — but chest symptoms always deserve respect.',
    overview:
      'A burning sensation behind the breastbone after meals is usually acid reflux or GERD. However, chest discomfort can also overlap with heart or lung problems, so context matters.',
    whatItMightMean:
      'If burning clearly tracks with meals, lying down, or certain foods, reflux is likely. If you aren\'t sure whether it\'s reflux or heart-related, seek urgent care.',
    commonCauses: [
      'Acid reflux / GERD: stomach acid moving back into the esophagus',
      'Large or late-night meals, spicy or acidic foods, caffeine, or alcohol',
      'Hiatal hernia or weakened lower esophageal sphincter',
      'Less often, gallbladder issues or esophageal spasm',
    ],
    redFlagHeading: 'Go to emergency care if:',
    redFlags: [
      'Chest pain or burning with shortness of breath, sweating, or nausea',
      'Pain that radiates to the jaw, arm, or back',
      'You have heart disease, diabetes, or strong risk factors and new chest symptoms',
    ],
    naturalIntro:
      'For clearly meal-related burning that a clinician has diagnosed as reflux, these strategies may help alongside lifestyle changes.',
    naturalOptions: [
      {
        name: 'Elevated wedge pillow',
        description:
          'Keeps the upper body raised at night to reduce nighttime reflux.',
        amazonFriendly: true,
        amazonQuery: 'reflux wedge pillow for acid reflux',
      },
      {
        name: 'Digestive enzyme with meals',
        description:
          'Some people find enzymes helpful for heavy, high-fat meals that trigger burning.',
        amazonFriendly: true,
        amazonQuery: 'digestive enzymes supplement heartburn',
      },
      {
        name: 'DGL licorice chewable tablets',
        description:
          'Used by some practitioners to soothe the esophagus; should be used with professional guidance.',
        amazonFriendly: true,
        amazonQuery: 'dgl licorice chewable tablets reflux',
      },
      {
        name: 'Ginger tea after meals',
        description:
          'May support digestion and lessen nausea or mild discomfort.',
        amazonFriendly: true,
        amazonQuery: 'ginger tea organic digestion',
      },
    ],
    medicalIntro:
      'Ongoing chest burning, especially with swallowing problems or weight loss, should always be evaluated.',
    medicalOptions: [
      'Trial of antacids, H2-blockers, or PPIs when appropriate',
      'Testing for H. pylori infection if indicated',
      'Endoscopy if symptoms are severe, long-lasting, or accompanied by red flags',
    ],
    relatedGuides: [
      { slug: 'acid-reflux', label: 'Acid Reflux & GERD' },
      { slug: 'bloating', label: 'Bloating' },
      { slug: 'constipation', label: 'Constipation' },
    ],
  },

  'morning-stiff-joints': {
    slug: 'morning-stiff-joints',
    title: 'Waking Up With Stiff Joints',
    heroTagline: 'Morning stiffness can reflect aging joints, inflammation, or autoimmune disease.',
    overview:
      'Feeling stiff when you first get out of bed is common with aging and osteoarthritis, but can also signal inflammatory arthritis if the stiffness lasts a long time.',
    whatItMightMean:
      'Short-lived stiffness (less than 30 minutes) often reflects wear-and-tear arthritis. Longer stiffness may suggest inflammatory arthritis and deserves evaluation.',
    commonCauses: [
      'Osteoarthritis from long-term joint wear',
      'Inflammatory arthritis such as rheumatoid arthritis or psoriatic arthritis',
      'Muscle tightness from poor sleep posture or low activity',
      'Previous joint injuries or overuse',
    ],
    redFlagHeading: 'Red flags with stiff joints',
    redFlags: [
      'Stiffness lasting more than an hour most mornings',
      'Warm, swollen, or visibly red joints',
      'Fever, weight loss, or profound fatigue along with joint issues',
    ],
    naturalIntro:
      'For mild stiffness, natural strategies focus on gentle movement, anti-inflammatory support, and joint-friendly sleep setups.',
    naturalOptions: [
      {
        name: 'Turmeric (curcumin) with black pepper',
        description:
          'A popular anti-inflammatory supplement for joint comfort when used with medical guidance.',
        amazonFriendly: true,
        amazonQuery: 'turmeric curcumin black pepper joint',
      },
      {
        name: 'Omega-3 fish oil',
        description:
          'Supports healthy inflammation responses throughout the body, including joints.',
        amazonFriendly: true,
        amazonQuery: 'omega 3 fish oil joint stiffness',
      },
      {
        name: 'Joint support pillow or mattress topper',
        description:
          'Helps align hips, knees, and shoulders to reduce overnight pressure.',
        amazonFriendly: true,
        amazonQuery: 'knee pillow for side sleepers joint pain',
      },
      {
        name: 'Gentle joint mobility bands',
        description:
          'Light resistance bands for morning mobility routines.',
        amazonFriendly: true,
        amazonQuery: 'light resistance bands physical therapy',
      },
    ],
    medicalIntro:
      'New, worsening, or long-lasting morning stiffness always deserves a medical check-in.',
    medicalOptions: [
      'Physical exam of joints and range of motion',
      'Blood tests and imaging if inflammatory arthritis is suspected',
      'Referral to rheumatology when autoimmune disease is likely',
    ],
    relatedGuides: [
      { slug: 'joint-pain', label: 'Joint Pain' },
      { slug: 'high-blood-pressure', label: 'Heart & Metabolic Health' },
    ],
  },

  'lower-back-pain-on-and-off': {
    slug: 'lower-back-pain-on-and-off',
    title: 'Lower Back Pain That Comes and Goes',
    heroTagline: 'Most lower back pain is mechanical — but some patterns need a closer look.',
    overview:
      'Flare-ups of low back pain that come and go over months are often related to muscles, discs, posture, or inactivity. Rarely, back pain can signal infection, cancer, or serious nerve problems.',
    whatItMightMean:
      'If pain flares with certain movements, lifting, or long sitting and eases with rest and gentle activity, it is usually mechanical back pain.',
    commonCauses: [
      'Muscle strain or ligament sprain',
      'Degenerative disc disease and age-related changes',
      'Poor posture, weak core muscles, or deconditioning',
      'Occasional nerve irritation or sciatica',
    ],
    redFlagHeading: 'Back pain red flags',
    redFlags: [
      'Back pain with loss of bladder or bowel control',
      'Weakness or numbness in both legs',
      'Back pain with fever, history of cancer, or unexplained weight loss',
    ],
    naturalIntro:
      'Natural support focuses on movement, posture, and gentle relief tools while ruling out serious causes.',
    naturalOptions: [
      {
        name: 'Supportive lumbar cushion',
        description:
          'Improves low-back support when sitting for long periods.',
        amazonFriendly: true,
        amazonQuery: 'lumbar support cushion office chair',
      },
      {
        name: 'Adjustable standing desk converter',
        description:
          'Alternating between sitting and standing can reduce stress on the lower back.',
        amazonFriendly: true,
        amazonQuery: 'standing desk converter for existing desk',
      },
      {
        name: 'Topical menthol or arnica cream',
        description:
          'Provides surface-level comfort for sore muscles during flare-ups.',
        amazonFriendly: true,
        amazonQuery: 'arnica menthol pain relief cream back',
      },
      {
        name: 'Gentle yoga or stretching program',
        description:
          'Video-guided routines that focus on hips, hamstrings, and core stability.',
        amazonFriendly: true,
        amazonQuery: 'beginner gentle yoga for low back pain dvd',
      },
    ],
    medicalIntro:
      'If back pain lasts more than a few weeks, is severe, or shows red flags, see a medical professional.',
    medicalOptions: [
      'Physical therapy to retrain movement patterns and strengthen core',
      'Short-term anti-inflammatory medication when appropriate',
      'Imaging only when red flags or nerve symptoms are present',
    ],
    relatedGuides: [
      { slug: 'joint-pain', label: 'Joint Pain' },
      { slug: 'anxiety', label: 'Anxiety & Pain Perception' },
    ],
  },

  'bloating-after-every-meal': {
    slug: 'bloating-after-every-meal',
    title: 'Bloating After Every Meal',
    heroTagline: 'Persistent bloating can be about food triggers, digestion, or gut imbalance.',
    overview:
      'Feeling bloated after nearly every meal may be related to how you eat, what you eat, digestive enzyme function, or gut bacteria balance.',
    whatItMightMean:
      'If bloating is frequent but mild, it often ties to food triggers, constipation, or simple IBS-type sensitivity.',
    commonCauses: [
      'Eating quickly, swallowing air, or drinking lots of carbonated drinks',
      'High-FODMAP foods that ferment in the gut',
      'Constipation and slow gut transit',
      'Imbalanced gut bacteria or mild IBS',
    ],
    redFlagHeading: 'When bloating needs urgent care',
    redFlags: [
      'Bloating with severe abdominal pain, vomiting, or inability to pass gas',
      'New bloating with unintentional weight loss or blood in stool',
      'Persistent bloating in older adults with no clear cause',
    ],
    naturalIntro:
      'Natural strategies aim to support digestion and identify triggers while you and your clinician look for underlying causes.',
    naturalOptions: [
      {
        name: 'Digestive enzyme with meals',
        description:
          'Helps break down fats, proteins, and carbs to reduce heaviness and gas.',
        amazonFriendly: true,
        amazonQuery: 'digestive enzymes supplement bloating gas',
      },
      {
        name: 'Low-FODMAP cookbooks or guides',
        description:
          'Structured recipes to help identify fermentable carbs that trigger bloating.',
        amazonFriendly: true,
        amazonQuery: 'low FODMAP diet cookbook',
      },
      {
        name: 'Peppermint oil softgels',
        description:
          'Frequently used for IBS-type cramping and bloating when guided by a clinician.',
        amazonFriendly: true,
        amazonQuery: 'peppermint oil softgels ibs bloating',
      },
      {
        name: 'Probiotic targeted for gas and bloating',
        description:
          'Certain strains are marketed for gas, bloating, and regularity.',
        amazonFriendly: true,
        amazonQuery: 'probiotic for gas and bloating relief',
      },
    ],
    medicalIntro:
      'If bloating is new, severe, or linked with weight loss or bowel changes, talk with a healthcare provider.',
    medicalOptions: [
      'Evaluation for celiac disease, food intolerances, or IBS',
      'Testing for SIBO (small intestinal bacterial overgrowth) when appropriate',
      'Guidance on elimination diets and fiber types',
    ],
    relatedGuides: [
      { slug: 'bloating', label: 'Bloating Guide' },
      { slug: 'constipation', label: 'Constipation' },
      { slug: 'acid-reflux', label: 'Acid Reflux' },
    ],
  },

  'throat-tightness-lump-feeling': {
    slug: 'throat-tightness-lump-feeling',
    title: 'Throat Tightness or "Lump in Throat" Sensation',
    heroTagline: 'Globus sensation, reflux, muscle tension, and anxiety can all create a "lump in throat" feeling.',
    overview:
      'Many people feel like there is a lump, tight band, or something stuck in the throat even when nothing is really there. This is often called globus sensation.',
    whatItMightMean:
      'Common drivers include reflux, post-nasal drip, muscle tension, and anxiety. But swallowing trouble or pain needs prompt evaluation.',
    commonCauses: [
      'Laryngopharyngeal reflux (LPR) or silent reflux',
      'Post-nasal drip from allergies or sinus issues',
      'Throat muscle tension related to stress or anxiety',
      'Less often, structural issues or growths in the throat',
    ],
    redFlagHeading: 'Red flags with throat symptoms',
    redFlags: [
      'True difficulty swallowing food or liquids',
      'Choking, coughing with swallowing, or food sticking',
      'Persistent hoarseness, unexplained weight loss, or coughing blood',
    ],
    naturalIntro:
      'For globus sensations already evaluated by a clinician, natural support focuses on calming reflux and muscle tension.',
    naturalOptions: [
      {
        name: 'Reflux wedge pillow',
        description:
          'Elevates the upper body to reduce night-time reflux that can irritate the throat.',
        amazonFriendly: true,
        amazonQuery: 'wedge pillow lpr silent reflux',
      },
      {
        name: 'Throat-soothing lozenges (non-menthol)',
        description:
          'Moisturizing lozenges can ease dryness and irritation in the throat.',
        amazonFriendly: true,
        amazonQuery: 'throat moisturizing lozenges dry throat',
      },
      {
        name: 'Nasal saline rinse',
        description:
          'Helps clear post-nasal drip that can aggravate throat sensations.',
        amazonFriendly: true,
        amazonQuery: 'nasal saline rinse kit post nasal drip',
      },
      {
        name: 'Guided breathing / relaxation app or device',
        description:
          'Supports nervous system calm and reduces muscle tension in the throat and chest.',
        amazonFriendly: true,
        amazonQuery: 'breathing exercise device anxiety',
      },
    ],
    medicalIntro:
      'Because throat symptoms overlap with many conditions, medical evaluation is important if symptoms persist or change.',
    medicalOptions: [
      'ENT exam of the throat and vocal cords',
      'Reflux evaluation and treatment if LPR is suspected',
      'Allergy or sinus treatment if post-nasal drip is a driver',
    ],
    relatedGuides: [
      { slug: 'anxiety', label: 'Anxiety' },
      { slug: 'acid-reflux', label: 'Acid Reflux & GERD' },
    ],
  },

  'shortness-of-breath-after-eating': {
    slug: 'shortness-of-breath-after-eating',
    title: 'Shortness of Breath After Eating',
    heroTagline: 'Breathlessness after meals may involve reflux, bloating, or heart and lung conditions.',
    overview:
      'Feeling unusually short of breath after eating can stem from reflux, gas and bloating pushing up on the diaphragm, or less often heart and lung problems.',
    whatItMightMean:
      'Mild breathlessness after very large meals can be benign. But any significant or new shortness of breath should be treated cautiously.',
    commonCauses: [
      'Large meals causing the stomach to press upward on the diaphragm',
      'Reflux irritating the airways or triggering cough',
      'Deconditioning, anxiety, or panic attacks triggered by fullness',
      'Underlying heart or lung disease that becomes more noticeable after meals',
    ],
    redFlagHeading: 'Seek urgent care if you notice:',
    redFlags: [
      'Shortness of breath with chest pain, sweating, or nausea',
      'Bluish lips, severe difficulty breathing, or confusion',
      'History of heart disease, blood clots, or lung problems with new symptoms',
    ],
    naturalIntro:
      'For mild symptoms already evaluated by a clinician, lifestyle adjustments often focus on meal size and pacing.',
    naturalOptions: [
      {
        name: 'Smaller-portion plate set',
        description:
          'Encourages smaller, more frequent meals to reduce post-meal fullness.',
        amazonFriendly: true,
        amazonQuery: 'portion control plates smaller meals',
      },
      {
        name: 'Slow-eating utensils or mindful eating tools',
        description:
          'Helps reduce air swallowing and very rapid eating, which can worsen bloating.',
        amazonFriendly: true,
        amazonQuery: 'slow eating fork mindful eating',
      },
      {
        name: 'Reflux wedge pillow',
        description:
          'Helps reduce reflux at night, which can aggravate cough and breathing irritation.',
        amazonFriendly: true,
        amazonQuery: 'acid reflux wedge pillow',
      },
    ],
    medicalIntro:
      'Because shortness of breath overlaps with serious heart and lung issues, medical clearance is important.',
    medicalOptions: [
      'Cardiac and pulmonary evaluation when risk factors are present',
      'Reflux and digestive evaluation to see if GI factors play a role',
      'Exercise testing or imaging as recommended by your clinician',
    ],
    relatedGuides: [
      { slug: 'acid-reflux', label: 'Acid Reflux & GERD' },
      { slug: 'high-blood-pressure', label: 'Heart & Metabolic Health' },
    ],
  },

  'dizzy-when-standing-up': {
    slug: 'dizzy-when-standing-up',
    title: 'Dizzy When Standing Up',
    heroTagline: 'Feeling lightheaded when you stand can involve blood pressure, hydration, or autonomic nerves.',
    overview:
      'A brief wave of lightheadedness when you stand up is often from blood pressure dropping temporarily (orthostatic hypotension). It can be worsened by dehydration, medications, or prolonged sitting.',
    whatItMightMean:
      'Occasional, mild lightheadedness can be benign. Frequent or severe episodes, especially with fainting, need evaluation.',
    commonCauses: [
      'Dehydration or low blood volume',
      'Medications that lower blood pressure',
      'Prolonged sitting or bed rest reducing circulation',
      'Autonomic nervous system conditions like POTS',
    ],
    redFlagHeading: 'Serious dizziness warning signs',
    redFlags: [
      'Dizziness with chest pain, shortness of breath, or palpitations',
      'Fainting or near-fainting episodes',
      'Dizziness with weakness, speech trouble, or one-sided numbness',
    ],
    naturalIntro:
      'Under medical guidance, some people use lifestyle strategies to support circulation and reduce positional dizziness.',
    naturalOptions: [
      {
        name: 'Electrolyte drink mix (low sugar)',
        description:
          'Supports hydration and blood volume for people prone to lightheadedness.',
        amazonFriendly: true,
        amazonQuery: 'electrolyte powder low sugar hydration',
      },
      {
        name: 'Compression socks',
        description:
          'Help keep blood from pooling in the legs when standing up.',
        amazonFriendly: true,
        amazonQuery: 'graduated compression socks circulation',
      },
      {
        name: 'Bedside water bottle',
        description:
          'Encourages morning hydration before getting out of bed, when approved by a clinician.',
        amazonFriendly: true,
        amazonQuery: 'large reusable water bottle bedside',
      },
    ],
    medicalIntro:
      'Because dizziness can reflect heart rhythm issues, stroke, or neurologic problems, it should always be taken seriously.',
    medicalOptions: [
      'Orthostatic vital signs and blood pressure checks',
      'Heart rhythm monitoring and blood work when indicated',
      'Referral to cardiology or neurology for persistent or unexplained cases',
    ],
    relatedGuides: [
      { slug: 'high-blood-pressure', label: 'Blood Pressure' },
      { slug: 'anxiety', label: 'Anxiety & Panic' },
    ],
  },
};
