"use client";
import React, { useRef, useEffect } from "react";
import InstagramIcon from "/public/icons/icons8-instagram.svg";
import FacebookIcon from "/public/icons/icons8-facebook.svg";
import GithubIcon from "/public/icons/icons8-github.svg";
import GmailIcon from "/public/icons/icons8-gmail.svg";
import LinkedInIcon from "/public/icons/icons8-linkedin.svg";
import Link from "next/link";

const Header = () => {
  const menuRef = useRef("");
  useEffect(() => {
    const sections = document.querySelectorAll(
      "section"
    ) as NodeListOf<HTMLElement>;
    const menuList = document.querySelectorAll(".navigation-list");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 6) {
          menuRef.current = section.getAttribute("id")!;
        }
      });
      menuList.forEach((menu) => {
        menu.classList.remove("active");
        if (menu.classList.contains(menuRef.current)) {
          menu.classList.add("active");
        }
      });
    });
  });
  return (
    <>
      <header className="lg:fixed lg:max-w-96 sm:pt-24 pt-11">
        <h1 className="font-bold sm:text-5xl text-4xl">John Lyl Auditor</h1>
        <h2 className="font-medium sm:text-2xl text-lg sm:mt-4 mt-3">
          Junior Full Stack Developer
        </h2>
        <p className="text-neutral-color lg:mt-4 mt-3 font-light sm:text-base text-sm">
          I create precise, elegant, and user-friendly digital experiences that
          are both visually stunning and accessible to all.
        </p>
        <nav className="mt-20 hidden lg:block">
          <ul>
            <li className="flex gap-2 items-center navigation-list group active about">
              <hr className="w-8 group-hover:w-16 border border-b-0 border-l-0 border-right-0 transition-all horizontal-nav-line" />
              <Link
                href="#about"
                className="text-neutral-color font-light text-base group-hover:text-secondary-color"
              >
                ABOUT
              </Link>
            </li>
            <li className="flex gap-2 items-center navigation-list  group mt-4 technologies">
              <hr className="w-8 group-hover:w-16 border border-b-0 border-l-0 border-right-0 transition-all horizontal-nav-line" />
              <Link
                className="text-neutral-color font-light text-base group-hover:text-secondary-color"
                href="#technologies"
              >
                TECHNOLOGIES
              </Link>
            </li>
            <li className="flex gap-2 items-center navigation-list  group mt-4 experience">
              <hr className="w-8 group-hover:w-16 border border-b-0 border-l-0 border-right-0 transition-all horizontal-nav-line" />
              <Link
                className="text-neutral-color font-light text-base group-hover:text-secondary-color"
                href="#experience"
              >
                EXPERIENCE
              </Link>
            </li>
            <li className="flex gap-2 items-center navigation-list group mt-4 projects">
              <hr className="w-8 group-hover:w-16 border border-b-0 border-l-0 border-right-0 transition-all horizontal-nav-line" />
              <Link
                className="text-neutral-color font-light text-base group-hover:text-secondary-color"
                href="#projects"
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-4 items-center mt-8">
          <li>
            <Link href="https://github.com/lyllyl432" target="_blank">
              {
                <GithubIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/auditor-john-lyl-680500287/"
              target="_blank"
            >
              {
                <LinkedInIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </Link>
          </li>
          <li>
            <Link href="https://www.lyllyl432@gmail.com" target="_blank">
              {
                <GmailIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/akoosilyl/" target="_blank">
              {
                <FacebookIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/l_ly_lyl/" target="_blank">
              {
                <InstagramIcon className="fill-neutral-color hover:fill-primary-accent" />
              }
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
