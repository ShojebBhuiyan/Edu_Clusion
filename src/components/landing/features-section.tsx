import React from "react";
import SignLanguageCTA from "./sign-language-cta";
import FlashcardCTA from "./flashcard-cta";
import BrailleCTA from "./braille-cta";
import TtS_StT_CTA from "./tts-stt-cta";

export default function FeaturesSection() {
  return (
    <section className="container pt-[10rem] sm:pt-[40rem] grid grid-cols-1 lg:grid-cols-2 gap-10">
      <SignLanguageCTA />
      <FlashcardCTA />
      <BrailleCTA />
      <TtS_StT_CTA />
    </section>
  );
}
