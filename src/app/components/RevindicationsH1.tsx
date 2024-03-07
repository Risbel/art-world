import React from "react";
import Divider from "./Divider";

const RevindicationsH1 = () => {
  return (
    <div className="flex flex-col gap-4 items-center pt-10">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-[80px] font-bold pb-4">Revindicaciones</h1>
        <Divider />
      </div>
    </div>
  );
};

export default RevindicationsH1;
