import { useEffect } from "react";
import { handleInitialLoad } from "../utils/loadScroll";

const useAfterLoad = (setLoadingFunction) => {
  useEffect(() => {
    // This function encapsulates the logic you want to execute after the load event
    const afterLoad = () => {
      handleInitialLoad(setLoadingFunction);
    };

    // Check if the document has already loaded
    if (document.readyState === "complete") {
      afterLoad();
    } else {
      // Otherwise, set up the load event listener
      window.addEventListener("load", afterLoad);

      // Cleanup
      return () => {
        window.removeEventListener("load", afterLoad);
      };
    }
  }, [setLoadingFunction]); // Dependency array ensures this effect responds to changes in setLoadingFunction
};

export default useAfterLoad;
