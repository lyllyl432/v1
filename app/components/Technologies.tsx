import React from "react";
import TechStack from "./TechStack";
import BootstrapIcon from "/public/icons/bootstrap-original.svg";
import CodeIgniterIcon from "/public/icons/codeigniter-plain.svg";
import GitIcon from "/public/icons/git-original.svg";
import LaravelIcon from "/public/icons/laravel-original.svg";
import MySqlIcon from "/public/icons/mysql-original.svg";
import NextJsIcon from "/public/icons/nextjs-original.svg";
import PhpIcon from "/public/icons/php-original.svg";
import PostgreIcon from "/public/icons/postgresql-original.svg";
import ReactIcon from "/public/icons/react-original.svg";
import TailwindIcon from "/public/icons/tailwindcss-original.svg";
import TypescriptIcon from "/public/icons/typescript-original.svg";
import FigmaIcon from "/public/icons/figma-original.svg";
import TechStackProps from "../types/techstacks";

const Technologies = () => {
  //store svgs as object with specified name property
  const techStacks: TechStackProps[] = [
    { Icon: ReactIcon, name: "React" },
    { Icon: NextJsIcon, name: "Next.js" },
    { Icon: TypescriptIcon, name: "TypeScript" },
    { Icon: TailwindIcon, name: "Tailwind CSS" },
    { Icon: BootstrapIcon, name: "Bootstrap" },
    { Icon: PhpIcon, name: "Php" },
    { Icon: CodeIgniterIcon, name: "CodeIgniter" },
    { Icon: LaravelIcon, name: "Laravel" },
    { Icon: MySqlIcon, name: "MySQL" },
    { Icon: PostgreIcon, name: "PostgreSQL" },
    { Icon: GitIcon, name: "Git" },
    { Icon: FigmaIcon, name: "Figma" },
  ];
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
