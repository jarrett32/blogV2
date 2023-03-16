import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (props) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function nextImage(props) {
  return <Image alt={props.alt} {...props} />;
}

const components = {
  a: CustomLink,
  Image: nextImage,
};

interface MdxProps {
  post: Post;
}

export function Mdx({ post }: MdxProps) {
  const Component = useMDXComponent(post.body.code);

  return (
    <article className="prose text-white">
      <Component components={{ ...components }} />
    </article>
  );
}
