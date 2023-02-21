import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// import { api } from "~/utils/api";
import { allPosts } from "contentlayer/generated";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="jathompson.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen max-w-2xl flex-col items-center justify-center bg-black">
        {allPosts.map((post) => (
          <Link key={post.url} href={`${post.url}`}>
            <p>{post.title}</p>
          </Link>
        ))}
      </main>
    </>
  );
};

export default Home;
