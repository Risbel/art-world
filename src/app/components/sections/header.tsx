import FormSubscribe from "../FormSubscribe";
import ParticlesHeader from "../ParticlesHeader";
import ScrollSubscriptionBtn from "../buttons/ScrollSubscriptionBtn";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-screen gap-16 items-center bg-white w-full overflow-hidden relative">
      <ParticlesHeader />

      <div className="absolute z-20 h-full w-full bg-white/60 backdrop-blur-sm"></div>
      <div className="flex flex-col justify-center w-1/2 items-center h-screen md:h-auto">
        <div className="relative z-30 mb-16">
          <div className="flex flex-col items-end lg:leading-[200px]">
            <h1 className="text-7xl lg:text-[150px] font-light">UNIÓN</h1>
            <h2 className="text-7xl lg:text-[150px] font-light text-gray-400">
              <span className="relative bottom-2 lg:bottom-8">_ </span>AC
            </h2>
          </div>
        </div>
        <p className="relative z-30 text-2xl lg:text-4xl font-thin text-yellow-500">
          <span>
            Unión de Artistas <br /> Contemporáneos de España
          </span>
        </p>
        <ScrollSubscriptionBtn />
      </div>
      <FormSubscribe />
    </div>
  );
};

export default Header;
