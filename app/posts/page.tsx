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
      <article className=" min-[1200px]:col-span-2 col-span-3">
        <SocialMedias />
      </article>
    </>
  );
}
