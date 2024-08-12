import React, { useRef, useState } from "react";
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
  const formRef = useRef(null);
  const [successMessage, setSucessMessage] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bbc150f1-a0f8-4afe-bb12-e208469de2d3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      formRef.current.reset();
      setSucessMessage("Form Submitted Successfully !");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="border-b border-neutral-900 pb-20"
    >
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center tracking-tighter"
      >
        <div className="mb-8 border-solid border-slate-100">
          <input
            className="w-3/4 p-4 text-black rounded-lg"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-8">
          <input
            className="w-3/4 p-4 text-black rounded-lg"
            type="text"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-8">
          <textarea
            className="w-3/4 p-4 text-black rounded-lg"
            type="message"
            rows={8}
            cols={5}
            placeholder="Message..."
            name="message"
            required
          />
        </div>
        <div className="mb-8">
          <button
            type="submit"
            className="text-white bg-sky-500 px-8 py-2 rounded-lg hover:bg-sky-700 hover:px-9"
          >
            Submit
          </button>
        </div>
        {successMessage && (
          <div
            className="text-3xl font-bold transition-transform "
            style={{ marginTop: "20px", color: "green" }}
          >
            {successMessage}
          </div>
        )}
      </motion.div>
    </form>
  );
};

export default Contact;
