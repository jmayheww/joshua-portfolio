import { useEffect, useState } from "react";

export const useNavBarEffects = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  // Scroll listener useEffect
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      // If scrolling down, and not already at the top, hide navbar
      if (st > lastScrollTop && st > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (st <= 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }

      lastScrollTop = st <= 0 ? 0 : st; // Reset lastScrollTop to 0 if it's negative
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible, isTopOfPage };
};
