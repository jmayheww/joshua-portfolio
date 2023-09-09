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
      {/* Logo */}
      <div className="flex items-center justify-start mt-0.5 ml-[-1rem] mr-4 md:mr-6">
        {" "}
        {/* Adjusted margin */}
        <a href="#" className="sm:ml-0">
          <Image
            src="/images/jfoxs.png"
            alt="Joshua Mayhew fox logo"
            width={100}
            height={100}
            loading="lazy"
          />
        </a>
      </div>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="mt-2 ml-4 md:hidden mr-3 transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {/* // Nav Links with Increased Margin and Button Style for larger screens */}
      <div className="hidden md:flex space-x-6 font-jetbrains ml-4 mr-6">
        {sectionLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            aria-label={`#${link}`}
            className="text-white hover:text-success transition-transform transform duration-150 ease-in-out hover:scale-95 py-2 text-lg font-medium"
          >
            {link}
          </a>
        ))}
        {/* Resume Button */}
        <button className="ml-4 py-2 px-6 text-lg font-medium border border-white rounded-md text-white hover:bg-success hover:border-success hover:text-gray-800 transition-all duration-300 ease-out transform hover:scale-95 active:scale-90">
          Resume
        </button>
      </div>

      {/* // Side Menu (Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden bg-black bg-opacity-20">
          {/* Side Menu Content */}
          <div
            className={`bg-neutral text-white w-2/3 h-screen fixed right-0 top-0 flex flex-col justify-between items-center transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <div className="p-4 absolute top-4 right-4">
              <button onClick={toggleMenu} className="bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-10 w-10 text-success hover:text-white transition-colors duration-300 ease-out "
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
            <nav className="flex-1 flex flex-col justify-center items-center space-y-4 px-4">
              {sectionLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  aria-label={`#${link}`}
                  onClick={handleLinkClick}
                  className="text-white hover:text-success py-4 text-2xl font-bold text-center w-full"
                >
                  {link}
                </a>
              ))}
              {/* Resume Button */}
              <button className=" mt-16 m-2 py-2 px-6 text-lg font-medium border-2 border-white rounded-md text-white hover:bg-success hover:text-white transition-all duration-300 ease-out">
                Resume
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
