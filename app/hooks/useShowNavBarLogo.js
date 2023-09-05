import { useEffect, useState, useRef } from "react";

const useShowNavBarLogo = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !aboutRef.current) return;

      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      const aboutTop = aboutRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (heroBottom <= 0 || aboutTop < windowHeight * 0.8) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { heroRef, aboutRef, showLogo };
};

export default useShowNavBarLogo;
