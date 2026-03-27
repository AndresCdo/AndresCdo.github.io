import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  // Sort newest first
  const sorted = posts.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );

  return rss({
    title:       'Andres Caicedo — DevOps & Platform Engineering Blog',
    description: 'Practical notes on CI/CD pipelines, Linux operations, and Python automation.',
    site:        context.site,
    items: sorted.map((post) => ({
      title:       post.data.title,
      description: post.data.description,
      pubDate:     new Date(post.data.date),
      link:        `/blog/${post.slug}/`,
      categories:  Array.isArray(post.data.categories)
        ? post.data.categories
        : post.data.categories?.split(/\s+/) ?? [],
    })),
    customData: `<language>en-us</language>`,
    stylesheet: false,
  });
}
