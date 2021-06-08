import React, { Component } from 'react'
import "./WorkExperience.css";
import Google from "../../assets/images/experience-page/google.png"
import Amazon from "../../assets/images/experience-page/amazon.png"
import Tesla from "../../assets/images/experience-page/tesla.png"

export class WorkExperience extends Component {
    render() {
        return (
            <div id="experiences">
                <div className="exp-Bg">Work Experience</div>
                <h2 className="exp-Fr">Work Experience</h2>
                <div className="work-exp">
                    <ul className="work-exp-list">

                        <li>
                            <div className="exp">
                                <img src={Google} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="exp__thumb" alt="Data Science" src="https://img.icons8.com/fluent/100/000000/web-analystics.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Google</h3>
                                            <span className="exp__status">Google SEPT Intern<br />
                                            May' 21 - Sept' 21</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Learned valuable skills and knowledge
            on how to apply textbook concepts to solve real-world problems.</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="exp">
                                <img src={Amazon} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img alt="Web-Developer" className="exp__thumb" src="https://img.icons8.com/plasticine/100/000000/web.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Amazon</h3>
                                            <span className="exp__status">Software Developer Intern<br />
                                            Jan' 21 - Feb' 21</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Learned valuable skills and knowledge
            on how to apply textbook concepts to solve real-world problems.</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="exp">
                                <img src={Tesla} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img alt="devloper" className="exp__thumb" src="https://img.icons8.com/dusk/50/000000/developer-mode.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Tesla</h3>
                                            <span className="exp__status">Software Developer Intern<br />
                                            Nov' 20 - present</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Learned valuable skills and knowledge
            on how to apply textbook concepts to solve real-world problems.</p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default WorkExperience
