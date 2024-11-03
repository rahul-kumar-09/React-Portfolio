import React, { useRef } from "react";
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
  return (
    <div className="mb-24 drop mynav">
      <nav className="mb-20 flex backdrop-blur bg-[#161620] items-center justify-between fixed w-full overflow-hidden top-0 left-0">
        <div className="flex flex-shrink-0 items-center">
          <h1
            className="mx-2 w-15 text-4xl cursor-pointer"
            onClick={() => scrollHandler(home)}
          >
            {" "}
            RKM{" "}
          </h1>
        </div>
        <ul className="flex gap-5 mynav items-center ">
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
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
    </div>
  );
};

export default Navbar;
