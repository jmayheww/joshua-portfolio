import { useEffect, useState } from "react";

const useNavBarEffects = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop && st > 0) {
        setIsVisible(false);
      } else if (st < lastScrollTop) {
        setIsVisible(true);
      }

      setIsTopOfPage(st <= 0);
      lastScrollTop = st;
    };

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      // Intersection Observer to watch the hero section
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) {
            setIsLogoVisible(true);
          } else {
            setIsLogoVisible(false);
          }
        },
        {
          rootMargin: "-50% 0px -50% 0px", // This will trigger the callback when 50% of the hero section is out of view
        }
      );

      // Observe the hero section
      observer.observe(heroSection);

      // Clean up the observer
      return () => {
        observer.disconnect();
      };
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible, isTopOfPage, isLogoVisible };
};

export default useNavBarEffects;
