import React from "react";
import WebDevImage from "../assets/web_dev.png"; // Replace with your actual image URLs
import AppDevImage from "../assets/app_dev.png";
import AIMLImage from "../assets/web_dev.png";
import "./style/sectionLine.css";

const Domains = () => {
  const domains = [
    {
      title: "Web Development",
      description:
        "Create interactive and dynamic websites using the latest web technologies.",
      image: WebDevImage,
    },
    {
      title: "App Development",
      description: "Build mobile applications for iOS and Android platforms.",
      image: AppDevImage,
    },
    {
      title: "AI/ML",
      description:
        "Explore artificial intelligence and machine learning to solve complex problems.",
      image: AIMLImage,
    },
  ];

  return (
    <div className="px-8">
      <h2 className="text-3xl text-white font-bold text-center section_header">
        <hr />
        <span>Domains</span>
        <hr />
      </h2>
      <div className="text-white py-8 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="rounded-md border border-white p-4 sm:p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-80 object-cover mb-4 rounded-md"
                  />
                </div>
                <h3 className="text-xl text-white font-bold mb-2">
                  {domain.title}
                </h3>
                <p className="text-white text-sm">{domain.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
