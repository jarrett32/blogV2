/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";

// import { api } from "~/utils/api";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import About from "~/components/About";
import BlogHeader from "~/components/BlogHeader";
import Header from "~/components/Header";
import Project from "~/components/Project";
import Title from "~/components/Title";

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
        <div className="container relative mx-auto max-w-4xl px-4">
          <p>This portfolio has moved to </p>{" "}
          <a href="https://jathompson.dev" className="text-blue underline">
            jathompson.dev
          </a>
          {/* <Header />
          <Title />

          <div className="anchor" id="about-section"></div>
          <About />

          <div className="p-8"></div>
          <div className="anchor" id="projects-section"></div>
          <h1 className="text-center text-4xl font-bold text-white">
            Projects/Experience
          </h1>
          <Project />

          <div className="p-8"></div>

          <h1 className="text-center text-4xl font-bold text-white">Blog</h1>
          <div className="anchor" id="blog-section"></div>
          {allPosts.map((post: Post) => (
            <BlogHeader key={post.title} post={post} />
          ))}

          <div className="p-32"></div> */}
        </div>
      </main>
    </>
  );
};

export default Home;
