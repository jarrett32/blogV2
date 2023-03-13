import React from "react";
import Link from "next/link";

import moment from "moment";

type BlogHeaderProps = {
  post: Post;
};

const BlogHeader = (props: BlogHeaderProps) => {
  const post: Post = props.post;

  return (
    <div>
      <Link href={`/`}>
        <div className="mt-8 rounded-xl border border-secondary border-opacity-25  bg-black-light px-8 py-8 transition duration-300 ease-in-out hover:border-opacity-60 hover:bg-opacity-30">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{post.title}</h2>
            <div className="text-white">
              {moment(post.date).format("MMMM D, YYYY")}
            </div>
          </div>
          {post.description && (
            <div className="text-gray-500">{post.description}</div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default BlogHeader;
