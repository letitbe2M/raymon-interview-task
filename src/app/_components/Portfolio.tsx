import Image from "next/image";
import { PROJECTS } from "../config";

const Portfolio = () => {
  return (
    <div className="py-12">
      <h1 className="text-center font-bold text-2xl mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-64">
              <Image
                alt={p.title}
                src={p.image}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 text-gray-600">
              <h3 className="font-semibold text-xl">{p.title}</h3>
              <p className=" mb-4">{p.description}</p>
              <div className="flex justify-between items-center">
                {p.showLink && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
