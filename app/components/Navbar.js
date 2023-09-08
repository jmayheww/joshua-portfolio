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
    e.preventDefault(); // prevent the default link behavior
    const targetSection = e.target.getAttribute("href"); // get the target section
    window.location.hash = targetSection; // jump to the target section
    toggleMenu(); // close the menu
  };

  return (
    <div
      className={`navbar fixed top-0 z-50 w-full h-16 flex justify-between items-center transition-colors duration-300 ease-out ${
        isVisible ? "block" : "hidden"
      } ${isTopOfPage ? "bg-opacity-60" : "bg-opacity-90 backdrop-blur-md"}`}
    >
      <div className="flex items-center">
        <a href="#" className="ml-4">
          <Image
            src="/images/jfox.png"
            alt="Joshua Mayhew logo"
            width={50}
            height={50}
            loading="lazy"
          />
        </a>
      </div>

      <button onClick={toggleMenu} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
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
                className="btn btn-ghost btn-sm rounded-btn hover:text-success transition-colors duration-300"
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
            className={`bg-gray-900 text-white w-1/2 h-screen fixed right-0 top-0 transform transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400 hover:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center items-center px-4 space-y-4">
              {sectionLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-gray-100 block py-1 text-lg font-medium text-center"
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
