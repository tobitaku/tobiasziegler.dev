import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    bannerImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  posts: postsCollection,
};
