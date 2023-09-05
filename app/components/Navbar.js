import useScrollDirection from "../hooks/useScrollDirection";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Image from "next/image";
import { sectionLinks } from "../data";

export const Navbar = ({ is404 = false, showLogo = true }) => {
  const { isVisible, lastScrollTop } = useScrollDirection();

  useSmoothScroll(is404); // Ensure this doesn't interfere with scrolling behavior.

  return (
    <div
      className={`navbar fixed top-0 z-50 h-16 flex justify-between items-center transition-transform duration-300 ${
        isVisible ? "block" : "hidden"
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
          <a href="#" data-section-id="hero">
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
                data-section-id={section}
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
