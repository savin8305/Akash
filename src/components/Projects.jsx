import { useEffect, useState } from "react";
import Github from "../assets/github.webp";
import Web from "../assets/www.webp";
// import "./styles/Projects.scss"
const Projects = () => {
  const [activeTag, setActiveTag] = useState("all");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Mocking the project data
   const projectData = [
    {
      id: 1,
      title: "MERN ESHOP",
      techStack: ["React", "TypeScript"],
      description: "Developed multi-vendor e-commerce app using MERN stack with admin and chat functionality.",
      image: {
        url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689583549/Online.gif",
        
      },
      githubLink: "https://github.com/savin8305/headphones-ecommerce ",
    },
    {
      id: 2,
      title: "MERN SKILL BUILD",
      techStack: ["React", "JavaScript"],
      description: "MERN stack project that serves as a subscription-based platform for students and teachers.",
      image: {
        url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689692182/ui_yqncwj.gif",
      },
      githubLink: "https://github.com/savin8305/SkillBuilder",
    },
    {
      id: 3,
      title: "LABOUR CHOWK",
      techStack: ["React", "JavaScript"],
      description: "quick match making solution. A cheaper and easy accessible platform for skill matching.",
      image: {
        url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689644447/Building_Brick_Wall_uhbxxh.gif",
      },
      githubLink: "https://github.com/savin8305/Let-s-Build-minor-project-",
    },
    {
      id: 4,
      title: "HELPER",
      techStack: ["React", "JavaScript","CSS"],
      description: "The helper will assist you in constructing your assignment notes from text.",
      image: {
        url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689685327/30_io2ogb.gif",
      },
      githubLink: "https://github.com/savin8305/Helper",
    },
    {
      id: 5,
      title: "FILE ORGANIZER",
      techStack: ["Node.js", "JavaScript"],
      description: "FILE ORGANIZER: As per the command, organize the folder based on the extension of media.",
      image: {
        url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689692069/61_wjrvtw.gif",
      },
      githubLink: "https://github.com/savin8305/File_Organizer",
    },
    {
      id: 6,
      title: "EXCELL CLONE",
      techStack: ["CSS", "JavaScript"],
      description: "A simple Excel clone based on JavaScript and CSS provides a lightweight and user-friendly.",
      image: {
        url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689689468/60_sf38zk.gif",
      },
      githubLink: "https://github.com/savin8305",
    },
    {
      id: 7,
      title: "Java",
      techStack: ["Java"],
      description: "Command Line practice of core java and OOPS in java ,multithreading and error handling.",
      image: {
        url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689692369/Java_xikkqr.jpg",
      },
      githubLink: "https://github.com/savin8305/Java_booking",
    },
    {
      id: 8,
      title: "Mvc ToDo",
      techStack: ["php"],
      description: "Simple Todo web app using MVC structure, AJAX and PDO.",
      image: {
        url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689815138/to-do-list-check-list_pdrrsn.gif",
      },
      githubLink: "https://github.com/savin8305/TodoList/tree/master",
    },
    // Add more project objects here
  ];

    setProjects(projectData);
  }, []);

  useEffect(() => {
    if (activeTag === "all") {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects?.filter((project) =>
      project?.techStack?.some((tech) =>
        tech?.toLowerCase()?.includes(activeTag?.toLowerCase())
      )
    );

    setFilteredProjects(filtered);
  }, [activeTag, projects]);

  return (
    <>
      <h1 className="projects_heading">Projects</h1>
      <div className="projects_filter">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="projects_filter_box"
        >
          {/* Filter buttons */}
          <div
            onClick={() => setActiveTag("all")}
            className={`projects_filter_box_item ${
              activeTag === "all" ? "activeTag" : ""
            }`}
          >
            All
          </div>
          <div
            onClick={() => setActiveTag("react")}
            className={`projects_filter_box_item ${
              activeTag === "react" ? "activeTag" : ""
            }`}
          >
            React
          </div>
          <div
            onClick={() => setActiveTag("typescript")}
            className={`projects_filter_box_item ${
              activeTag === "typescript" ? "activeTag" : ""
            }`}
          >
            TypeScript
          </div>
          <div
            onClick={() => setActiveTag("javascript")}
            className={`projects_filter_box_item ${
              activeTag === "javascript" ? "activeTag" : ""
            }`}
          >
            JavaScript
          </div>
          <div
            onClick={() => setActiveTag("php")}
            className={`projects_filter_box_item ${
              activeTag === "php" ? "activeTag" : ""
            }`}
          >
            PHP
          </div>
          <div
            onClick={() => setActiveTag("Java")}
            className={`projects_filter_box_item ${
              activeTag === "Java" ? "activeTag" : ""
            }`}
          >
            Java
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="projects_filter_cardsBox"
        >
          {/* Project cards */}
          {filteredProjects?.map((project) => (
            <div key={project?.id} className="projects_filter_cardsBox_card">
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                src={project?.image?.url}
                alt=""
                className="projects_filter_cardsBox_card_img"
              />
              <p className="projects_filter_cardsBox_card_title">
                {project?.title}
              </p>
              <div className="projects_filter_cardsBox_card_techStack">
                {project?.techStack?.map((stack) => {
                  if (stack?.toLowerCase() !== "all") {
                    return (
                      <span
                        key={stack}
                        className="projects_filter_cardsBox_card_techStack_tech"
                      >
                        {stack}
                      </span>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
              <p className="projects_filter_cardsBox_card_description">
                {project?.description}
              </p>
              <div className="projects_filter_cardsBox_card_links">
                <img
                  src={Github}
                  alt=""
                  onClick={() => window.open(project?.githubLink, "_blank")}
                  className={project?.demoLink ? "margin-right" : ""}
                />
                {project?.demoLink && (
                  <img
                    src={Web}
                    alt=""
                    onClick={() => window.open(project?.demoLink, "_blank")}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;