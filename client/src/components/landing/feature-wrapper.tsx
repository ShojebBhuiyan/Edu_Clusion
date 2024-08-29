import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface FeatureWrapperProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  url?: string;
  available: boolean;
}

export default function FeatureWrapper({
  imageSrc,
  imageAlt,
  title,
  description,
  url,
  available,
}: FeatureWrapperProps) {
  return (
    <div className="flex justify-center items-center gap-40">
      <Card className="w-3/5 shadow-2xl">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <Image src={imageSrc} alt={imageAlt} height={200} width={200} />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5 text-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-xl">{description}</p>
          {available ? (
            <Link href={url!}>
              <Button className="text-xl">Try it now!</Button>
            </Link>
          ) : (
            <div>
              <Button disabled className="text-xl">
                Coming Soon
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
