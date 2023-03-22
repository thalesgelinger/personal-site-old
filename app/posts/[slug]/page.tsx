import { PostsPreview, SocialMedias, Header } from '@/components';
import { Md } from '@/components/Md';
import { postsManager } from '@/services';

type PostProps = {
    params: {
        slug: string;
    };
};

export default function Post({ params }: PostProps) {
    const { content } = postsManager.getPostContent(params.slug);
    return (
        <>
            <article className="h-full col-span-3 flex flex-col ">
                <Header showMe />
                <Md content={content} />
            </article>
            <div className="min-[1200px]:col-span-2 col-span-3 h-full  max-h-[720px] flex flex-col ">
                <SocialMedias />
                <h2 className="text-center mt-12 text-[1.25rem]">Other publications</h2>
                <PostsPreview />
            </div>
        </>
    );
}
