// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const useSmoothScroll = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const onLinkClick = (event) => {
//       const sectionId = event.target.getAttribute("data-section-id");
//       const sectionElement = document.getElementById(sectionId);

//       if (sectionElement) {
//         event.preventDefault();
//         sectionElement.scrollIntoView({ behavior: "smooth" });

//         const updateUrl = () => {
//           if (window.location.hash !== `#${sectionId}`) {
//             router.replace(`#${sectionId}`, undefined, { shallow: true });
//           }
//         };

//         const scrollTimeout = setTimeout(updateUrl, 300); // Adjust the delay as needed

//         sectionElement.addEventListener(
//           "transitionend",
//           () => {
//             clearTimeout(scrollTimeout);
//             updateUrl();
//           },
//           { once: true }
//         );
//       }
//     };

//     document.addEventListener("click", onLinkClick);
//     return () => {
//       document.removeEventListener("click", onLinkClick);
//     };
//   }, [router]);
// };

// export default useSmoothScroll;
