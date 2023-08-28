import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    let inactivityTimer; // for inactivity detection
    function handleScroll() {
      let st = window.pageYOffset || document.documentElement.scrollTop;

      // Clear the inactivity timer
      clearTimeout(inactivityTimer);

      if (st > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);

      // Set the inactivity timer
      inactivityTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // 5 seconds of inactivity
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(inactivityTimer); // Clear the inactivity timer when the component unmounts
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`navbar fixed top-0 z-50 h-16 ${
        isVisible ? "block" : "hidden"
      }`}
      style={{
        backdropFilter: lastScrollTop > 0 ? "blur(10px)" : "none",
        backgroundColor: isVisible
          ? "rgba(var(--base-100), 0.6)"
          : "rgba(var(--base-100), 0.9)",
      }}
    >
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
