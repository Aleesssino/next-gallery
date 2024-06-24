import { TImage, ImageSchema } from "@/models/TImages";
import Image from "next/image";

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

    console.log(validatedImage);

    // Calculated width & height
    const calculatedWidth = Math.min(400, validatedImage.width);
    const calculatedHeight =
      (calculatedWidth / validatedImage.width) * validatedImage.height;

    return (
      <div className="flex flex-col pt-32 px-5 content-center justify-center items-center">
        <Image
          src={validatedImage.urls.raw}
          alt={validatedImage.description || "Image"}
          width={calculatedWidth}
          height={calculatedHeight}
          className={`w-[${calculatedWidth}] h-[${calculatedHeight}] rounded-2xl`}
        />

        <p className="mt-2 text-lg font-bold">{validatedImage.description}</p>
        <p className="mt-1">{validatedImage.user.username}</p>
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
