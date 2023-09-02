// hooks/useAfterLoad.js
import { useEffect } from "react";
import { handleInitialLoad } from "../utils/loadScroll";

const useAfterLoad = (callback) => {
  useEffect(() => {
    const afterLoad = () => {
      // Introducing a delay of 2 seconds (2000 milliseconds) after the page has loaded
      handleInitialLoad(() => {
        setTimeout(callback, 1000);
      });
    };

    if (document.readyState === "complete") {
      afterLoad();
    } else {
      window.addEventListener("load", afterLoad);

      return () => {
        window.removeEventListener("load", afterLoad);
      };
    }
  }, [callback]);
};

export default useAfterLoad;
