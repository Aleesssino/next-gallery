import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TImage } from "@/models/TImages";

export interface UnsplashImageProps {
  imageData: TImage;
  Width: number;
  Height: number;
}

import { FC } from "react";

const UnsplashImage: FC<UnsplashImageProps> = ({
  imageData,
  Width,
  Height,
}) => {
  return (
    <>
      <Image
        src={imageData.urls.raw}
        alt={imageData.description || "Image"}
        width={Width}
        height={Height}
        className={`w-[${Width}] h-[${Height}] rounded-2xl shadow-white shadow-sm `}
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
};

export default UnsplashImage;
