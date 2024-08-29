"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { convertToBraille, downloadBraille } from "@/lib/braille";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface FlashcardProps {
  index: number;
  question: string;
  answer: string;
}

export default function FlashCard({ index, question, answer }: FlashcardProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  // const [brailleMode, setBrailleMode] = useState(false);

  return (
    <Card className="w-[300px] py-5">
      <CardHeader>
        <CardTitle className="flex justify-between">
          {`${index + 1}`}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
                  onClick={() => {
                    const content = `Question: ${question}\nAnswer: ${answer}`;
                    const brailleText = convertToBraille(content);
                    if (brailleText) {
                      downloadBraille(
                        brailleText,
                        `flashcard-${index + 1}.brt`
                      );
                      // setBrailleMode(!brailleMode);
                    }
                  }}
                >
                  <Image
                    src={"/images/braille-toggle.png"}
                    alt={"Braille Toggle"}
                    width={50}
                    height={50}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download as brt file</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-5 h-full">
        <>
          <p className="text-lg font-semibold">
            {showAnswer ? answer : question}
            {/* {showAnswer
              ? brailleMode
                ? convertToBraille(answer)
                : answer
              : brailleMode
              ? convertToBraille(question)
              : question} */}
          </p>
          <Button className="w-fit" onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? "Show Question" : "Show answer"}
          </Button>
        </>
      </CardContent>
    </Card>
  );
}
