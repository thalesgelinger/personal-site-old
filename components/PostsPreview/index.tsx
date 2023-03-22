import { postsManager } from '@/services';
import Link from 'next/link';

type PostsPreviewProps = {
  onPostsPage?: boolean;
};
export const PostsPreview = ({ onPostsPage = false }: PostsPreviewProps) => {
  const posts = onPostsPage
    ? postsManager.posts
    : [...postsManager.posts].slice(0, 4);
  return (
    <>
      <article className="bg-gray w-full shadow-md shadow-lightGray flex flex-col justify-around">
        {posts.map(({ metadata }, i) => {
          return (
            <Link
              href={`/posts/${metadata.slug}`}
              key={i}
              className="grid grid-cols-5 gap-3 p-[25px]"
            >
              <img
                src={metadata.cover}
                alt={metadata.title}
                className="col-span-2 bg-black mr-6 object-contain h-full"
              />
              <div className="col-span-3 flex flex-col justify-center">
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
