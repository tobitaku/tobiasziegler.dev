import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Tobias Ziegler | Blog',
    description:
      'Software-Entwickler mit 4 Jahren Web-Erfahrung. Derzeit arbeite ich mit React und TypeScript.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: post.data.author,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>de-de</language>`,
  });
}
