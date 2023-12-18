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
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 lg:gap-8">
      {salesForceDevSkills.map((skill) => (
        <div key={skill} className="flex items-center space-x-3 group">
          <div className="flex-shrink-0">
            <CheckIcon />
          </div>
          <span className="text-sm sm:text-md lg:text-lg font-inter font-semibold">
            {skill}
          </span>
        </div>
      ))}
    </div>
  );
};
