const Divider = ({ thickness = 8 }: { thickness?: number }) => {
  return <div style={{ borderWidth: thickness }} className={"border-yellow-300 w-full"}></div>;
};

export default Divider;
