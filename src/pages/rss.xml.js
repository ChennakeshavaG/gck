import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';

// Generates /rss.xml at build time so readers can subscribe.
export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'gck.sh',
    description: 'Writing and notes by Chennakeshava Gudapalli.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
