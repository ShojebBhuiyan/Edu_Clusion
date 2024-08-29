import React from "react";
import FeatureWrapper from "./feature-wrapper";

export default function TtS_StT_CTA() {
  return (
    <FeatureWrapper
      imageSrc="/images/speech-synthesis.png"
      imageAlt="Text to Speech"
      title="Text-to-Speech and vice-versa"
      description="Text can be converted to speech for the visually impaired and speech can be converted to text for the physically impaired."
      available={false}
    />
  );
}
