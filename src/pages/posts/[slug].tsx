import Head from "next/head";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import type { GetStaticPropsContext } from "next";
import { Mdx } from "~/components/MDX";

interface PostLayoutProps {
  post: Post;
}

const PostLayout: React.FC<PostLayoutProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <Link href={`/`}>
          <p className="text-white">Home</p>
        </Link>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold text-white">{post.title}</h1>
        </div>
        <Mdx post={post} />
      </article>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>
): Promise<{ props: PostLayoutProps }> {
  const { slug } = context.params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  return {
    props: {
      post,
    },
  };
}

export default PostLayout;
