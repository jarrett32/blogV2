import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between text-white">
      <div className="my-4 py-2">Jarrett Thompson</div>
      <div className="flex p-4">
        <Link className="my-4 mx-8 text-white" href="/">
          Home
        </Link>
        <Link className="my-4 mx-8 text-white" href="/">
          About
        </Link>
        <Link className="my-4 mx-8 text-white" href="/">
          CV
        </Link>
        <Link
          className="my-2 mx-8 rounded-sm border border-secondary bg-primary-dark p-2 text-white"
          href="/"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
