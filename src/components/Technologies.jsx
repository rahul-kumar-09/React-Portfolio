import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TiVendorAndroid } from "react-icons/ti";
import { animate, motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center gap-4 flex-wrap"
      >
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            {" "}
            <FaHtml5 className="text-7xl text-red-600" />{" "}
          </motion.div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <motion.div
            variants={iconVariants(2.0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            <IoLogoCss3 className="text-7xl text-blue-500" />
          </motion.div>
        </a>
        <a href="https://devdocs.io/javascript/">
          <motion.div
            variants={iconVariants(3.0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            <IoLogoJavascript className="text-7xl text-yellow-500" />
          </motion.div>
        </a>
        <a href="https://react.dev/">
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            <FaReact className="text-7xl text-cyan-500" />
          </motion.div>
        </a>
        <a href="https://tailwindcss.com/">
          <motion.div
            variants={iconVariants(2.0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            <RiTailwindCssFill className="text-7xl text-cyan-300" />
          </motion.div>
        </a>

        <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
          <motion.div
            variants={iconVariants(3.0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            <FaBootstrap className="text-7xl text-purple-500" />
          </motion.div>
        </a>

        <a href="https://docs.oracle.com/en/java/">
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            <FaJava className="text-7xl text-sky-500" />
          </motion.div>
        </a>

        <a href="https://developer.android.com/develop">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            <TiVendorAndroid className="text-7xl text-green-500" />
          </motion.div>
        </a>

        <a href="https://nextjs.org/docs">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            <RiNextjsFill className="text-7xl text-white bg-black" />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default Technologies;
