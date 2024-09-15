import React from "react";
import { projects } from "../types";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="mt-20 pt-8" id="projects">
      <h3 className="text-primary-accent font-semibold text-xl">Projects</h3>
      {projects.map((project) => (
        <ProjectCard
          img={project.img}
          projectName={project.projectName}
          desc={project.desc}
          technologies={project.technologies}
        />
      ))}
    </section>
  );
};

export default Projects;
