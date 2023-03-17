import { readdirSync, readFileSync } from 'fs';
import * as matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { join } from 'path';

const POSTS_PATH = join(process.cwd(), 'posts');

class PostsManager {
  #posts;

  constructor() {
    this.#posts = {};
    this.fetchPosts();
  }

  get posts() {
    return Object.values(this.#posts);
  }

  fetchPosts() {
    const postsFiles = readdirSync(POSTS_PATH);
    const posts = postsFiles.map((filename) => {
      const fileContent = readFileSync(`./posts/${filename}`, 'utf-8');
      const { content, data: metadata } = matter(fileContent);
      const htmlContent = remark()
        .use(remarkHtml)
        .processSync(content)
        .toString();

      return {
        metadata: {
          ...metadata,
          slug: filename.replace('.mdx', ''),
        },
        content,
      };
    });

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
