import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-base-100">
      {" "}
      {/* Ensure footer is full width */}
      <div className="container mx-auto max-w-screen-md flex justify-center space-x-6">
        <SocialIcons />
      </div>
    </footer>
  );
};
