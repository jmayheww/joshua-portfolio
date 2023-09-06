import { useEffect, useState } from "react";

export const useNavBarEffects = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isLogoVisible, setIsLogoVisible] = useState(false);

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

  // Intersection observer useEffect
  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) {
            setIsLogoVisible(true);
          } else {
            setIsLogoVisible(false);
          }
        },
        {
          rootMargin: "-50% 0px -50% 0px",
        }
      );

      observer.observe(heroSection);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return { isVisible, isLogoVisible, isTopOfPage };
};
