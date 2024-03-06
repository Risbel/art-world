const Divider = ({ thickness = 8, hidden }: { thickness?: number; hidden?: boolean }) => {
  return <div style={{ borderWidth: thickness }} className={`border-yellow-300 w-full ${hidden && "hidden"}`}></div>;
};

export default Divider;
