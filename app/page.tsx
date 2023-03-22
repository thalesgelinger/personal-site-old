import { PostsPreview, SocialMedias, Header } from '@/components';
import { postsManager } from '@/services';
import Image from 'next/image';

export default function Home() {
  postsManager.fetchPosts();

  return (
    <>
      <aside className="h-full col-span-3 flex flex-col items-center justify-between ">
        <div className="flex flex-col w-full max-w-[500px] items-center justify-between m-auto ">
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

      <aside className="col-span-2 flex flex-col items-center h-[720px]">
        <h3 className="text-[1.25rem]">Recently Published</h3>
        <PostsPreview />
      </aside>
    </>
  );
}
