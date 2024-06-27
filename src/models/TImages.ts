import { z } from "zod";

export const ImageSchema = z.object({
  id: z.string(),
  description: z.string().nullable().optional(),
  color: z.string(),
  user: z.object({ username: z.string() }),
  urls: z.object({ raw: z.string() }),
  width: z.number(),
  height: z.number(),
});

export const Images = z.array(ImageSchema);
export type TImages = z.infer<typeof Images>;
export type TImage = z.infer<typeof ImageSchema>;
