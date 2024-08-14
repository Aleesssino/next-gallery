import Image from "next/image";
import Link from "next/link";
import { fetchData, TFetchType } from "@/lib/data";
import { calculateImageSize, getPlaceholderImageURL } from "@/lib/utils";

export interface fetchImageProps {
  fetchTypeOption: TFetchType;
}

export default async function UnsplashImage({
  fetchTypeOption,
}: fetchImageProps) {
  // fetch Image data on the server
  const imageData = await fetchData(fetchTypeOption);

  const { calculatedWidth, calculatedHeight, mobileSize } =
    calculateImageSize(imageData);
  const blurredImage = getPlaceholderImageURL(imageData.urls.raw);
  const src = `${imageData.urls.raw}?w=${calculatedWidth}`;
  const description = imageData.description || "Image";

  return (
    <>
      <Image
        placeholder={"blur"}
        blurDataURL={blurredImage}
        src={src}
        alt={description}
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
        <a
          href={`https://unsplash.com/@${imageData.user.username}`}
          className="mt-1 hover:border-stone-50 border-b-[1px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          by {imageData.user.username}
        </a>
      </div>
    </>
  );
}
