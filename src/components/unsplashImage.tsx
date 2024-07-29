import Image from "next/image";
import Link from "next/link";
import { fetchData, FetchType } from "@/lib/data";
import { calculateImageSize, getPlaceholderImageURL } from "@/lib/utils";

export interface fetchProps {
  fetchType: FetchType;
}

export default async function UnsplashImage({ fetchType }: fetchProps) {
  const imageData = await fetchData(fetchType);
  const { calculatedWidth, calculatedHeight, mobileSize } =
    calculateImageSize(imageData);

  return (
    <>
      <Image
        placeholder={"blur"}
        blurDataURL={getPlaceholderImageURL(imageData.urls.raw)}
        loading="lazy"
        src={`${imageData.urls.raw}?w=${calculatedWidth}`}
        alt={imageData.description || "Image"}
        className={`w-[${calculatedWidth}] h-[${calculatedHeight}] rounded-2xl shadow-white shadow-sm `}
        sizes={`(max-width: 768px) ${mobileSize}px, (max-width: 1200px) ${calculatedWidth}px, ${calculatedWidth}px`}
        width={calculatedWidth}
        height={calculatedHeight}
        priority={true}
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
