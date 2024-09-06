import React from "react";
import InstagramIcon from "/public/icons/icons8-instagram.svg";
import FacebookIcon from "/public/icons/icons8-facebook.svg";
import GithubIcon from "/public/icons/icons8-github.svg";
import GmailIcon from "/public/icons/icons8-gmail.svg";
import LinkedInIcon from "/public/icons/icons8-linkedin.svg";

const Header = () => {
  return (
    <>
      <header className="lg:fixed lg:max-w-96">
        <h1 className="font-bold lg:text-5xl">John Lyl Auditor</h1>
        <h2 className="font-medium lg:text-2xl lg:mt-4">
          Full Stack Developer
        </h2>
        <p className="text-neutral-color lg:mt-4 font-light text-base">
          Lorem ipsum dolor sit amet consectetur. Neque enim tortor purus
          malesuada.
        </p>
        <nav className="mt-20">
          <ul>
            <li className="flex gap-2 items-center navigation-list group active">
              <hr className="w-8 group-hover:w-16 border border-b-0 border-l-0 border-right-0 transition-all horizontal-nav-line" />
              <a
                className="text-neutral-color font-light text-base group-hover:text-secondary-color"
                href=""
              >
                ABOUT
              </a>
            </li>
            <li className="flex gap-2 items-center navigation-list  group mt-4">
              <hr className="w-8 group-hover:w-16 border border-b-0 border-l-0 border-right-0 transition-all horizontal-nav-line" />
              <a
                className="text-neutral-color font-light text-base group-hover:text-secondary-color"
                href=""
              >
                TECHNOLOGIES
              </a>
            </li>
            <li className="flex gap-2 items-center navigation-list  group mt-4">
              <hr className="w-8 group-hover:w-16 border border-b-0 border-l-0 border-right-0 transition-all horizontal-nav-line" />
              <a
                className="text-neutral-color font-light text-base group-hover:text-secondary-color"
                href=""
              >
                EXPERIENCE
              </a>
            </li>
            <li className="flex gap-2 items-center navigation-list group mt-4">
              <hr className="w-8 group-hover:w-16 border border-b-0 border-l-0 border-right-0 transition-all horizontal-nav-line" />
              <a
                className="text-neutral-color font-light text-base group-hover:text-secondary-color"
                href=""
              >
                PROJECTS
              </a>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-4 items-center mt-8">
          <li>
            <a href="https://github.com/lyllyl432">
              {
                <GithubIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/auditor-john-lyl-680500287/">
              {
                <LinkedInIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </a>
          </li>
          <li>
            <a href="https://www.lyllyl432@gmail.com">
              {
                <GmailIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/akoosilyl/">
              {
                <FacebookIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/l_ly_lyl/">
              {
                <InstagramIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
