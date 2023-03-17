import { PostsPreview, SocialMedias, Header } from '@/components';
import { postsManager } from '@/services';
import Image from 'next/image';

export default function Home() {
  postsManager.fetchPosts();

  return (
    <>
      <aside className="flex flex-col items-center justify-between h-full flex-1 py-50">
        <div className="flex flex-col h-full w-full max-w-[31.25rem] items-center justify-between m-auto">
          <Header />
          <div className="max-w-[500px] w-full h-full min-h-[500px]  relative">
            <Image priority src={'/me.png'} fill alt="Thales Gelinger" />
          </div>
          <p>
            I{"'"}m a Mobile developer that always try to improve experience
            with technology for everbody, for users, devs and rubber ducks
          </p>
          <SocialMedias />
        </div>
      </aside>

      <aside className="flex flex-col items-center w-[30rem] px-[1rem]">
        <h3 className="text-[1.25rem]">Recently Published</h3>
        <PostsPreview />
      </aside>
    </>
  );
}
