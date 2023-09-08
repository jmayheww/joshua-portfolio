import { useState } from "react";
import Image from "next/image";
import { useNavBarEffects } from "../hooks/useNavBarEffects";
import { sectionLinks } from "../data";

const Navbar = () => {
  const { isVisible, isTopOfPage } = useNavBarEffects();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      setIsOpen(false);
      document.body.style.overflow = ""; // Enable scrolling
    }
  };

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const targetSection = e.target.getAttribute("href"); // Get the target section
    window.location.hash = targetSection; // Jump to the target section
    toggleMenu(); // Close the menu
  };

  return (
    <div
      className={`navbar fixed top-0 z-50 w-full h-16 flex justify-between items-center transition-colors duration-300 ease-out ${
        isVisible ? "block" : "hidden"
      } ${
        isTopOfPage
          ? "bg-opacity-10 backdrop-blur-sm"
          : "bg-opacity-90 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center mt-2">
        <a href="#" className="ml-2">
          <Image
            src="/images/jfoxs.png"
            alt="Joshua Mayhew fox logo"
            width={120}
            height={120}
            loading="lazy"
          />
        </a>
      </div>

      <button
        onClick={toggleMenu}
        className="mt-2 ml-4 md:hidden"
        alt="Menu Button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-12 w-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {sectionLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-success py-4 text-xl font-bold text-center block w-full"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden bg-black bg-opacity-20">
          {/* Side Menu */}
          <div
            className={`bg-neutral text-white w-2/3 h-screen fixed right-0 top-0 flex flex-col justify-center items-center transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <div className="p-4 absolute top-4 right-4">
              <button onClick={toggleMenu} className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-400 hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center items-center px-4">
              {sectionLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-white py-4 text-2xl font-bold text-center"
                  style={{ display: "block", width: "100%" }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
