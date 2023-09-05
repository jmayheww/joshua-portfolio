import { useEffect } from "react";

const useHandlePageLoad = (callback) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      if (window.scrollY === 0) {
        window.scroll(0, 0);
      }
    }

    callback(); // This should hide the loading screen
  }, [callback]);
};

export default useHandlePageLoad;
