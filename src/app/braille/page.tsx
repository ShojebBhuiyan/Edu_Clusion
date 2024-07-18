// pages/index.js
import BrailleConverter from "@/components/braille-convertor/braille-convertor";  

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <BrailleConverter />
    </div>
  );
}

export default page;