import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed z-[120] flex w-full backdrop-blur-md bg-gray-600/20">
      <div className="relative">
        {/* <Image src={"/Goma-logo-dark.svg"} alt="Goma logo dark" width={200} height={100} /> */}
      </div>
    </div>
  );
};

export default Navbar;
