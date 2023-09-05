// hooks/useScrollDirection.js
import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    let throttleTimeout;

    const handleScroll = () => {
      clearTimeout(throttleTimeout);

      throttleTimeout = setTimeout(() => {
        const st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollTop(st <= 0 ? 0 : st);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(throttleTimeout);
    };
  }, [lastScrollTop]);

  return isVisible;
};

export default useScrollDirection;
