import React from "react";
import { FaCode, FaMobileAlt, FaHandsHelping } from "react-icons/fa";


const services = [
  {
    icon: <FaCode className="text-4xl text-blue-500" />,
    title: "Web Development",
    description:
      "Building responsive, high-performance websites using modern frameworks.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-green-500" />,
    title: "Responsive Design",
    description: "Creating mobile-first designs that look great on any device.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-purple-500" />,
    title: "Team Collaboration",
    description:
      "Cooperating and collaborating effectively in team environments, fostering a friendly and productive workspace.",
  },
];

const Services = () => {
  return (
    <div className="py-12">
      <h1 className="text-center font-bold text-2xl mb-8">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
