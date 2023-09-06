import React from "react";
import Image from "next/image";
import useNavBarEffects from "../hooks/useNavBarEffects"; // Import the updated hook
import { sectionLinks } from "../data";

const Navbar = ({ showLogo = true }) => {
  const { isVisible, isTopOfPage, isLogoVisible } = useNavBarEffects(); // Use the updated hook

  return (
    <div
      className={`navbar fixed top-0 z-50 h-16 flex justify-between items-center transition-transform duration-300 ${
        isVisible ? "block" : "hidden"
      }`}
      style={{
        backdropFilter: isTopOfPage ? "none" : "blur(10px)",
        backgroundColor: isVisible
          ? "rgba(var(--base-100), 0.6)"
          : "rgba(var(--base-100), 0.9)",
      }}
    >
      <div className="flex items-center">
        {showLogo && isLogoVisible && (
          <a href="#">
            <Image
              src="/images/jfox.png"
              alt="Joshua Mayhew logo"
              width={50}
              height={50}
              loading="lazy"
            />
          </a>
        )}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {sectionLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className="btn btn-ghost btn-sm rounded-btn">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
