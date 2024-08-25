import React from "react";
import FeatureWrapper from "./feature-wrapper";

export default function BrailleCTA() {
  return (
    <FeatureWrapper
      imageSrc="/images/braille.png"
      imageAlt="Braille"
      title="Text-to-Braille Converter"
      description="Any text including our generated flashcards can be converted into Braille and downloaded as a .brt file ready for print."
      url="/braille"
      available
    />
  );
}
