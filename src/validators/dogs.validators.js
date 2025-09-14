import { z } from "zod";

export const dogSearchSchema = z.object({
  page: z.coerce.number().int().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
  location: z.string().min(2).optional(),
  distance: z.coerce.number().int().min(1).max(500).optional(),
  breed: z.string().optional(),
  age: z.enum(["baby", "young", "adult", "senior"]).optional(),
  size: z.enum(["small", "medium", "large", "xlarge"]).optional(),
  gender: z.enum(["male", "female", "unknown"]).optional(),
  good_with_children: z.coerce.boolean().optional()
});
