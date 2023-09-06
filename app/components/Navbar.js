import Image from "next/image";
import { useNavBarEffects } from "../hooks/useNavBarEffects";
import { sectionLinks } from "../data";

const Navbar = ({ showLogo = true }) => {
  const { isVisible, isTopOfPage, isLogoVisible } = useNavBarEffects();

  return (
    <div
      className={`navbar fixed top-0 z-50 h-16 flex justify-between items-center transition-transform duration-300
        ${isVisible ? "block" : "hidden"}
        ${isTopOfPage ? "bg-opacity-60" : "bg-opacity-90 backdrop-blur-md"}`}
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
