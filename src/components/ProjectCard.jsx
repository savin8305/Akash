import React, { useState } from "react";
import Portfolio from "./Portfolio";
import profilePic from "../assets/profilePic.webp"
function ProjectCard() {
  const [activeTechStack, setActiveTechStack] = useState("all");

  const handleTechStackChange = (techStack) => {
    setActiveTechStack(techStack);
  };

  const webdevdata = [
    {
      id: 1,
      name: "IT & Management",
      about:
        "An IT & Management project delivering a powerful and user-friendly platform for streamlined IT operations and efficient management solutions",
      githubLink: "https://github.com/savin8305/It-Management",
      liveLink: "https://upsys.netlify.app/",
      techStackData: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      contactInfo: "webdev1@example.com",
      imageUrl:profilePic,
    },
    {
      id: 2,
      name: "Boost_IoT_CluB",
      githubLink: "https://github.com/GautamParmaar/BOOST-IoT-Dashboard",
      liveLink: "https://boost-iot.vercel.app/",
      about:
        "An impactful front-end project crafted with HTML and CSS, delivering a visually stunning and user-centric web interface",
      techStackData: [
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "NodeJS",
        "MQTT",
        "Firebase",
        "ESP8266",
      ],
      contactInfo: "webdev2@example.com",
      imageUrl: "https://cdn.pixabay.com/photo/2017/09/17/02/02/png-2757379_640.png",
    },
    {
      id: 4,
      name: "Web Developer",
      githubLink: "https://github.com/savin8305/Akash",
      liveLink: "https://akashvi.netlify.app/",
      about:
        "Experience my personal portfolio—a showcase of my journey, skills, and achievements. Discover a collection of my work, projects, and expertise.",
      techStackData: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      imageUrl: "https://akashvi.netlify.app/assets/14-3d74bc3a.webp",
    },{
      id: 5,
      name: "Web Developer",
      githubLink: "https://github.com/savin8305/Akash",
      liveLink: "https://akashvi.netlify.app/",
      about:
        "Experience my personal portfolio—a showcase of my journey, skills, and achievements. Discover a collection of my work, projects, and expertise.",
      techStackData: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      imageUrl: "https://akashvi.netlify.app/assets/14-3d74bc3a.webp",
    },{
      id: 6,
      name: "Web Developer",
      githubLink: "https://github.com/savin8305/Akash",
      liveLink: "https://akashvi.netlify.app/",
      about:
        "Experience my personal portfolio—a showcase of my journey, skills, and achievements. Discover a collection of my work, projects, and expertise.",
      techStackData: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      imageUrl: "https://akashvi.netlify.app/assets/14-3d74bc3a.webp",
    },
    // Add more webdevdata objects as needed
  ];

  return (
    <div>
      <h1 className="projects_heading">Web Development Projects</h1>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="projects_filter_box"
      >
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("all")}
        >
          All
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("react")}
        >
          React
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("java")}
        >
          Java
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("python")}
        >
          Python
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("javascript")}
        >
          JavaScript
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("nodejs")}
        >
          Node.js
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("express")}
        >
          Express.js
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("mongodb")}
        >
          MongoDB
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("html")}
        >
          HTML
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("css")}
        >
          CSS
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("typescript")}
        >
          TypeScript
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("mysql")}
        >
          MySQL
        </button>
        <button
          className="projects_filter_box_item"
          onClick={() => handleTechStackChange("supabase")}
        >
          Supabase
        </button>
        {/* Add more buttons for other tech stacks as needed */}
      </div>

      <Portfolio data={webdevdata} activeTechStack={activeTechStack} />
    </div>
  );
}

export default ProjectCard;
