import { techSkills } from "../data";

export const SkillsList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4">
      {techSkills.map((skill) => (
        <div key={skill} className="relative pl-5 text-md font-jetbrains-mono">
          <span className="absolute left-0 text-primary">▹</span>
          {skill}
        </div>
      ))}
    </div>
  );
};
