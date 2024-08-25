import FeatureWrapper from "./feature-wrapper";

export default function SignLanguageCTA() {
  return (
    <FeatureWrapper
      imageSrc="/images/help.png"
      imageAlt="Sign Language"
      title="Sign Language Interpreter"
      description="Upload a video and we will generate a sign language for the audio of the content for you!"
      url="/signlanguage"
      available
    />
  );
}
