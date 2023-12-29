import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    created: z.date(),
    updated: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    lang: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = {
  posts: postCollection
};
