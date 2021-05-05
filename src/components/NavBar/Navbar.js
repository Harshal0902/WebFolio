import React, { useContext } from "react";
import { Link } from "react-scroll"
import Headroom from "react-headroom";
import "./Navbar.css";
import StyleContext from "../../contexts/StyleContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom style={{ position: "fixed" }}>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
              <span className="grey-color">&lt;</span>
          <span className="logo-name">John Deo</span><span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
          <Link activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}>
              Skills</Link>
          </li>
          <li>
          <Link activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}>
              Projects</Link>
          </li>
          <li>
          <Link activeClass="active"
              to="experiences"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}>
              Work Experiences</Link>
          </li>
          <li>
          <Link activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}>
              Education</Link>
          </li>
          <li>
            <Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}>
              Contact Me</Link>
          </li>

          <li>
            <a href="#">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
