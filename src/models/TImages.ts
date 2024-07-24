import { z } from "zod";

export const ImageSchema = z.object({
  id: z.string(),
  description: z.string().nullable().optional(),
  user: z.object({ username: z.string() }),
  urls: z.object({ raw: z.string() }),
  width: z.number(),
  height: z.number(),
});

export const GalleryImageSchema = z.array(ImageSchema);
export type Tgallery = z.infer<typeof GalleryImageSchema>;
export type TImage = z.infer<typeof ImageSchema>;
