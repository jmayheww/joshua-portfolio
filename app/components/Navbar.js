import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = ({ showLogo = true }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed top-0 z-50 h-16 flex justify-between items-center transition-transform duration-300 ${
        isVisible ? "block" : "hidden"
      }`}
      style={{
        backdropFilter: isVisible ? "blur(10px)" : "none",
        backgroundColor: isVisible
          ? "rgba(var(--base-100), 0.6)"
          : "rgba(var(--base-100), 0.9)",
      }}
    >
      <div className="flex items-center">
        {showLogo && (
          <a href="#hero">
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
          <li>
            <a href="#about" className="font-mono">
              About
            </a>
          </li>
          {/* Add other section links here */}
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
