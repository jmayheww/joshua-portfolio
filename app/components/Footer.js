import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  return (
    <footer className="w-full py-4 bg-base-100">
      <div className="container mx-auto max-w-screen-md px-4">
        <div className="flex flex-col items-center space-y-2 md:space-y-4">
          <SocialIcons />
          <p className="text-gray-500 text-center font-mono">
            ©{new Date().getFullYear()} Joshua Mayhew.
          </p>
        </div>
      </div>
    </footer>
  );
};
