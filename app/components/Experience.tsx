import React from "react";
import Link from "next/link";
import ExperienceCard from "./ExperienceCard";
import { experience } from "../types";
import UpRightArrow from "/public/icons/up-right-arrow.svg";
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
      <Link href={"/pdf/resume.pdf"} className="flex gap-2 group mt-8">
        <h3 className="text-secondary-color text-base font-semibold group-hover:text-primary-accent transition ease-in-out">
          View Full <span>Résumé</span>
        </h3>
        <UpRightArrow className="w-4 h-4 self-end group-hover:fill-primary-accent group-hover:-translate-y-3 transition ease-in-out" />
      </Link>
    </section>
  );
};

export default Experience;
