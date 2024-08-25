import React from "react";
import FeatureWrapper from "./feature-wrapper";

export default function FlashcardCTA() {
  return (
    <FeatureWrapper
      imageSrc="/images/flash-cards.png"
      imageAlt="Flashcard"
      title="Flashcard Generator"
      description="Upload text content (e.g. A chapter of your book) and we will generate flashcards for you to study efficiently."
      url="/flashcard"
      available
    />
  );
}
