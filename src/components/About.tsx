import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="scroll-smooth rounded-xl border border-secondary border-opacity-25  bg-black-light px-8 py-16 transition duration-300 ease-in-out hover:border-opacity-60 hover:bg-opacity-30">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="w-full lg:w-2/3">
          <div className="my-8 flex items-center justify-between">
            <h1 className="font-bold text-white">About Me</h1>
            <div className="h-0 w-1/2 border border-secondary "></div>
          </div>
          <div className="text-white">
            Hello there! My name is Jarrett, and I am an enthusiastic Computer
            Science student with a passion for mathematics, computer science,
            and engineering. When Im not studying mathematics or developing
            algorithms, you can find me catching waves on my surfboard or
            watching a baseball game. My goal is to harness my unique blend of
            talents to develop innovative and creative solutions.
          </div>
        </div>
        <div className="mx-8 mt-4 lg:mt-0 lg:w-1/3">
          <Image src="/kauai.png" alt="kauai" width={400} height={200} />
        </div>
      </div>
    </div>
  );
};

export default About;
