import React from "react";
import ProjectProps from "../types/projectsProps";
import Link from "next/link";
import Image from "next/image";
import TechStack from "./TechStack";

const ProjectCard: React.FC<ProjectProps> = ({
  img,
  projectName,
  desc,
  technologies,
}) => {
  return (
    <>
      <Link href="https://github.com/lyllyl432">
        <div className="flex flex-col-reverse sm:flex-row group text-neutral-color font-light gap-4 py-2 px-4 mt-4 hover:bg-secondary-accent-variant hover:text-neutral-color-variant rounded-2xl transition-all">
          <Image
            className="self-start sm:w-52 w-36 border-2 border-neutral-color rounded-md"
            src={img}
            alt="project image"
            width={100}
            height={100}
          />
          <div className="basis-full">
            <h4 className="text-base font-semibold text-secondary-color group-hover:text-primary-accent">
              {projectName}
            </h4>
            <p className="text-sm mt-3">{desc}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <TechStack name={technology} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
