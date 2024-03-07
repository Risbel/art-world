import Image from "next/image";

const FooterBackground = () => {
  return (
    <>
      {/* <div className="absolute -z-20 flex justify-center items-center">
        <Image className="object-cover" src={"/bg-footer.jpg"} alt="bg footer" width={1700} height={200} />
      </div> */}
      <div className="absolute -z-10 bg-gray-400/40 backdrop-blur-xl h-full w-full"></div>
    </>
  );
};

export default FooterBackground;
