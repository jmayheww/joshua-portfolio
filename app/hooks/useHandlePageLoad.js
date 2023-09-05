import { useEffect } from "react";

const useHandlePageLoad = (callback) => {
  useEffect(() => {
    console.log("Effect initiated."); // Log Point 1

    const hash = window.location.hash;
    if (hash) {
      console.log("Hash detected."); // Log Point 2
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        console.log("Scrolling to section."); // Log Point 3
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      console.log("No hash detected."); // Log Point 4
      if (window.scrollY === 0) {
        window.scroll(0, 0);
      }
    }

    console.log("Callback being called."); // Log Point 5
    callback(); // This should hide the loading screen
  }, [callback]);
};

export default useHandlePageLoad;
