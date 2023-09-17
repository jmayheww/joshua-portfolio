import { techSkills } from "../data";

export const SkillsList = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-12 md:grid-cols-1">
      <div className="col-span-3">
        <ul className="grid grid-cols-2 gap-x-2.5 gap-y-4">
          {techSkills.map((skill) => (
            <li
              key={skill}
              className="relative pl-5 text-md font-jetbrains-mono"
            >
              <span className="absolute left-0 text-primary">▹</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};
