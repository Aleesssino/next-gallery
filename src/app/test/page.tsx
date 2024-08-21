import { GalleryImageSchema, ImageSchema, TGallery } from "@/models/TImages";
import Image from "next/image";
export default async function Page() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=7&client_id=${process.env.UNSPLASH_ACCESS_KEY}&w=600&dpr=2`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Images... status: ${response.status}`);
  }

  const unValidatedImages: TGallery = await response.json();

  // Validate the image data against the schema
  const galleryImages = GalleryImageSchema.parse(unValidatedImages);
  return (
    <div className="text-center pt-32 px-5">
      {galleryImages.map((gImage) => (
        //     <p key={gImage.id}>{gImage.id || "No description available"}</p>
        <div key={gImage.id}>
          <Image
            src={gImage.urls.raw}
            alt="gallery image"
            height={gImage.height}
            width={gImage.width || 60}
          />
        </div>
      ))}
    </div>
  );
}
