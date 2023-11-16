export const TabButtons = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs tabs-boxed mb-8 flex justify-center">
      {["email", "fullstack"].map((tab) => {
        const isActive = tab === activeTab;
        const tabName =
          tab === "email" ? "Email Development" : "Full Stack Development";

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab tab-lg m-1 ${isActive ? "tab-active" : ""}
                          text-sm sm:text-base flex-1 text-center`}
          >
            {tabName}
          </button>
        );
      })}
    </div>
  );
};
