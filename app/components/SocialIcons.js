import { socialLinks } from "../data";

export const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          aria-label={link.name}
          className="text-gray-500 hover:text-gray-800 p-2 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};
