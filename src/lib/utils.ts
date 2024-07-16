import { TImage } from "@/models/TImages";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateImageSize = (validatedImage: TImage) => {
  let size = 0;
  if (validatedImage.width > validatedImage.height) {
    size = 900;
  } else {
    size = 525;
  }

  const calculatedWidth = Math.min(size, validatedImage.width);
  const calculatedHeight =
    (calculatedWidth / validatedImage.width) * validatedImage.height;
  const mobileSize = Math.min(size / 1.5, validatedImage.width);

  return { calculatedWidth, calculatedHeight, mobileSize };
};
