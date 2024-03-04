import React from "react";
import ParticlesBackground from "../components/config/ParticlesBackground";

const Footer = () => {
  return (
    <div className="h-56 w-full flex justify-center items-center border ">
      <p className="text-white">Footer</p>
      <div className="relative overflow-hidden h-full w-full">
        <ParticlesBackground />
      </div>
    </div>
  );
};

export default Footer;
