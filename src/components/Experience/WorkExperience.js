import React, { Component } from 'react'
import "./WorkExperience.scss";
import Widhya from "../../assets/images/experience-page/widhya.jpg"
import TFS from "../../assets/images/experience-page/TSF.png"
import TSPS from "../../assets/images/experience-page/TSPS.png"

export class WorkExperience extends Component {
    render() {
        return (
            <div>
                <div className="exp-Bg">Work Experience</div>
                <h2 className="exp-Fr">Work Experience</h2>
                <div className="work-exp">
                    <ul className="work-exp-list">

                        <li>
                            <div className="exp">
                                <img src={TFS} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="exp__thumb" src="https://img.icons8.com/fluent/100/000000/web-analystics.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">The Sparks Foundation</h3>
                                            <span className="exp__status">Data Science & Business Analytics Intern<br />
                                            March' 21 - April' 21</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Learnt valuable skills and knowledge
            on how to apply textbook concepts to solve real world problems.</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="exp">
                                <img src={Widhya} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="exp__thumb" src="https://img.icons8.com/plasticine/100/000000/web.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Widhya</h3>
                                            <span className="exp__status">Frontend Developer Intern<br />
                                            Jan' 21 - Feb' 21</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Worked as a Frontend Developer Intern and secured 40 position out of 600 interns.</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="exp">
                                <img src={TSPS} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img lassName="exp__thumb" src="https://img.icons8.com/dusk/50/000000/developer-mode.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">The Six PM Show</h3>
                                            <span className="exp__status">Associate Lead<br />
                                            Nov' 20 - present</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Responsible for handling the official site of the team. Helping fellow leads and associates with their tasks.</p>
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
