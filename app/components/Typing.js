import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typing = ({ wordsList }) => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: wordsList,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    const typed = new Typed(el.current, options);

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, [wordsList]);

  return <span style={{ whiteSpace: "pre" }} ref={el} />;
};

export default Typing;
