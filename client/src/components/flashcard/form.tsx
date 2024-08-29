"use client";

import { useState } from "react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { generateFlashcard } from "@/actions/flashcard/generate";

interface FlashcardFormProps {
  setFlashcards: (flashcards: { question: string; answer: string }[]) => void;
}

export default function FlashcardForm({ setFlashcards }: FlashcardFormProps) {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  return (
    <div className="max-w-lg p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">
        Flashcard Generator
      </h1>
      <Textarea
        className="w-full h-32 p-4 border rounded-lg mb-4 text-black"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Enter text here"
      />
      <div className="flex justify-between">
        <Select
          onValueChange={(value) => {
            setAmount(parseInt(value));
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select amount" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <SelectItem key={index} value={`${index + 1}`}>
                {index + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={async () => {
            const flashcards = await generateFlashcard(text, amount);
            setFlashcards(flashcards);
          }}
        >
          Generate
        </Button>
      </div>
    </div>
  );
}
