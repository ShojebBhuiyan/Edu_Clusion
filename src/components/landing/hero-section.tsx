import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 flex justify-center px-20 items-center z-10">
        <div className="text-center bg-white bg-opacity-50 rounded mb-40">
          <h1 className="text-6xl font-bold">Education For ALL</h1>
          <p className="text-2xl mt-4">
            Edu_Clusion is a platform that ensures inclusion in education for
            physically challenged people with the help of artificial intelligence.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <Image
          src="/images/hero-image.jpg"
          height={300}
          width={300}
          alt={"Hero Image"}
          className="opacity-30 absolute left-1/4 z-0 top-10"
        />
        <Image
          src="/images/hero-image.jpg"
          height={300}
          width={350}
          alt={"Hero Image"}
          className="absolute opacity-15 mr-50 top-20 left-1/3 z-0"
        />
        <Image
          src="/images/hero-image.jpg"
          height={300}
          width={300}
          alt={"Hero Image"}
          className="opacity-30 absolute left-1/2 top-10 z-0"
        />
      </div>
    </div>
  );
}
