import { useState } from "react";
import Image from "next/image";
import { useNavBarEffects } from "../hooks/useNavBarEffects";
import { sectionLinks } from "../data";

const Overlay = ({ closeMenu }) => (
  <div className="nav-overlay z-40 md:hidden " onClick={closeMenu}></div>
);

const MobileMenuButton = ({ isOpen, handleMenu }) => (
  <button
    onClick={handleMenu}
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
);

const MobileMenu = ({ isOpen, closeMenu }) => (
  <div
    className={`fixed inset-0 flex justify-end md:hidden bg-black bg-opacity-30 ${
      isOpen ? "block" : "hidden"
    }`}
  >
    <div className="bg-gradient-to-r from-neutral to-base-100 text-white w-2/3 h-screen z-50 fixed right-0 top-0 flex flex-col justify-center items-center">
      <div className="absolute top-0 right-0 mt-4 mr-5">
        <button onClick={closeMenu} className="bg-transparent">
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
      <nav className="flex-1 flex flex-col justify-center items-center space-y-10 px-4 font-inter">
        {sectionLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            aria-label={`#${link}`}
            onClick={closeMenu}
            className="text-gray-300 hover:text-success py-3 text-xl font-bold text-center w-full transition-transform duration-300 ease-out transform hover:scale-105"
          >
            {link}
          </a>
        ))}
        <div className="my-4 w-full flex justify-center rounded-sm">
          <a
            href="/josh-mayhew-resume.pdf"
            download="josh-mayhew-resume.pdf"
            className="mt-4 m-2 py-3 px-6 text-lg font-inter font-bold border-2 border-gray-300 rounded-sm text-gray-300 hover:border-success hover:text-success transition-transform duration-300 ease-out transform hover:scale-105 active:scale-95"
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isVisible, isTopOfPage } = useNavBarEffects(isOpen);

  const handleMenu = () => {
    setIsOpen((prevIsOpen) => {
      const newState = !prevIsOpen;
      document.body.style.overflow = newState ? "hidden" : "";
      const overlayClassList = document.querySelector(".nav-overlay").classList;
      newState
        ? overlayClassList.add("nav-overlay--open")
        : overlayClassList.remove("nav-overlay--open");
      return newState;
    });
  };

  const navbarClasses = `
    navbar fixed top-0 z-40 w-full h-16 flex justify-between items-center transition-colors duration-300 ease-out
    ${isVisible ? "block" : "hidden"}
    ${
      isTopOfPage
        ? "bg-opacity-100 backdrop-blur-none"
        : "bg-opacity-90 backdrop-blur-sm"
    }
  `;

  return (
    <>
      <Overlay closeMenu={handleMenu} />
      <div className={navbarClasses}>
        {/* Logo */}
        <div className="flex items-center justify-start mt-0.5 ml-[-1rem] mr-4 md:mr-6">
          <a
            href="#"
            className="sm:ml-0 m-2"
            aria-label="Go to the top of the page"
          >
            <Image
              src="/images/jfoxs.png"
              alt="Joshua Mayhew fox logo"
              width={100}
              height={100}
              className="object-cover"
              loading="lazy"
            />
          </a>
        </div>

        {/* Menu Toggle Button */}
        <MobileMenuButton isOpen={isOpen} handleMenu={handleMenu} />

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 font-inter ml-4 mr-6">
          {sectionLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              aria-label={`#${link}`}
              className="text-gray-300 font-inter font-bold transition-transform duration-300 ease-out transform hover:scale-105 hover:text-success"
            >
              {link}
            </a>
          ))}
          <a
            href="/josh-mayhew-resume.pdf"
            download="josh-mayhew-resume.pdf"
            className="ml-4 py-1 px-5 text-md font-inter font-bold border border-gray-300 rounded-sm text-gray-300 hover:border-success hover:text-success transition-transform duration-300 ease-out transform hover:scale-105 active:scale-95"
            aria-label="Download my resume"
          >
            Resume
          </a>
        </div>

        {/* Side Menu (Mobile) */}
        <MobileMenu isOpen={isOpen} closeMenu={handleMenu} />
      </div>
    </>
  );
};

export default Navbar;
