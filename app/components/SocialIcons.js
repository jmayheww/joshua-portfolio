import { socialLinks } from "../data";

export const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          aria-label={link.name}
          className="text-white hover:text-success p-2 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};
