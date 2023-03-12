import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// import { api } from "~/utils/api";
import { allPosts } from "contentlayer/generated";
import Header from "~/components/Header";
import Title from "~/components/Title";
import Project from "~/components/Project";
import About from "~/components/About";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jarrett Thompson</title>
        <meta name="description" content="jathompson.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-black">
        <div className="container mx-auto px-4">
          <Header />
          <Title />

          <About />

          <Project />

          <div className="p-16"></div>

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
