import React, {Component} from "react";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";
import Header from "../components/header/Header";
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Experience from "../components/Experience/Experience"
import Education from "../components/Education/Education"
import Testimonial from "../components/Testimonial/Testimonial.js"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import Scroll from "../components/ScrollToTop/Scroll"

// import Skilltest from "../components/Skills/Skilltest"
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
    this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }
  changeTheme = () => {
    this.setState({isDark: !this.state.isDark}, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render(){
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}
        >
          <Header />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          {/* <Testimonial /> */}
          <Contact />
          <Footer />
          <Scroll showBelow={400} />
        </StyleProvider>
      </div>
    );
  }
}
