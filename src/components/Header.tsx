import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center text-white lg:justify-between">
      <div className="my-4 hidden py-2 lg:block">Jarrett Thompson</div>
      <div className="flex px-0 py-2 lg:px-4">
        <Link className="my-4 mx-4 text-white lg:mx-8" href="/">
          Home
        </Link>
        <Link className="my-4 mx-4 text-white lg:mx-8" href="#about-section">
          About
        </Link>
        <Link className="my-4 mx-4 text-white lg:mx-8" href="/#blog-section">
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
