import React from "react";
import ContactInfo from "../footer/ContactInfo";
import FooterBackground from "../footer/FooterBackground";

const Footer = () => {
  return (
    <div className="relative h-72 w-full overflow-hidden">
      <div className="absolute z-30 top-8 left-3 lg:left-12">
        <ContactInfo />
      </div>

      <FooterBackground />
    </div>
  );
};

export default Footer;
