import { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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

  const handleScrollToSection = (event, sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
        <a onClick={() => window.scroll(0, 0)}>
          <Image
            src="/images/jfox.png"
            alt="Joshua Mayhew logo"
            width={160} // Adjust size as needed
            height={160} // Adjust size as needed
            className="object-contain"
          />
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about" onClick={(e) => handleScrollToSection(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a>02. Experience</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
