'use client';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import './styles.css';

type MdProps = {
    content: MDXRemoteSerializeResult<
        Record<string, unknown>,
        Record<string, unknown>
    >;
};

export const Md = ({ content }: MdProps) => {
    return (
        <MDXRemote
            {...content}
            components={{
                h1: ({ children }) => {
                    return <h1 className="text-[2rem]">{children}</h1>;
                },
                h2: ({ children }) => {
                    return <h2 className="text-[1.5rem]">{children}</h2>;
                },
                h3: ({ children }) => {
                    return <h3 className="text-[1.17rem]">{children}</h3>;
                },
                h4: ({ children }) => {
                    return <h4 className="text-[1rem]">{children}</h4>;
                },
                h5: ({ children }) => {
                    return <h5 className="text-[.83rem]">{children}</h5>;
                },
                h6: ({ children }) => {
                    return <h6 className="text-[.67rem]">{children}</h6>;
                },
            }}
        />
    );
};
