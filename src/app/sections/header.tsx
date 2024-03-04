import Divider from "../components/Divider";

const Header = () => {
  return (
    <div className="bg-white w-full">
      <div className="w-1/2 py-12">
        <div className="flex flex-col items-end leading-[200px]">
          <h1 className="text-[180px] font-[150]">UNIÓN</h1>
          <h2 className="text-[180px] font-[150] text-gray-400">_ AC</h2>
        </div>
      </div>
      <p className="text-5xl font-light text-orange-400 pl-24">
        <span>
          Unión de Artistas <br /> Contemporaneos de España
        </span>
      </p>
      <div className="py-12">
        <Divider />
      </div>
    </div>
  );
};

export default Header;
