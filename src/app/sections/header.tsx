const Header = () => {
  return (
    <div className="bg-white w-full h-screen">
      <div className="w-1/2 pt-24 mb-28">
        <div className="flex flex-col items-end leading-[200px]">
          <h1 className="text-[200px] font-[180]">UNIÓN</h1>
          <h2 className="text-[200px] font-[180] text-gray-400">_ AC</h2>
        </div>
      </div>
      <p className="text-6xl font-light text-orange-400 pl-32">
        <span>
          Unión de Artistas <br /> Contemporaneos de España
        </span>
      </p>
    </div>
  );
};

export default Header;
