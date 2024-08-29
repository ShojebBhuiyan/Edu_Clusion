"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

type response = {
  question: string;
  answer: string;
}[];

export async function generateFlashcard(text: string, amount: number) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt =
    "You are a flashcard app. You are helping students study for their exams. You are generating " +
    amount +
    " flashcards for the following text: " +
    text +
    '.\n The flashcard should be concise and easy to understand. You need to generate the question and the answer of the flashcards only. You must respond in a JSON file. Do not generate a code block. The JSON will be structured in this way: [{"question": "What is the capital of France?", "answer": "Paris"}].';

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return JSON.parse(result.response.text()) as response;
}
