import InfoCard from "@/components/infoCard";
import { TImage, ImageSchema } from "@/models/TImages";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Static fetching - Next Gallery",
};

export default async function Page() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Images");
    }

    const unValidatedImage: TImage = await response.json();

    // Validate the image data against the schema
    const validatedImage = ImageSchema.parse(unValidatedImage);

    // Calculated width & height
    let size = 0;
    if (validatedImage.width > validatedImage.height) {
      size = 600;
    } else {
      size = 350;
    }
    const calculatedWidth = Math.min(size, validatedImage.width);
    const calculatedHeight =
      (calculatedWidth / validatedImage.width) * validatedImage.height;

    return (
      <div className="flex flex-col  px-5 content-center justify-center items-center pt-10">
        <InfoCard> This page fetches and caches data at build time.</InfoCard>

        <Image
          src={validatedImage.urls.raw}
          alt={validatedImage.description || "Image"}
          width={calculatedWidth}
          height={calculatedHeight}
          className={`w-[${calculatedWidth}] h-[${calculatedHeight}] rounded-2xl shadow-white shadow-sm `}
        />

        <p className="mt-2 text-lg font-bold md:px-32">
          {validatedImage.description}
        </p>
        <Link
          href={`/users/${validatedImage.user.username}`}
          className="mt-1 hover:border-stone-50 border-b-[1px]"
        >
          by {validatedImage.user.username}
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Error fetching or validating image data:", error);

    // You might want to handle errors more gracefully, e.g., showing an error message on the UI
    return (
      <div className="mt-7 flex justify-center items-center">
        Error fetching images
      </div>
    );
  }
}
