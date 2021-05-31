import React, { Component } from 'react'
import "./Projects.scss"
import Rudra from "../../assets/images/project-page/police.jpg"
import Signal from "../../assets/images/project-page/Signal.png"
import WomenEss from "../../assets/images/project-page/Women Essentials.jpg"
import COVID from "../../assets/images/project-page/COVID19.png"
import Minecrft from "../../assets/images/project-page/minecraft.jpeg"
import ObjDetection from "../../assets/images/project-page/Object Detection.jpg"


import ProjectList from "./NewProj/Project2"

export class Projects extends Component {
    render() {
        return (
            <>
                <div id="projects">
                    <h2 className="projectbg">Projects</h2>
                    <div className="projectfr">Projects</div>

                    <ProjectList />

                    {/* <section id="main">
                        <div class="container_lead">

                            <div className="card">
                                <div className="imgBx">
                                    <img src={Rudra} alt="" />
                                </div>
                                <div className="content">
                                    <div className="contentBx" >
                                        <h3 style={{ color: "black" }}>Rudra <br /><span
                                        >(HTML, CSS, Js, React Js)<br />A responsive Web
                      Application for Police and Public Assistance.</span></h3>
                                    </div>
                                    <ul className="sci">
                                        <li >
                                            <a rel="noreferrer" href="https://github.com/Harshal0902/Rudra" target="_blank"><img alt="github"
                                                src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                        <li >
                                            <a rel="noreferrer" href="https://rudraweb.netlify.app/" target="_blank"><img alt="web"
                                                src="https://img.icons8.com/clouds/60/000000/domain.png" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imgBx">
                                    <img src={Signal} alt="" />
                                </div>
                                <div className="content">
                                    <div className="contentBx" >
                                        <h3>Signal Clone <br /><span
                                        >(React Native, Expo, Firebase)<br />A clone of a
                                    famous social media platform Signal</span></h3>
                                    </div>
                                    <ul className="sci">
                                        <li >
                                            <a rel="noreferrer" href="https://github.com/Harshal0902/Signal-Clone" target="_blank"><img alt="github" src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imgBx">
                                    <img src={WomenEss} alt="" />
                                </div>
                                <div className="content">
                                    <div className="contentBx" >
                                        <h3 style={{ color: "black" }}>Women Essentials <br /><span
                                        >(React Js, Flask)<br />Women Essential is an all-in-one women's health platform.</span></h3>
                                    </div>
                                    <ul className="sci">
                                        <li>
                                            <a rel="noreferrer" href="https://github.com/Harshal0902/Women-Essential" target="_blank"><img alt="github" src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" href="https://womenessentials.herokuapp.com/" target="_blank"><img alt="web"
                                                src="https://img.icons8.com/clouds/60/000000/domain.png" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imgBx">
                                    <img src={COVID} alt="" />
                                </div>
                                <div className="content">
                                    <div className="contentBx" >
                                        <h3 style={{ color: "black" }}>COVID19 Tracker <br /><span
                                        >(React Js)<br />A COVID19 Tracker for tracking live
                                    cases for all courtiers</span></h3>
                                    </div>
                                    <ul className="sci">
                                        <li>
                                            <a rel="noreferrer" href="https://github.com/Harshal0902/COVID-19-Tracker" target="_blank"><img alt="github" src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" href="https://covid19-tracker-20331.web.app/" target="_blank"><img alt="web"
                                                src="https://img.icons8.com/clouds/60/000000/domain.png" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imgBx">
                                    <img src={Minecrft} alt="" />
                                </div>
                                <div className="content">
                                    <div className="contentBx" >
                                        <h3>Minecraft Game <br /><span
                                        >(React Js)<br />A simple Minecraft Game using React
                                    Js</span></h3>
                                    </div>
                                    <ul className="sci">
                                        <li>
                                            <a rel="noreferrer" href="https://github.com/Harshal0902/Minecraft" target="_blank"><img alt="github"
                                                src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" href="https://minecraft-game-368ef.web.app/" target="_blank"><img alt="web"
                                                src="https://img.icons8.com/clouds/60/000000/domain.png" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imgBx">
                                    <img src={ObjDetection} alt="" />
                                </div>
                                <div className="content">
                                    <div className="contentBx" >
                                        <h3>Object Detection<br /><span
                                        >(Tensorflow, React Js)<br />Real-time object
                                        detection in React Js using Tensorflow</span></h3>
                                    </div>
                                    <ul className="sci">
                                        <li>
                                            <a rel="noreferrer" href="https://github.com/Harshal0902/React-Object-Detection" target="_blank"><img alt="github"
                                                src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" href="https://react-object-detection.web.app" target="_blank"><img alt="web"
                                                src="https://img.icons8.com/clouds/60/000000/domain.png" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section> */}
                </div>
                <div className="btn_center">
                    <a href="https://github.com/Harshal0902" target="blank"><div className="btn" style={{ color: "white" }}>More Projects
                            <div className="btn2"></div>
                    </div></a>
                </div>

            </>

        )
    }
}

export default Projects
