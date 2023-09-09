import { socialLinks } from "../data";

export const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => {
        const { Icon } = link;

        return (
          <a
            key={link.name}
            href={link.url}
            aria-label={link.name}
            className="text-white hover:text-gray-300 p-2 rounded" // Change from text-gray-500 to text-white
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};
