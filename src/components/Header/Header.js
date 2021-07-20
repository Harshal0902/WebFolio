import React, { useContext } from "react";
import { Link } from "react-scroll"
import Headroom from "react-headroom";
import Fade from 'react-reveal/Fade';
import "./Header.css";
import StyleContext from "../../contexts/StyleContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom style={{ position: "fixed" }}>
      <Fade top duration="2000">
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">John Doe</span><span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" for='menu-btn' type="checkbox" id="menu-btn" />
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
              to="education"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}>
              Education</Link>
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
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}>
              Projects</Link>
          </li>
          <li>
            <Link activeClass="active"
              to="awards"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}>
              Awards</Link>
          </li>
          <li>
            <Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}>
              Let's Talk</Link>
          </li>
          <li>
            <a rel="Dark Mode Toggle" aria-label="Toggle" aria-labelledby="Dark Mode Toggle" href="/#">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
      </Fade>
    </Headroom>
  );
}
export default Header;