import React from "react";
import SignLanguageCTA from "./sign-language-cta";
import FlashcardCTA from "./flashcard-cta";
import BrailleCTA from "./braille-cta";
import TtS_StT_CTA from "./tts-stt-cta";

export default function FeaturesSection() {
  return (
    <div className="text-center bg-white bg-opacity-50 rounded mb-40">
          <h1 className="text-6xl font-bold pb-20">What we offer</h1>
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
      <SignLanguageCTA />
      <FlashcardCTA />
      <BrailleCTA />
      <TtS_StT_CTA />
    </section>
    </div>
  );
}
