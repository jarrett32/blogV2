import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// import { api } from "~/utils/api";
import { allPosts } from "contentlayer/generated";
import Header from "~/components/Header";
import Title from "~/components/Title";
import Project from "~/components/Project";
import About from "~/components/About";
import BlogHeader from "~/components/BlogHeader";

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

          {/* Add wires svg image */}
          {/* <Image src="/util/wires.svg" alt="wires" width={400} height={200} /> */}

          <Project />

          <div className="p-8"></div>

          {allPosts.map((post: Post) => (
            <BlogHeader key={post.title} post={post} />
            // <Link key={post.url} href={`${post.url}`}>
            //   <p className="text-white">{post.title}</p>
            // </Link>
          ))}

          <div className="p-16"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
