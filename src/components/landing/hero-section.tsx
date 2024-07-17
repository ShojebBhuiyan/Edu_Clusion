import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="flex container">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold">Education for All</h1>
        <p className="text-2xl">
          Edu_Clusion is a platform that ensures inclusion in edcuation for
          physically challenged people with the help of artificial intellgience
        </p>
      </div>

      <div className="relative w-full">
        <Image
          src="/images/hero-image.jpg"
          height={300}
          width={300}
          alt={"Hero Image"}
          className="opacity-50 absolute left-1/4 z-0"
        />
        <Image
          src="/images/hero-image.jpg"
          height={300}
          width={350}
          alt={"Hero Image"}
          className="absolute top-40 left-1/2 z-10"
        />
        <Image
          src="/images/hero-image.jpg"
          height={300}
          width={300}
          alt={"Hero Image"}
          className="opacity-50 absolute left-3/4 z-0"
        />
      </div>
    </div>
  );
}
