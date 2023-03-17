import { postsManager } from '@/services';
import Link from 'next/link';

type PostsPreviewProps = {
  onPostsPage?: boolean;
};
export const PostsPreview = ({ onPostsPage = false }: PostsPreviewProps) => {
  const posts = onPostsPage
    ? postsManager.posts
    : [...postsManager.posts].slice(0, 3);
  return (
    <>
      <article className="bg-gray w-full shadow-md shadow-lightGray flex-1 flex flex-col justify-around ">
        {posts.map(({ metadata, content }, i) => {
          return (
            <Link href={`/posts/${metadata.slug}`} key={i} className="flex p-6">
              <div className="w-[12.5rem] h-[9.375rem] bg-black mr-6" />
              <div className="flex flex-1 flex-col justify-center">
                <h1>{metadata.title}</h1>
                <p className=" shadow-md shadow-lightGray bg-textBackground p-2">
                  {metadata.excerpt}
                </p>
                <span className="text-right">Read {'>'}</span>
              </div>
            </Link>
          );
        })}
      </article>
      {!onPostsPage && (
        <Link href={'/posts'} className="w-full text-right">
          View All {'>'}
        </Link>
      )}
    </>
  );
};
