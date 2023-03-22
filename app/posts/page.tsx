import { Header, PostsPreview, SocialMedias } from '@/components';

export default function Posts() {
  return (
    <>
      <div className="col-span-3">
        <Header showMe />
        <div className="mt-[50px]">
          <PostsPreview onPostsPage />
        </div>
      </div>
      <article className="col-span-2">
        <SocialMedias />
      </article>
    </>
  );
}
