// CourseOptions.jsx

import React from "react";
import { styles } from "../styles";

const CourseOptions = ({ active, setActive }) => {
  const options = [
    "SHOPDOTS",
    "PORTFOLIO",
    "LMS-BUILD",
    "DFG-FORM",
    "Let's Build"
  ];

  return (
    <div className="course-options-container">
      {options.map((option, index) => (
        <div key={index} className="course-option">
          <div
            className={`option-indicator ${active + 1 > index ? "active" : "inactive"}`}
          >
            {active + 1 > index && <div className="checkmark-icon">&#10003;</div>}
            {index !== options.length - 1 && (
              <div
                className={`progress-line ${active + 1 > index ? "active" : "inactive"}`}
              />
            )}
          </div>
          <h5
            className={`option-text ${active === index ? "active" : "inactive"}`}
            onClick={() => setActive(index)}
          >
            {option}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default CourseOptions;
