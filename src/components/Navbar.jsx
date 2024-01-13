import { useState } from "react";
import Moon from "../assets/moon.webp";
import Sun from "../assets/19.webp";

const Navbar = ({
  onNavItemClick = () => {},
  switchTheme = () => {},
  theme,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <input
            className="check"
            type="checkbox"
            onChange={() => setShowSidebar(!showSidebar)}
            checked={showSidebar}
          />
          <div className={showSidebar ? "line line-1" : "line line1"}></div>
          <div className={showSidebar ? "line line-2" : "line line2"}></div>
          <div className={showSidebar ? "line line-3" : "line line3"}></div>
        </div>

        <p className="navbar_name">
          <img
            src={theme === "light" ? Sun : Moon}
            alt=""
            onClick={switchTheme}
          />
          <span>Akash</span>
        </p>
        <div className="navbar_list">
          <p
            className="navbar_list_item"
            onClick={() => onNavItemClick("about")}
          >
            About
          </p>

          <p
            className="navbar_list_item"
            onClick={() => onNavItemClick("projects")}
          >
            Projects
          </p>
          <p
            className="navbar_list_item"
            onClick={() => onNavItemClick("skills")}
          >
            Skills
          </p>
          <p
            className="navbar_list_item"
            onClick={() => onNavItemClick("contact")}
          >
            Contact
          </p>
        </div>
      </nav>

      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item" onClick={() => onNavItemClick("about")}>
          About
        </p>

        <p className="sidebar_item" onClick={() => onNavItemClick("projects")}>
          Projects
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("skills")}>
          Skills
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("contact")}>
          Contact
        </p>
      </div>
    </>
  );
};

export default Navbar;
