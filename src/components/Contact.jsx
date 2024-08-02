import React from "react";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center tracking-tighter"
      >
        <div className="mb-8 border-solid border-slate-100">
          <input
            className="w-2/4 p-4 text-black rounded-lg"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-8">
          <input
            className="w-2/4 p-4 text-black rounded-lg"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-8">
          <textarea
            className="w-2/4 p-4 text-black rounded-lg"
            type="message"
            rows={8}
            cols={5}
            placeholder="Message..."
          />
        </div>
        <div className="mb-8">
          <button className="text-white bg-sky-500 px-8 py-2 rounded-lg hover:bg-sky-700 hover:px-9">
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
