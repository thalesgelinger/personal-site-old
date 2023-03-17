import { Header, PostsPreview, SocialMedias } from '@/components';

export default function Posts() {
  return (
    <main className="flex flex-col w-full">
      <div className="flex w-full">
        <div className="flex-1 px-[3.125rem]">
          <Header showMe />
        </div>

        <div className="flex flex-col w-[30rem] ">
          <SocialMedias />
        </div>
      </div>
      <article className="p-[3.125rem] flex w-3/5 flex-col justify-center">
        <PostsPreview onPostsPage />
      </article>
    </main>
  );
}
