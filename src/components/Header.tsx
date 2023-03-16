import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between text-white">
      <div className="my-4 hidden py-2 lg:block">Jarrett Thompson</div>
      <div className="flex p-4">
        <Link className="my-4 mx-8 text-white" href="/">
          Home
        </Link>
        <Link className="my-4 mx-8 text-white" href="#about-section">
          About
        </Link>
        <Link className="my-4 mx-8 text-white" href="/#blog-section">
          Blog
        </Link>
        <Link
          className="lg:text-md my-2 mx-0 rounded-sm border border-secondary bg-primary-dark p-2 text-sm text-white lg:mx-8"
          href="#projects-section"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
