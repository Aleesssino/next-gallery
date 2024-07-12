import { ImageSchema, TImage } from "@/models/TImages";

// fetch static data
export async function fetchStaticImageData() {
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
    return validatedImage;
  } catch (error) {
    console.error("Error fetching or validating image data:", error);

    throw new Error("Failed to fetch data.");
  }
}

// fetch **dynamic** image data
export async function fetchDynamicImageData() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
      // {cache: 'no-store'} to prevent the response from being cached
      { cache: "no-store" },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Images");
    }

    const unValidatedImage: TImage = await response.json();

    // Validate the image data against the schema
    const validatedImage = ImageSchema.parse(unValidatedImage);
    return validatedImage;
  } catch (error) {
    console.error("Error fetching or validating image data:", error);

    throw new Error("Failed to fetch data.");
  }
}

// conditional fetch
export type FetchType = "static" | "dynamic";
export async function fetchData(fetchType: FetchType): Promise<TImage> {
  switch (fetchType) {
    case "static":
      return fetchStaticImageData();
    case "dynamic":
      return fetchDynamicImageData();
    default:
      throw new Error(`Unsupported fetch type: ${fetchType}`);
  }
}
