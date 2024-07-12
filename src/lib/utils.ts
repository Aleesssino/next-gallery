import { TImage } from "@/models/TImages";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateImageSize = (validatedImage: TImage) => {
  let size = 0;
  if (validatedImage.width > validatedImage.height) {
    size = 600;
  } else {
    size = 350;
  }

  const calculatedWidth = Math.min(size, validatedImage.width);
  const calculatedHeight =
    (calculatedWidth / validatedImage.width) * validatedImage.height;

  return { calculatedWidth, calculatedHeight };
};
