import React from "react";
import TechStack from "./TechStack";
import { techStacks } from "../types";

const Technologies = () => {
  return (
    <section className="mt-36">
      <h3 className="text-primary-accent font-semibold text-xl">
        Technologies
      </h3>
      <div className="flex flex-wrap gap-4 mt-4">
        {techStacks.map((technology, index) => (
          <TechStack
            key={index}
            Icon={technology.Icon}
            name={technology.name}
          ></TechStack>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
