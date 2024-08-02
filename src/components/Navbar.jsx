import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 w-15 text-4xl"> RKM </h1>
      </div>
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
  );
};

export default Navbar;
