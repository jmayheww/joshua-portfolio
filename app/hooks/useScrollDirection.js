import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      console.log(`Current Scroll: ${st}`);
      console.log(`Last Scroll: ${lastScrollTop}`);

      if (st > lastScrollTop && st > 0) {
        console.log("Hiding Navbar");
        setIsVisible(false);
      } else {
        console.log("Showing Navbar");
        setIsVisible(true);
      }

      setLastScrollTop(st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return { isVisible, lastScrollTop };
};

export default useScrollDirection;
