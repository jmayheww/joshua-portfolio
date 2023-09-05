import { useEffect, useState } from "react";

export const useHandlePageLoad = (callback) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingDuration = 1000; // Loading duration in milliseconds

    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after loading duration
    }, loadingDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
      callback(); // This should hide the loading screen
    }
  }, [isLoading, callback]);
};
