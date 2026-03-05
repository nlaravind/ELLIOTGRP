import { GoogleGenAI } from "@google/genai";
import { VERTICALS } from "../constants";

export const generateResponse = async (prompt: string): Promise<string> => {
  // Graceful fallback if no key is present in this demo environment
  if (!process.env.API_KEY) {
    return "I am currently in demo mode. Please configure the API Key to enable my full intelligence.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct system context based on the company data
    const verticalsContext = VERTICALS.map(v => `- ${v.title}: ${v.description}`).join('\n');
    const formatLabel = (title: string) => {
      let label = title.replace(/^ELLIOT\s+/i, '');
      label = label.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
      if (label.toLowerCase().startsWith('ev ')) {
        label = 'EV Business';
      }
      return label;
    };
    const verticalNames = VERTICALS.map(v => formatLabel(v.title)).join(', ');
    const systemInstruction = `You are "Elliot AI", the virtual concierge for the ELLIOT GROUP OF COMPANIES.
    The group is a luxury conglomerate with ${VERTICALS.length} pillars of innovation:
    ${verticalsContext}
    
    Your tone must be:
    - Ultra-professional and polite.
    - Concise but sophisticated.
    - Futuristic and focused on innovation.
    
    Answer the user's questions about our services. If they ask about something unrelated, politely steer them back to our offerings in ${verticalNames}.
    Keep answers under 60 words.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, I am processing high volumes of data. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am experiencing a momentary connection fluctuation. Please try again shortly.";
  }
};