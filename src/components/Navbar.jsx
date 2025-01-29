import React, { useRef, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = ({
  scrollHandler,
  home,
  about,
  contact,
  technologie,
  project,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // Function to close the menu
  const closeMenu = (name) => {
    scrollHandler(name);
    setIsOpen(false);
  }

  return (
    <div className="mb-24 drop mynav">
      <nav className="mb-20 flex backdrop-blur py-2 pr-2 lg:pr-0 lg:py-0 bg-[#161620] items-center justify-between fixed w-full overflow-hidden top-0 left-0">
        <div className="flex flex-shrink-0 items-center">
          <h1
            className="mx-2 w-15 text-4xl cursor-pointer"
            onClick={() => scrollHandler(home)}
          >
            {" "}
            RKM{" "}
          </h1>
        </div>

        {/* Menu Button for Mobile */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className=" gap-5 mynav items-center hidden md:flex space-x-6">
          <li className="cursor-pointer" onClick={() => scrollHandler(home)}>
            Home{" "}
          </li>
          <li className="cursor-pointer" onClick={() => scrollHandler(about)}>
            About{" "}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollHandler(technologie)}
          >
            Technologies{" "}
          </li>
          <li className="cursor-pointer" onClick={() => scrollHandler(project)}>
            Projects
          </li>
          <li className="cursor-pointer" onClick={() => scrollHandler(contact)}>
            Contact us
          </li>
        </ul>

        <div className="m-8 items-center justify-center gap-4 text-2xl hidden md:flex space-x-6">
          <a
            href="https://www.linkedin.com/in/rahul-kumar-maury-479270270/"
            target="_blank"
          >
            {" "}
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/rahul.code9/" target="_blank">
            {" "}
            <BsInstagram />
          </a>
          <a href="https://github.com/rahul-kumar-09" target="_blank">
            <FaGithub />
          </a>
          {/* <FaTwitter /> */}
        </div>
      </nav>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden rounded-md mt-5 space-y-2 px-4 py-4 fixed w-full overflow-hidden top-5 left-0 bg-[#161620]`}
      >
        <li
          className="block text-sm py-2 px-4 rounded-md"
          onClick={() => closeMenu(home)}
        >
          Home
        </li>{" "}
        <li
          className="block text-sm py-2 px-4 rounded-md"
          onClick={() => closeMenu(about)}
        >
          About
        </li>{" "}
        <li
          className="block text-sm py-2 px-4 rounded-md"
          onClick={() => closeMenu(technologie)}
        >
          Technologies
        </li>{" "}
        <li
          className="block text-sm py-2 px-4 rounded-md"
          onClick={() => closeMenu(project)}
        >
          Projects
        </li>{" "}
        <li
          className="block text-sm py-2 px-4 rounded-md"
          onClick={() => closeMenu(contact)}
        >
          Contact us
        </li>
        <li className="block text-sm py-2 px-4 rounded-md">
          <div className=" items-center justify-start gap-4 text-2xl flex space-x-6">
            <a
              href="https://www.linkedin.com/in/rahul-kumar-maury-479270270/"
              target="_blank"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/rahul.code9/" target="_blank">
              {" "}
              <BsInstagram />
            </a>
            <a href="https://github.com/rahul-kumar-09" target="_blank">
              <FaGithub />
            </a>
            {/* <FaTwitter /> */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
