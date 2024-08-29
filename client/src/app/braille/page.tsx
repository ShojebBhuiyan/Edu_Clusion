import BrailleConverter from "@/components/braille-converter/braille-converter";

export default function BraillePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <BrailleConverter />
    </div>
  );
}
