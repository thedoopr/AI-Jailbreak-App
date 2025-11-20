
import { GoogleGenAI } from "@google/genai";

export const getAiResponse = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    if (error instanceof Error) {
       return `Error from Gemini API: ${error.message}`;
    }
    return "An unknown error occurred while contacting the Gemini API.";
  }
};
