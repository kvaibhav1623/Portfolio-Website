import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DSA Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "ESS",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Engineered and deployed EVA, an intelligent chatbot powered by Lang Chain, to streamline ERP processes, enhancing usability and reducing task completion time by 60%.",
        "Designed and integrated robust APIs, enabling seamless data exchange between EVA and ERP systems for efficient workflow automation",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Freelance",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "200+ Questions",
      company_name: "Leetcode",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "Completed 200+ DSA questions on LeetCode, showcasing advanced problem-solving abilities.",
        "Mastered key algorithms and data structures including sorting, dynamic programming, and graphs.",
        "Proficient in implementing fundamental data structures like arrays, linked lists, and trees.",
        "Enhanced coding skills in C++ through practical algorithmic challenges.",
      ],
    },
    {
      title: "Campus Ambassador",
      company_name: "CN",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Served as a campus ambassador, promoting the organization's mission and activities to peers.",
        "Organized events and workshops to boost awareness and engagement on campus.",
        "Collected feedback to enhance outreach strategies and program effectiveness.",
        "Collaborated with the organization's leadership on creative marketing campaigns tailored to the campus community.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Paint APP",
      description:
        "A Paint application made by HTML , CSS , JS allowing users to create and draw intuitively .",
      tags: [
        {
          name: "CANVAS",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "TAILWIND",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://whiteboard-sage-two.vercel.app/",
    },
    {
      name: "Two-Good",
      description:
        "A marketplace website powered by HTML CSS JS and GSAP for modern animations and user experience.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://two-good-pearl.vercel.app/",
    },
    {
      name: "Obys Agency",
      description:
        "A very graphic intense website , with modern animations with use of modern libraries with smooth scrolling and great user experience",
      tags: [
        {
          name: "SHERY JS",
          color: "blue-text-gradient",
        },
        {
          name: "LOCOMOTIVE",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://obys-agency-lime.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
