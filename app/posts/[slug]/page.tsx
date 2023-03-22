import { PostsPreview, SocialMedias, Header } from '@/components';
import { postsManager } from '@/services';
import Markdown from 'markdown-to-jsx';

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
        <Markdown
          className="mt-[3.125rem]"
          options={{
            overrides: {
              h1: {
                component: ({ children }) => {
                  return <h1 className="text-[2rem]">{children}</h1>;
                },
              },
              h2: {
                component: ({ children }) => {
                  return <h2 className="text-[1.5rem]">{children}</h2>;
                },
              },
              h3: {
                component: ({ children }) => {
                  return <h3 className="text-[1.17rem]">{children}</h3>;
                },
              },
              h4: {
                component: ({ children }) => {
                  return <h4 className="text-[1rem]">{children}</h4>;
                },
              },
              h5: {
                component: ({ children }) => {
                  return <h5 className="text-[.83rem]">{children}</h5>;
                },
              },
              h6: {
                component: ({ children }) => {
                  return <h6 className="text-[.67rem]">{children}</h6>;
                },
              },
            },
          }}
        >
          {content}
        </Markdown>
      </article>
      <div className="col-span-2 h-full  max-h-[720px] flex flex-col ">
        <SocialMedias />
        <h2 className="text-center mt-12 text-[1.25rem]">Other publications</h2>
        <PostsPreview />
      </div>
    </>
  );
}
