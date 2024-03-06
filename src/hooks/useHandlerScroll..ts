import { useCallback } from "react";

const useHandlerScroll = () => {
  const handleScroll = useCallback((event: any, href: any) => {
    event.preventDefault();

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return handleScroll;
};

export default useHandlerScroll;
