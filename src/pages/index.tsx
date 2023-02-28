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
      <main className="flex min-h-screen bg-black">
        <div className="container mx-auto">
          {allPosts.map((post) => (
            <Link key={post.url} href={`${post.url}`}>
              <p className="text-white">{post.title}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
