import { GoogleGenAI, Type } from "@google/genai";
import { LearningTypeResult } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getLearningStyleDescription(mbtiType: string): Promise<LearningTypeResult> {
  const model = "gemini-2.5-flash";
  const systemInstruction = "You are an expert in educational psychology and MBTI personality types. Your goal is to provide a concise, encouraging, and fun analysis of a student's learning style based on their MBTI type, using an 8-bit game/fantasy theme. Provide the output in JSON format according to the provided schema.";
  
  const prompt = `Please generate a learning style profile for the MBTI type: ${mbtiType}. The profile should include a catchy, game-themed title (e.g., 'The Strategic Archmage' for INTJ, 'The Valiant Paladin' for ESFJ), a detailed description of their learning strengths and preferences, and a list of actionable study tips.`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: 'A catchy, game-themed title for the learning type.',
            },
            description: {
              type: Type.STRING,
              description: 'A detailed description of the learning style, its strengths, and how this person learns best, using game/fantasy analogies.',
            },
            tips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'A list of 3-5 actionable study tips tailored to this learning style.',
            },
          },
          required: ["title", "description", "tips"],
        },
      },
    });

    const jsonText = response.text.trim();
    const result: LearningTypeResult = JSON.parse(jsonText);
    return result;

  } catch (error) {
    console.error("Error fetching learning style from Gemini API:", error);
    throw new Error("Failed to generate learning style description. The AI Oracle is currently sleeping.");
  }
}

export async function generateLearningStyleImage(title: string, mbtiType: string): Promise<string> {
    const model = 'imagen-3.0-generate-002';
    const prompt = `8-bit pixel art character. Full body portrait of a "${title}" (${mbtiType}). Fantasy RPG character. Simple white background, vibrant colors, classic retro video game style.`;
    
    try {
        const response = await ai.models.generateImages({
            model: model,
            prompt: prompt,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/png',
              aspectRatio: '1:1',
            },
        });
        
        const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
        return `data:image/png;base64,${base64ImageBytes}`;

    } catch (error) {
        console.error("Error generating image from Gemini API:", error);
        throw new Error("Failed to generate character portrait. The AI Artist is taking a break.");
    }
}