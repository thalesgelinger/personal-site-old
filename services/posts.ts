import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const POSTS_PATH = join(process.cwd(), 'posts');

type Post = {
  metadata: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    cover: string;
  };
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

class PostsManager {
  #posts: Record<string, Post>;

  constructor() {
    this.#posts = {};
    this.fetchPosts();
  }

  get posts() {
    return Object.values(this.#posts);
  }

  async fetchPosts() {
    const postsFiles = readdirSync(POSTS_PATH);
    const posts = await Promise.all(
      postsFiles.map(async (filename) => {
        const fileContent = readFileSync(`./posts/${filename}`, 'utf-8');
        const { content, data: metadata } = matter(fileContent);
        const html = await serialize(content, {
          mdxOptions: {
            rehypePlugins: [rehypeCodeTitles, rehypePrism],
          },
        });

        return {
          metadata: {
            ...metadata,
            slug: filename.replace('.mdx', ''),
          },
          content: html,
        };
      }),
    );

    this.#posts = posts.reduce(
      (acc, cur) => ({ ...acc, [cur.metadata.slug]: cur }),
      {},
    );
  }

  getPostContent = (slug: string) => {
    return this.#posts[slug];
  };
}

export const postsManager = new PostsManager();
