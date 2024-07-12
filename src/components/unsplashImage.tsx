import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TImage } from "@/models/TImages";

import { fetchData, FetchType } from "@/lib/data";
import { calculateImageSize } from "@/lib/utils";

export interface fetchProps {
  fetchType: FetchType;
}

export default async function UnsplashImage({ fetchType }: fetchProps) {
  const imageData = await fetchData(fetchType);
  const { calculatedWidth, calculatedHeight } = calculateImageSize(imageData);
  return (
    <>
      <Image
        src={imageData.urls.raw}
        alt={imageData.description || "Image"}
        width={calculatedWidth}
        height={calculatedHeight}
        className={`w-[${calculatedWidth}] h-[${calculatedHeight}] rounded-2xl shadow-white shadow-sm `}
        priority
      />
      <div className="text-center items-center md:px-52 pb-10">
        <p className="mt-2 text-lg font-bold md:px-32">
          {imageData.description}
        </p>
        <Link
          href={`/users/${imageData.user.username}`}
          className="mt-1 hover:border-stone-50 border-b-[1px]"
        >
          by {imageData.user.username}
        </Link>
      </div>
    </>
  );
}
