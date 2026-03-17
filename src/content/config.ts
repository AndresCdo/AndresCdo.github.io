import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string().optional(),
    date:        z.coerce.date(),
    // Accept categories as either a string (legacy "tag1 tag2") or array
    categories:  z.union([
      z.array(z.string()),
      z.string().transform(s => s.trim().split(/\s+/)),
    ]).optional().default([]),
    draft:       z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
