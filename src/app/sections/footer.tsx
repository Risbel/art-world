import React from "react";
import ContactInfo from "../components/footer/ContactInfo";
import FooterBackground from "../components/footer/FooterBackground";

const Footer = () => {
  return (
    <div className="relative h-72 w-full overflow-hidden">
      <div className="absolute top-8 left-12">
        <ContactInfo />
      </div>
      <FooterBackground />
    </div>
  );
};

export default Footer;
