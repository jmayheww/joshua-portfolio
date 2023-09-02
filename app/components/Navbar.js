import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { sectionLinks } from "../utils/navlinks";

export const Navbar = ({ is404 = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { push } = useRouter();

  useEffect(() => {
    function handleScroll() {
      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // const handleScrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleLinkClick = (event, sectionId) => {
    if (is404) {
      push(`/#${sectionId}`);
    }
    return;
  };

  return (
    <div
      className={`navbar fixed top-0 z-50 h-16 ${
        isVisible ? "block" : "hidden"
      } flex justify-between items-center`}
      style={{
        backdropFilter: lastScrollTop > 0 ? "blur(10px)" : "none",
        backgroundColor: isVisible
          ? "rgba(var(--base-100), 0.6)"
          : "rgba(var(--base-100), 0.9)",
      }}
    >
      <div className="flex items-center">
        <a href="#" onClick={(e) => handleLinkClick(e, "")}>
          <Image
            src="/images/jfox.png"
            alt="Joshua Mayhew logo"
            width={160}
            height={160}
          />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {sectionLinks.map((section) => {
            return (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleLinkClick(e, section)}
                >
                  {section}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
