import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. With proficiency in HTML, CSS, JavaScript, React, Bootstrap,  and Tailwind CSS, I bring a robust skill set to every project. My journey in web development began with a deep curiosity for how things work, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Shopping website",
    image: project1,
    description:
      "We make shopping simple, secure, and stylish. Our goal? To bring you a seamless shopping experience with features you’ll actually love—from a smooth add-to-cart system to a secure and easy login for managing your orders.",
    technologies: ["HTML", "CSS", "React"],
    projectLink: "https://shopping-website-one-flax.vercel.app/",
  },
  {
    title: "Grocery Store",
    image: project2,
    description:
      "Welcome to our Grocery Store, where convenience meets quality. We offer a wide range of fresh produce, pantry staples, and household essentials, all at competitive prices. Whether you're looking to stock up on everyday items or find specialty products, our user-friendly platform makes shopping quick and easy. Enjoy fast delivery, secure payment options, and exceptional customer service as you browse through our extensive selection of groceries tailored to meet your needs.",
    technologies: ["React.js", "CSS", "tailwindcss.com", "framer motion"],
    projectLink: "https://grocery-website-mu.vercel.app/",
  },
  {
    title: "Blog website",
    image: project3,
    description:
      "We believe in the power of storytelling, ideas, and sharing knowledge. This blog is a space where creativity meets information—offering insights, tutorials, personal experiences, and thought-provoking articles across a variety of topics.",
    technologies: ["HTML", "CSS", "Next.js", "Tailwind"],
    projectLink: "https://next-blog-app-rouge-seven.vercel.app/",
  },
  {
    title: "URL Shortner",
    image: project4,
    description:
      "This project is a URL Shortener web application built using Node.js, Express.js, and MongoDB. It allows users to convert long URLs into short, easily shareable links, and redirect back to the original URL when accessed. Think of it like your own version of Bitly or TinyURL!",
    technologies: ["Node", "Express", "Mongodb"],
    projectLink: "https://github.com/rahul-kumar-09/URL_Shortener",
  },
];

export const CONTACT = {
  address: "noida, India ",
  phoneNo: "+91 978** ***** ",
  email: "me@example.com",
};
