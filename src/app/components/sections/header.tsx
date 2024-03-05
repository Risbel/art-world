import FormSubscribe from "../FormSubscribe";
import ParticlesHeader from "../ParticlesHeader";

const Header = () => {
  return (
    <div className="flex items-center bg-white w-full h-screen overflow-hidden relative">
      <ParticlesHeader />

      <div className="absolute z-20 h-full w-full bg-white/60 backdrop-blur-sm"></div>
      <div className="flex flex-col w-1/2 items-center">
        <div className="relative z-30 mb-16">
          <div className="flex flex-col items-end leading-[200px]">
            <h1 className="text-[150px] font-light">UNIÓN</h1>
            <h2 className="text-[150px] font-light text-gray-400">
              <span className="relative bottom-8">_ </span>AC
            </h2>
          </div>
        </div>
        <p className="relative z-30 text-4xl font-thin text-yellow-500">
          <span>
            Unión de Artistas <br /> Contemporaneos de España
          </span>
        </p>
      </div>

      <FormSubscribe />
    </div>
  );
};

export default Header;
