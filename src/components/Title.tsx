import React from "react";
import data from "../data/title.json";

const Title = () => {
  return (
    <div>
      <div className="p-4 lg:p-16"></div>
      <h1 className="my-4 text-4xl font-extrabold text-white lg:text-6xl">
        {data.title}
      </h1>
      <p className="my-4 w-full text-gray-500 lg:w-1/2">{data.subtitle}</p>
      <button className="pointer mt-8 bg-[#419C87] px-4 py-2 text-white">
        View Projects
      </button>
      <div className="p-4 lg:p-16"></div>
    </div>
  );
};

export default Title;
