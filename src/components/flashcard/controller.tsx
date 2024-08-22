"use client";

import FlashcardForm from "./form";
import FlashCard from ".";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function FlashcardController() {
  const [flashcards, setFlashcards] = useState<
    {
      question: string;
      answer: string;
    }[]
  >([]);

  return (
    <section className="container flex w-3/4 items-center justify-center gap-48">
      <FlashcardForm setFlashcards={setFlashcards} />
      {flashcards.length === 0 ? (
        <div className="bg-white p-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-black">
            No flashcards to show
          </h1>
        </div>
      ) : (
        <Carousel
          className="w-full max-w-xs"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {flashcards.length > 0 &&
              flashcards.map((flashcard, index) => (
                <CarouselItem key={index}>
                  <FlashCard
                    index={index}
                    question={flashcard.question}
                    answer={flashcard.answer}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </section>
  );
}
