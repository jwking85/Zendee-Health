export const fetchHealthAdvice = async (symptom: string, profile?: UserProfile | null): Promise<HealthResponse> => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: generatePrompt(symptom, profile) }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4096
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("API Response:", errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
      throw new Error("Invalid response from API");
    }
    
    let text = data.candidates[0].content.parts[0].text;
    
    // Clean up response if it has markdown code blocks
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    return JSON.parse(text) as HealthResponse;
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("We couldn't complete the analysis. Please try again.");
  }
};
