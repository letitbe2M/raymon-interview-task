import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <h1 className="font-bold text-lg">ABOUT</h1>
      <div className="grid grid-cols-12 pt-6 gap-4">
        <p className="col-span-12 md:col-span-7">
          Hi, I'm Mohammad Mehdizade, a Front-End Developer with nearly two years
          of experience in creating responsive, user-focused web applications. I
          specialize in HTML, CSS, JavaScript, React, Bootstrap, Tailwind, and
          TypeScript. My approach to development revolves around delivering
          seamless user experiences, ensuring responsive design across devices,
          and writing clean, maintainable code that is efficient and scalable.
          When I’m not coding, you can find me enjoying my favorite hobbies:
          reading books, watching movies, and exploring new music.
        </p>
        <div className="relative col-span-12 md:col-span-5">
          <Image
            alt="my-profile"
            src="/me.jpg"
            // layout="responsive"
            width={300}
            height={300}
            className="rounded-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
