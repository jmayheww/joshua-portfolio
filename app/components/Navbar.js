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
      document.querySelector(".nav-overlay").classList.add("nav-overlay--open");
    } else {
      setIsOpen(false);
      document.body.style.overflow = ""; // Enable scrolling

      document
        .querySelector(".nav-overlay")
        .classList.remove("nav-overlay--open");
    }
  };

  const handleLinkClick = (e) => {
    toggleMenu(); // Close the menu
  };

  return (
    <>
      <div
        className="nav-overlay z-40 md:hidden "
        onClick={() => toggleMenu()}
      ></div>
      <div
        className={`navbar fixed top-0 z-40 w-full h-16 flex justify-between items-center transition-colors duration-300 ease-out ${
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
          <a
            href="#"
            className="sm:ml-0"
            aria-label="Go to the top of the page"
          >
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
          aria-label="Toggle Menu"
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
        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 font-inter ml-4 mr-6">
          {sectionLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              aria-label={`#${link}`}
              className="text-gray-300 transition-transform duration-300 ease-out transform hover:scale-105 hover:text-success hover:shadow-md hover:underline"
            >
              {link}
            </a>
          ))}
          {/* Resume Button */}
          <a
            href="/josh-mayhew-resume.pdf"
            download="josh-mayhew-resume.pdf"
            className="ml-4 py-1 px-5 text-md font-small border border-gray-300 rounded-sm text-gray-300 hover:border-success hover:text-success transition-transform duration-300 ease-out transform hover:scale-105 active:scale-95"
            aria-label="Download my resume"
          >
            resume
          </a>
        </div>

        {/* Side Menu (Mobile) */}
        {isOpen && (
          <div className="fixed inset-0 flex justify-end md:hidden bg-black bg-opacity-30">
            {" "}
            {/* Slightly increased opacity for better overlay contrast */}
            {/* Side Menu Content */}
            <div
              className={`bg-neutral text-white w-2/3 h-screen z-50 fixed right-0 top-0 flex flex-col justify-center items-center transition-transform ease-in-out duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close Button */}
              <div className="absolute top-4 right-[6%]">
                {" "}
                {/* Adjust the percentage as needed */}
                <button onClick={toggleMenu} className="bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-10 w-10 text-success hover:text-white transition-colors duration-300 ease-out"
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
              <nav className="flex-1 flex flex-col justify-center items-center space-y-10 px-4 font-inter">
                {" "}
                {/* Increased spacing */}
                {sectionLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    aria-label={`#${link}`}
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-success py-3 text-xl font-bold text-center w-full transition-transform duration-300 ease-out transform hover:scale-105"
                  >
                    {link}
                  </a>
                ))}
                {/* Resume Button */}
                <div className="my-4 w-full flex justify-center rounded-sm">
                  <a
                    href="/josh-mayhew-resume.pdf" // Replace with the actual path to your resume on Vercel
                    download="josh-mayhew-resume.pdf" // Specify the desired filename for the downloaded file
                    className="mt-4 m-2 py-3 px-6 text-lg font-medium border-2 border-gray-300 rounded-sm text-gray-300 hover:border-success hover:text-success transition-transform duration-300 ease-out transform hover:scale-105 active:scale-95"
                  >
                    Resume
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
