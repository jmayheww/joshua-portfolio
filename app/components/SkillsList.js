import React from "react";
import { salesForceDevSkills } from "../data";

function CheckIcon() {
  return (
    <svg
      className="text-primary"
      width="18" // Uniform size for all screens
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export const SkillsList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4">
      {salesForceDevSkills.map((skill) => (
        <div key={skill} className="flex items-center space-x-2">
          {/* Checkmark Icon */}
          <div className="flex-shrink-0">
            {" "}
            {/* Ensures icon doesn't flex */}
            <CheckIcon />
          </div>

          {/* Skill Name */}
          <span className="text-sm sm:text-md font-inter font-semibold ">
            {" "}
            {/* Responsive font size and truncation */}
            {skill}
          </span>
        </div>
      ))}
    </div>
  );
};
