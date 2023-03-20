/* eslint-disable @next/next/no-img-element */
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
        <link rel="stylesheet"></link>
      </Head>
      <main className="min-h-screen bg-black">
        <div className="container relative mx-auto px-4">
          <Header />
          <Title />

          <div className="anchor" id="about-section"></div>
          <About />

          {/* Add wires svg image */}
          {/* <Image src="/util/wires.svg" alt="wires" width={400} height={200} /> */}
          <div className="p-8"></div>
          <div className="anchor" id="projects-section"></div>
          <h1 className="text-center text-4xl font-bold text-white">
            Projects
          </h1>
          <Project />

          <div className="p-8"></div>

          <h1 className="text-center text-4xl font-bold text-white">Blog</h1>
          <div className="anchor" id="blog-section"></div>
          {allPosts.map((post: Post) => (
            <BlogHeader key={post.title} post={post} />
          ))}

          <div className="p-32"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
