import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Corrected the import from "next/navigation" to "next/router"
import useScrollDirection from "../hooks/useScrollDirection";
import Image from "next/image";
import { sectionLinks } from "../data";

export const Navbar = ({ is404 = false, showLogo }) => {
  const isVisible = useScrollDirection();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { push } = useRouter();

  const handleLinkClick = (event, sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      event.preventDefault();
      if (is404) {
        push(`/#${sectionId}`);
      } else {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`navbar fixed top-0 z-50 h-16 flex justify-between items-center transition-transform duration-300 ${
        isVisible ? "transform translateY(0)" : "transform translateY(-100%)"
      }`}
      style={{
        backdropFilter: lastScrollTop > 0 ? "blur(10px)" : "none",
        backgroundColor: isVisible
          ? "rgba(var(--base-100), 0.6)"
          : "rgba(var(--base-100), 0.9)",
      }}
    >
      <div className="flex items-center">
        {showLogo && (
          <a href="#" onClick={(e) => handleLinkClick(e, "")}>
            <Image
              src="/images/jfox.png"
              alt="Joshua Mayhew logo"
              width={50}
              height={50}
            />
          </a>
        )}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {sectionLinks.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleLinkClick(e, section)}
                className="font-mono"
              >
                {section}
              </a>
            </li>
          ))}
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
};
