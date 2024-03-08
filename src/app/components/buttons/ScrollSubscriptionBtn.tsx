"use client";

import useHandlerScroll from "@/hooks/useHandlerScroll.";

const ScrollSubscriptionBtn = () => {
  const handleClickScroll = useHandlerScroll();

  return (
    <button
      onClick={(event) => handleClickScroll(event, "#formSubscribe")}
      className="block relative z-20 bg-yellow-300 hover:bg-yellow-400 p-2 rounded-md mt-8 w-full md:hidden"
    >
      <span className="text-yellow-900">Suscríbete</span>
    </button>
  );
};

export default ScrollSubscriptionBtn;
