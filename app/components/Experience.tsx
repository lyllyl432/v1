import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experience } from "../types";

const Experience = () => {
  return (
    <section className="mt-36">
      <h3 className="text-primary-accent font-semibold text-xl">Experience</h3>
      {experience.map((exp) => (
        <ExperienceCard
          dateOfEmployment={exp.dateOfEmployment}
          position={exp.position}
          desc={exp.desc}
          company={exp.company}
          workLocation={exp.workLocation}
          setup={exp.setup}
        />
      ))}
    </section>
  );
};

export default Experience;
