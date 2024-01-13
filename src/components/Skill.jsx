
import React from "react";
// import "./styles/Skill.scss"
const Skill = ({ skills, skill }) => {
  return (
    <div  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="skills_box_container ">
      <p className="skills_box_container_heading">{skill}</p>
      <div className="skills_box_container_row ">
        {skills?.map((skill) => (
          <div
            key={skill?.id}
            className="card5 card-overlay skills_box_container_row_card"
            onClick={() => window.open(skill?.url, "_blank")}
          >
            <img className="card-inner " src={skill?.image?.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skill;
