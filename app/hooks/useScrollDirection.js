// import { useState, useEffect } from "react";

// export const useScrollDirection = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     let throttleTimeout;

//     const handleScroll = () => {
//       clearTimeout(throttleTimeout);

//       throttleTimeout = setTimeout(() => {
//         const st = window.pageYOffset || document.documentElement.scrollTop;
//         setIsVisible(st <= 0 || st < lastScrollTop);
//         setLastScrollTop(st);
//       }, 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(throttleTimeout);
//     };
//   }, [lastScrollTop]);

//   return { isVisible };
// };

// export const useHandlePageLoad = (callback) => {
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const sectionId = hash.replace("#", "");
//       const section = document.getElementById(sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       window.scrollTo({ top: 0, behavior: "auto" });
//     }
//     callback(); // This should hide the loading screen
//   }, [callback]);
// };
