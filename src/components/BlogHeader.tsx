import type { Post } from "contentlayer/generated";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { projectVariants } from "../utils/motionVariants";

import moment from "moment";

type BlogHeaderProps = {
  post: Post;
};

const BlogHeader = (props: BlogHeaderProps) => {
  const post: Post = props.post;

  const [ref, inView] = useInView({
    rootMargin: "-30% 0px -30% 0px",
    threshold: 0.5, // half of item height
  });

  return (
    <div>
      <Link href={post.url}>
        <motion.div
          className="mt-8 rounded-xl border border-secondary border-opacity-25  bg-black-light px-8 py-8 transition duration-300 ease-in-out hover:border-opacity-60 hover:bg-opacity-30"
          ref={ref}
          initial="initial"
          animate={inView ? "inView" : "notInView"}
          whileHover="hover"
          variants={projectVariants}
          transition={{ duration: 0.1 }}
        >
          <div className="flex  flex-wrap items-center justify-between lg:flex-row">
            <h2 className="text-2xl font-bold text-white">{post.title}</h2>
            <div className="text-white">
              {moment(post.date).format("MMMM D, YYYY")}
            </div>
          </div>
          {post.description && (
            <div className="px-4 text-gray-500">{post.description}</div>
          )}
        </motion.div>
      </Link>
    </div>
  );
};

export default BlogHeader;
