import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: API_KEY});

export async function Genai(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:prompt,
  });
  return response.text;
}

