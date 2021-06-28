import React, { Component } from 'react'
import "./Projects.css"
import COVID from "../../assets/images/project-page/COVID19.png"

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
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="github" src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                        <li className="web">
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="web"
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
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="github" src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                        <li className="web">
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="web"
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
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="github" src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                        <li className="web">
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="web"
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
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="github" src="https://img.icons8.com/clouds/60/000000/github.png" /></a>
                                        </li>
                                        <li className="web">
                                            <a rel="noreferrer" href="/#" target="_blank"><img alt="web"
                                                src="https://img.icons8.com/clouds/60/000000/domain.png" /></a>
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
