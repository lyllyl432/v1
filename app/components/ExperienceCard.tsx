import React from "react";
import ExperienceProps from "../types/experienceProps";

const ExperienceCard: React.FC<ExperienceProps> = ({
  dateOfEmployment,
  position,
  company,
  workLocation,
  setup,
  desc,
}) => {
  return (
    <div className="flex group text-neutral-color font-light gap-2 py-2 px-4 mt-4 hover:bg-secondary-accent-variant hover:text-neutral-color-variant rounded-2xl transition-all">
      <h5 className="basis-1/3 text-sm">{dateOfEmployment}</h5>
      <div className="basis-full">
        <h4 className="text-base font-semibold text-secondary-color group-hover:text-primary-accent">{`${position} . ${company}`}</h4>
        <p className="text-sm mt-1">{`${workLocation} . (${setup})`}</p>
        <p className="text-sm mt-3">{desc}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
