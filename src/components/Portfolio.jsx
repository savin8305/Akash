import React, { useState, useEffect } from "react";
import { github } from "../assets";
import live from "../assets/live.png";
import { IoIosArrowUp } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

function Portfolio({ data, activeTechStack }) {
  const [activeSections, setActiveSections] = useState(data.map(() => null));
  const [filteredData, setFilteredData] = useState([]);
  const wwwIconStyle = {
    fontSize: "1.7rem", // Corrected syntax for the size
    fill: "blue", // You can change the fill color or any other style properties
};

  useEffect(() => {
    if (activeTechStack === "all") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((card) =>
        card.techStackData.includes(activeTechStack.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [activeTechStack, data]);

  const handleButtonClick = (index, targetSection) => {
    const updatedActiveSections = [...activeSections];
    updatedActiveSections[index] =
      updatedActiveSections[index] === targetSection ? null : targetSection;
    setActiveSections(updatedActiveSections);
  };

  const handleCancelButtonClick = (index) => {
    const updatedActiveSections = [...activeSections];
    updatedActiveSections[index] = null;
    setActiveSections(updatedActiveSections);
  };
  const arrowUpStyle = {
    fontSize: "2em", // You can adjust the size as needed
    color: "blue", // You can change the color or any other style properties
  };

  return (
    <div style={{ margin: "auto" }} align="center" className="container5">
      {filteredData.map((card, index) => (
        <div
          style={{ margin: "auto" }}
          align="center"
          className={`card`}
          data-state={activeSections[index]}
          key={card.id}
        >
          <div className="card-header">
            <div
              style={{
                backgroundImage: `url('${card.imageUrl}')`,
              }}
              className="card-cover"
            ></div>
            <h1 className="card-fullname">{card.name}</h1>
            <h2 className="card-jobtitle">{card.jobTitle}</h2>
          </div>
          <div className="card-main">
            <div
              className={`card-section ${
                activeSections[index] === "#about" ? "is-active" : ""
              }`}
              id="about"
            >
              <div className="card-content">
                <div className="card-subtitle">Description</div>
                <div className="card-desc-container">
                  <p className="card-desc">{card.about}</p>
                </div>
              </div>
            </div>
            <div
              className={`card-section ${
                activeSections[index] === "#experience" ? "is-active" : ""
              }`}
              id="experience"
            >
              <div className="card-content">
                <div className="card-subtitle">Tech Stack</div>
                <div className="card-tech-stack">
                  {card.techStackData.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`card-tech-item ${
                        activeSections[index] === "#experience"
                          ? "is-active"
                          : ""
                      }`}
                      onClick={() => handleButtonClick(index, "#experience")}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`card-section ${
                activeSections[index] === "#contact" ? "is-active" : ""
              }`}
              id="contact"
            >
              <div className="card-content">
                <div className="card-subtitle">CONTACT</div>
                <div className="card-contact-wrapper">
                  <div className="card-contact">
                    {card.liveLink && (
                      <>
                        <button className="Btn">
                          <span className="live-button svgContainer">
                            <FaGlobe style={wwwIconStyle} />
                          </span>
                          <span className="BG"></span>
                        </button>{" "}
                        <a
                          href={card.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </>
                    )}
                    {card.liveLink && card.githubLink && (
                      <span className="button-separator"></span>
                    )}
                    {card.githubLink && (
                      <>
                        <button class="Btn">
                          <span class="github-button svgContainer">
                            <svg
                              fill="blue"
                              viewBox="0 0 496 512"
                              height="1.6em"
                            >
                              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                          </span>
                          <span class="BG"></span>
                        </button>

                        <a
                          href={card.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-buttons">
              <button
                onClick={() => handleButtonClick(index, "#about")}
                className={
                  activeSections[index] === "#about" ? "is-active" : ""
                }
                data-section="#about"
              >
                ABOUT
              </button>
              <button
                onClick={() => handleButtonClick(index, "#experience")}
                className={
                  activeSections[index] === "#experience" ? "is-active" : ""
                }
                data-section="#experience"
              >
                Tech Stack
              </button>
              <button
                onClick={() => handleButtonClick(index, "#contact")}
                className={
                  activeSections[index] === "#contact" ? "is-active" : ""
                }
                data-section="#contact"
              >
                Link
              </button>
              {activeSections[index] && (
                <button
                  onClick={() => handleCancelButtonClick(index)}
                  className="cancel-button"
                >
                  <IoIosArrowUp style={arrowUpStyle} />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
