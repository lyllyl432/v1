import React from "react";
import TechStackProps from "../types/techstacks";

const TechStack: React.FC<TechStackProps> = ({ Icon, name }) => {
  return (
    <div className="flex gap-2 items-center justify-center px-4 py-2 bg-secondary-accent-variant rounded-3xl">
      {<Icon className="w-6 h-6"></Icon>}
      <span className="text-xs text-neutral-color">{name}</span>
    </div>
  );
};

export default TechStack;
