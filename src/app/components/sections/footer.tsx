import React from "react";
import ContactInfo from "../footer/ContactInfo";
import FooterBackground from "../footer/FooterBackground";
import ParticlesFooter from "../ParticlesFooter";

const Footer = () => {
  return (
    <div className="relative h-72 w-full overflow-hidden">
      <div className="absolute top-8 left-12">
        <ContactInfo />
      </div>
      <FooterBackground />
      <ParticlesFooter />
    </div>
  );
};

export default Footer;
