import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import WebDevImage from "../assets/WebDev.JPEG"; // Replace with your actual image URLs
import AppDevImage from "../assets/AppDev.JPEG";
import AIMLImage from "../assets/AIML.JPEG";
import "./style/sectionLine.css";

const Domains = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0 });
  }, []);
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
      <motion.div 
      initial={{ x: 1500 }} // Initial position off-screen to the left
      animate={controls}
      transition={{ delay: 3, duration: 0.5 }} 
      className="text-white py-8 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className="rounded-md border bg-gradient-to-b to-purple-800 from-black border-white p-4 sm:p-6 shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Domains;
