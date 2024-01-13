import React from "react";
import Skill from "./Skill";

const Skills = () => {
  const skills =  [
    { id: "1", uniqueId: 345, url: "https://react.dev/", image: { url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689771245/react_udjyim.gif" }, skill: "React.js", fieldType: "Frontend", proficient: true },
    { id: "2", uniqueId: 5, url: "https://example.com/skill2", image: { url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689771434/nextjs_husaqo.png" }, skill: "Skill 2", fieldType: "Frontend", proficient: true },
    { id: "3", uniqueId: 6, url: "https://example.com/skill3", image: { url: "https://media.graphassets.com/eBYTbBr6TjiL3QwFGpB8" }, skill: "Skill 3", fieldType: "Frontend", proficient: true },
    { id: "4", uniqueId: 7, url: "https://example.com/skill3", image: { url: "https://media.graphassets.com/RI0hCnqnSZOxqGBYnpyn" }, skill: "Skill 3", fieldType: "Frontend", proficient: true },
    { id: "5", uniqueId: 8, url: "https://example.com/skill3", image: { url: "https://media.graphassets.com/w1aOEFM4QJeTsw9oeuxK" }, skill: "Skill 3", fieldType: "UILibraries", proficient: true },
    { id: "6", uniqueId: 6, url: "https://example.com/skill3", image: { url: "https://media.graphassets.com/N2y2n0F0TbAKs1wnjsyn" }, skill: "Skill 3", fieldType: "UILibraries", proficient: true },
    { id: "17", uniqueId: 6, url: "https://example.com/skill3", image: { url: "https://media.graphassets.com/mdvygiqjQyqXqUQ8Ao7V" }, skill: "Skill 3", fieldType: "UILibraries", proficient: true },
    { id: "13", uniqueId: 7, url: "https://example.com/skill3", image: { url: "https://media.graphassets.com/HMkI85yQ4OdrmGUD9Tuu" }, skill: "Skill 3", fieldType: "Headless CMS", proficient: true },
    { id: "11", uniqueId: 8, url: "https://example.com/skill3", image: { url: "https://cdn.pixabay.com/photo/2014/04/03/10/09/coffee-309981_640.png" }, skill: "Skill 3", fieldType: "Languages", proficient: true },
    { id: "14", uniqueId: 16, url: "https://example.com/skill3", image: { url: "https://media.graphassets.com/jv297qdRSyyrHNp7ZMpa" }, skill: "Skill 3", fieldType: "Testing", proficient: true },
    { id: "15", uniqueId: 7, url: "https://example.com/skill3", image: { url: "https://media.graphassets.com/Pkrk5IPsSG6cjHhaHaem" }, skill: "Skill 3", fieldType: "Testing", proficient: true },
     { id: "10", uniqueId: 7, url: "https://example.com/skill3", image: { url: "https://cdn.pixabay.com/photo/2017/04/14/11/45/letter-c-2229970_640.png" }, skill: "Skill 3", fieldType: "Languages", proficient: true },
     { id: "9", uniqueId: 6, url: "https://example.com/skill3", image: { url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689772381/typescript_ulknlz.png" }, skill: "Skill 3", fieldType: "Languages", proficient: true },
     { id: "8", uniqueId: 8, url: "https://example.com/skill3", image: { url: "https://res.cloudinary.com/dfcopuk6m/image/upload/v1689772674/js1_jhdigw.png" }, skill: "Skill 3", fieldType: "Languages", proficient: true },
     { id: "16", uniqueId: 7, url: "https://example.com/skill3", image: { url: "https://media.graphassets.com/NjTUi572QeC6Qvkb2CNE" }, skill: "Skill 3", fieldType: "Testing", proficient: true },


    // Add more skills as needed
  ];

  const languages = skills?.filter((skill) => skill?.fieldType?.toLowerCase() === "languages");
  const frontend = skills?.filter((skill) => skill?.fieldType?.toLowerCase() === "frontend");
  const uilibraries = skills?.filter((skill) => skill?.fieldType?.toLowerCase() === "uilibraries");
  const headlessCms = skills?.filter((skill) => skill?.fieldType?.toLowerCase() === "headless cms");
  const testing_tools = skills?.filter(
    (skill) =>
      skill?.fieldType?.toLowerCase() === "testing" || skill?.fieldType?.toLowerCase() === "tools"
  );

  return (
    <div>
      <h1 className="skills_heading">Skills</h1>
      <div className="skills_box">
        <Skill skills={languages} skill="Languages" />
        <Skill skills={frontend} skill="Frontend" />
        <Skill skills={uilibraries} skill="UI Libraries" />
        <Skill skills={headlessCms} skill="Headless CMS" />
        <Skill skills={testing_tools} skill="Testing & Tools" />
      </div>
    </div>
  );
};

export default Skills;
