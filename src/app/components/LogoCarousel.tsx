import Image from "next/image";
import React from "react";

const carouselBrands = [
  {
    imageUrl: "/A-CO-LE-CTIVA.png",
    alt: "",
    width: 150,
    height: 150,
    text: "",
    textSize: "",
  },
  {
    imageUrl: "/aava.png",
    alt: "",
    width: 250,
    height: 100,
    text: "",
    textSize: "",
  },
  {
    imageUrl: "/AICAV.png",
    alt: "",
    width: 100,
    height: 100,
    text: "",
    textSize: "",
  },
  {
    imageUrl: "/AV_VAC.png",
    alt: "",
    width: 200,
    height: 100,
    text: "",
    textSize: "",
  },
  {
    imageUrl: "/AVAex.png",
    alt: "",
    width: 200,
    height: 100,
    text: "",
    textSize: "",
  },
  {
    imageUrl: "/AVAM.png",
    alt: "",
    width: 150,
    height: 100,
    text: "",
    textSize: "",
  },
  {
    imageUrl: "/UAVA.png",
    alt: "",
    width: 300,
    height: 100,
    text: "",
    textSize: "",
  },
  {
    imageUrl: "/yellow-hand-brand.png",
    alt: "",
    width: 100,
    height: 100,
    text: "",
    textSize: "",
  },
];

const LogoCarousel = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center space-x-16 animate-loop-scroll px-8 [&_li]:mx-8 [&_img]:max-w-none">
        {carouselBrands.map((item, i) => {
          return (
            <li key={i}>
              <Image src={item.imageUrl} alt={item.alt} width={item.width} height={item.height} />
            </li>
          );
        })}
      </ul>
      <ul
        className="flex items-center space-x-16 animate-loop-scroll px-8 [&_li]:mx-8 [&_img]:max-w-none"
        aria-hidden="true"
      >
        {carouselBrands.map((item, i) => {
          return (
            <li key={i}>
              <Image src={item.imageUrl} alt={item.alt} width={item.width} height={item.height} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LogoCarousel;
