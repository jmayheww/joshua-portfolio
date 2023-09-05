import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useSmoothScroll = (is404) => {
  const { push } = useRouter();

  useEffect(() => {
    if (is404) {
      push(`/#${sectionId}`);
      return;
    }

    const onLinkClick = (event) => {
      const sectionId = event.target.getAttribute("data-section-id");
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        event.preventDefault();
        sectionElement.scrollIntoView({ behavior: "smooth" });

        let lastScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const checkScrollEnd = setInterval(() => {
          let currentScrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          if (lastScrollTop === currentScrollTop) {
            clearInterval(checkScrollEnd);
            history.pushState(null, null, `#${sectionId}`);
          } else {
            lastScrollTop = currentScrollTop;
          }
        }, 100);
      }
    };

    document.addEventListener("click", onLinkClick);

    return () => {
      document.removeEventListener("click", onLinkClick);
    };
  }, []);

  return;
};

export default useSmoothScroll;
