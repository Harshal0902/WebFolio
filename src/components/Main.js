import React, { Component } from "react"
import { StyleProvider } from "../contexts/StyleContext"
import "./Main.css"
import Header from "./Header/Header"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Education from "./Education/Education"
import VolExp from "./Experience/VolExp"
import WorkExp from "./Experience/WorkExperience"
import Project from "./Projects/Projects"
import Awards from "./Awards/Awards"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import Scroll from "./ScrollToTop/Scroll"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({ isDark: JSON.parse(localStorage.getItem("isDark")) });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark }, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}>
          <Header />
          <About />
          <Skills />
          <Education />
          <WorkExp />
          <VolExp />
          <Project />
          <Awards />
          <Contact />
          <Footer />
          <Scroll showBelow={400} />
        </StyleProvider>
      </div>
    );
  }
}
