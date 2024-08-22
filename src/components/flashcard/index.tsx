"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface FlashcardProps {
  index: number;
  question: string;
  answer: string;
}

export default function FlashCard({ index, question, answer }: FlashcardProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>{`${index + 1}`}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-5 h-full">
        <>
          <p className="text-lg font-semibold">
            {showAnswer ? answer : question}
          </p>
          <Button className="w-fit" onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? "Show Question" : "Show answer"}
          </Button>
        </>
      </CardContent>
    </Card>
  );
}
