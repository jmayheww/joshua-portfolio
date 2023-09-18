import { useEffect, useState } from "react";

export const useNavBarEffects = (isOpen) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (isOpen) {
        setIsVisible(true);
        return;
      }

      setIsVisible(st <= lastScrollTop || st <= 0);
      setIsTopOfPage(st <= 0);
      lastScrollTop = Math.max(st, 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return { isVisible, isTopOfPage };
};
