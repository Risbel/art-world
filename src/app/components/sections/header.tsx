import Image from "next/image";
import FormSubscribe from "../FormSubscribe";
import ParticlesHeader from "../ParticlesHeader";
import ScrollSubscriptionBtn from "../buttons/ScrollSubscriptionBtn";
import { X } from "lucide-react";
import LinkEncoded from "../LinkEncoded";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-screen gap-16 items-center bg-white w-full overflow-hidden relative">
      <Image
        className="h-[50px] w-[100px] lg:h-[80px] lg:w-[160px] absolute z-40 left-2 top-4 lg:top-6 lg:left-6"
        src={"/ARCO-logo.svg"}
        alt="Goma logo dark"
        width={200}
        height={100}
      />
      <ParticlesHeader />
      <div className="absolute z-20 h-full w-full bg-white/60 backdrop-blur-sm"></div>
      <div className="relative z-30 flex flex-col gap-2 lg:gap-4 justify-center w-1/2 items-center h-screen md:h-auto">
        <div>
          <div className="flex flex-col items-end lg:leading-[200px]">
            <h1 className="text-7xl lg:text-[100px] font-light">UNIÓN</h1>
            <h2 className="text-7xl lg:text-[100px] font-light text-gray-400">
              <span className="relative bottom-2 lg:bottom-4">_ </span>AC
            </h2>
          </div>
        </div>
        <p className="text-xl lg:text-2xl font-light">
          <span>
            Unión de Artistas <br /> Contemporáneos de España
          </span>
        </p>

        <LinkEncoded />

        <Image src={"/Goma-logo-dark.svg"} width={350} height={175} alt="Goma logo dark" />
        <ScrollSubscriptionBtn />
      </div>

      <FormSubscribe />
    </div>
  );
};

export default Header;
