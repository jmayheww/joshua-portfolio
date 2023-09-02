export const handleInitialLoad = (callback) => {
  const hash = window.location.hash;

  if (hash) {
    const sectionId = hash.replace("#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.scroll(0, 0);
  }

  callback(); // This will call setIsLoading(false)
};

export const handlePageLoad = (setLoadingFunction) => {
  const onLoadHandler = () => handleInitialLoad(setLoadingFunction);
  window.addEventListener("load", onLoadHandler);

  // Cleanup function
  return () => {
    window.removeEventListener("load", onLoadHandler);
  };
};
