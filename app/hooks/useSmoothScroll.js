import { useEffect } from "react";
import { useRouter } from "next/navigation"; // correct import

const useSmoothScroll = (is404) => {
  const { push } = useRouter();

  const onLinkClick = (event) => {
    let sectionId = event.target.getAttribute("data-section-id");
    if (!sectionId) {
      sectionId = ""; // default to hero section if sectionId is null
    }

    const sectionElement = document.getElementById(sectionId);

    if (is404) {
      push(`/#${sectionId}`);
      return; // Make sure to return to prevent further execution.
    }

    if (sectionElement) {
      event.preventDefault();
      sectionElement.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, `#${sectionId}`);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onLinkClick);

    return () => {
      document.removeEventListener("click", onLinkClick);
    };
  }, [is404]);

  return;
};

export default useSmoothScroll;
