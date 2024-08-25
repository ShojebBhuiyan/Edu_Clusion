import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="px-10 flex justify-between items-center">
      <Link href={"/"}>
        <Image
          src="/images/logo-no-bg.png"
          width={200}
          height={200}
          alt={"logo"}
        />
      </Link>
      <div className="flex gap-5 items-center">
        {navItems.map((item, idx) => (
          <>
            <Link key={idx} href={item.href} className="text-lg">
              {item.label}
            </Link>
            {idx <= 2 && (
              <div
                key={idx}
                className="h-[30px] bg-black border border-black"
              />
            )}
          </>
        ))}
        <Button className="text-lg ml-20">Login</Button>
      </div>
    </nav>
  );
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Braille Converter", href: "/braille" },
  { label: "Sign Language Interpreter", href: "/signlanguage" },
  { label: "Flashcard Generator", href: "/flashcard" },
];
