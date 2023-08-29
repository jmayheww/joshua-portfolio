export const SideBar = ({ type, children }) => {
  const emailClasses = "bg-primary text-white";
  const socialClasses = "bg-primary text-white";

  if (type === "email") {
    return (
      <div className="fixed bottom-0 left-10 h-1/2 w-8 flex flex-col items-end justify-end">
        <div className="h-1/2 w-1"></div>
        <div className="transform rotate-90">{children}</div>
        <div
          className={`${emailClasses} h-1/2 w-1 flex items-center justify-end`}
        ></div>
      </div>
    );
  } else if (type === "social") {
    return (
      <div className="fixed bottom-0 right-10 h-1/2 w-8 flex flex-col items-start justify-end">
        <div className="h-1/2 w-1"></div>
        <div>{children}</div>
        <div
          className={`${socialClasses} h-1/2 w-1 flex items-center justify-end`}
        ></div>
      </div>
    );
  } else {
    return null;
  }
};
