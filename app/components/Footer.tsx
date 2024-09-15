import React from "react";

const Footer = () => {
  return (
    <footer className="mt-36 lg:w-3/4 text-neutral-color font-light">
      <p className="text-sm">
        Loosely designed in <span className="font-bold">Figma</span> and coded
        in <span className="font-bold">Visual Studio Code </span>
        by yours truly. Built with <span className="font-bold">
          Next.js
        </span>{" "}
        and <span className="font-bold">Tailwind CSS</span>, deployed with{" "}
        <span className="font-bold">Vercel</span>. All text is set in the Inter
        typeface.
      </p>
    </footer>
  );
};

export default Footer;
