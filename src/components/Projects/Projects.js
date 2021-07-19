import React, { Component } from 'react'
import "./Projects.css"
import GitHub from "../../assets/images/project-page/github.png"
import Web from "../../assets/images/project-page/website.png"
import EduAR from "../../assets/images/project-page/EduAR.jpg"
import Signal from "../../assets/images/project-page/Signal.png"
import Minecraft from "../../assets/images/project-page/minecraft.jpeg"

export class Projects extends Component {
    render() {
        return (
            <>
                <div id="projects">
                    <h2 className="projectbg">Projects</h2>
                    <div className="projectfr">Projects</div>

                    <section id="main">
                        <div class="container_proj">

                            <div className="card">
                                <div className="imgBx">
                                    <img src={EduAR} alt="" />
                                </div>
                                <div className="content">
                                    <div className="contentBx" >
                                        <h3 style={{ color: "black" }}>EduAR <br /><span
                                        >(React Js, echoAR, Firebase)<br />AR-based website where students can learn with the help of 3D Models.
                                        </span></h3>
                                    </div>
                                    <ul className="sci">
                                        <li>
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="github" width="45px" height="45px" src={GitHub} /></a>
                                        </li>
                                        <li className="web">
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="web"
                                                width="45px" height="45px" src={Web} /></a>
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
                                        <h3 style={{ color: "black" }}>Signal Clone <br /><span
                                        >(React Native, Expo, Firebase)<br />A clone of a famous social media platform Signal.
                                        </span></h3>
                                    </div>
                                    <ul className="sci">
                                        <li>
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="github" width="45px" height="45px" src={GitHub} /></a>
                                        </li>
                                        <li className="web">
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="web"
                                                width="45px" height="45px" src={Web} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imgBx">
                                    <img src={Minecraft} alt="" />
                                </div>
                                <div className="content">
                                    <div className="contentBx" >
                                        <h3 style={{ color: "black" }}>Minecraft Game <br /><span
                                        >(React Js, Three.js)<br />A simple Minecraft Game using React Js and Three.js
                                        </span></h3>
                                    </div>
                                    <ul className="sci">
                                        <li>
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="github" width="45px" height="45px" src={GitHub} /></a>
                                        </li>
                                        <li className="web">
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="web"
                                                width="45px" height="45px" src={Web} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
                <div className="btn_center">
                    <a href="/#" target="blank"><div className="btn" style={{ color: "white" }}>More Projects
                        <div className="btn2"></div>
                    </div></a>
                </div>

            </>

        )
    }
}

export default Projects
